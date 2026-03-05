# 架构评审 v2: 深度技术审计 + 优化路线

> **日期**: 2026-03-05
> **版本**: v2.0（基于 v1 反思迭代）
> **方法**: 全量代码扫描 + 数据流追踪 + 性能基线测量

## 与 v1 的核心差异

| 维度 | v1 评估 | v2 修正 |
|------|---------|---------|
| 全局变量 | "~180-200" 估算 | **73 个**精确统计（12 状态+21 应用+16 缓存+8 定时器+10 常量+6 UI） |
| getPairs() 耦合 | "强耦合，改动大" | **低难度可扩展**——`type` 字段是天然扩展点 |
| levels.js 拆分 | "需要重构" | **数据完美分段**——CIE/Edx/25m 按顺序排列，可直接切割 |
| Panel 懒加载 | "不可行" | **8/16 Panel 可懒加载**——Study/Quiz/Spell/Match/Battle/Review/Daily/Import |
| 实现成本 | 各层均偏乐观 | Layer 2 从"低"→"中"；Layer 3 有现成资产大幅降低 |

## 一、精确架构画像

### 1.1 代码规模

| 组件 | 原始大小 | Gzip 估算 | 占比 |
|------|----------|-----------|------|
| levels.js（纯数据） | 274 KB | ~25 KB | 47% |
| 其他 18 个 JS 文件 | 307 KB | ~55 KB | 53% |
| style.css | 75 KB | ~12 KB | — |
| index.html | 13 KB | ~4 KB | — |
| Supabase SDK (CDN) | ~60 KB | ~18 KB | — |
| **首屏总下载** | **~830 KB** | **~114 KB** | — |

### 1.2 全局变量分类（73 个）

```
状态对象  12 ▓▓▓▓▓▓▓▓▓▓▓▓
应用状态  21 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
缓存变量  16 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
定时器    8  ▓▓▓▓▓▓▓▓
常量     10 ▓▓▓▓▓▓▓▓▓▓
UI引用    6  ▓▓▓▓▓▓
```

**v1 过高估计了问题严重度**：73 个全局变量虽多，但分类清晰、命名无冲突。短中期不阻塞新功能开发。收拢为命名空间是"锦上添花"而非"必须前置"。

### 1.3 数据流核心链路

```
用户交互 → recordAnswer(key, mode, correct)
              ├── 更新 s.words[key] (ok/fail/stars/SRS)
              ├── 更新 s.history[] (学习记录)
              ├── 更新 s.streak (连续天数)
              ├── writeS(s) → localStorage + 缓存失效
              └── debouncedSync() → 2s 后 Supabase upsert

getWordData() ← 16 个读取点（7 个文件）
              ← 带缓存 (_cacheDirty 标记)
              ← recordAnswer 调用 writeS 自动失效缓存
```

**关键发现**：`recordAnswer()` 是整个系统的写入核心，15 个调用点，7 个文件。扩展练习题模式只需新增调用点，无需修改函数本身。

### 1.4 getPairs() 可扩展性（v1 修正）

v1 认为 getPairs() "强耦合，改动所有模式"。**实际上扩展很容易**：

```js
// 当前 vocabulary 数据格式
{id:"0", type:"word", content:"Angle"},
{id:"0", type:"def",  content:"角"}

// 扩展只需新增 type：
{id:"0", type:"formula", content:"∠ABC"},
{id:"0", type:"example", content:"A right angle is 90°"},
{id:"0", type:"diagram", content:"url_or_svg_path"}
```

`getPairs()` 内部用 `m[v.id][v.type] = v.content` 映射，**天然支持任意 type**。修改 getPairs() 一处即可让所有 pair 对象携带新字段。各模式的渲染函数只使用 `.word` 和 `.def`，新字段不影响现有模式。

### 1.5 levels.js 拆分可行性（v1 修正）

v1 说"需要大重构"。**实际上数据完美分段**：

```
行 1-787:     CIE 0580     (50 级,  ~52 KB)
行 788-1401:  Edexcel 4MA1 (41 级,  ~41 KB)
行 1402-4125: 25Maths      (173 级, ~181 KB)
```

**但有一个陷阱**：全局 26 处用 `LEVELS[index]` 整数索引访问。拆分后索引会变。
**解法**：延迟拼接 `LEVELS = [].concat(cie, edx, m25)`，保持数组索引不变。或迁移到 slug-based 查找（`LEVELS_MAP[slug]`）。

### 1.6 Panel 懒加载分析

| 类别 | Panel | 全局依赖深度 | 懒加载难度 |
|------|-------|-------------|-----------|
| 学习模式 | study, quiz, spell, match, battle, review, daily | 自有状态 + LEVELS + 公共函数 | **低** |
| 工具 | import, preview | 极少依赖 | **低** |
| 仪表盘 | home, deck, review-dash, stats | 多个全局状态 | **中** |
| 管理 | admin, homework, board | Supabase + 多缓存 | **高** |

**10/16 Panel 可低成本懒加载**。这意味着学生用户完全不需要加载 admin.js (38KB) + vocab-admin.js (15KB) + homework.js 的教师部分。

### 1.7 Supabase 集成（63 个 API 调用）

| 表 | 操作数 | 文件分布 |
|----|--------|----------|
| vocab_progress | 2 | storage.js |
| leaderboard | 4 | storage.js, app.js |
| assignments / results | 12 | homework.js |
| classes / class_students | 6 | admin.js, app.js, homework.js |
| feedback | 5 | ui.js, vocab-admin.js |
| vocab_levels | 4 | storage.js, vocab-admin.js |
| notifications | 3 | homework.js |
| teachers / schools | 2 | admin.js |
| auth | 5 | auth.js |
| **总计** | **63** | 7 个文件 |

新增 `practice_questions` 表**零架构障碍**：遵循现有 `sb.from('table').select/insert` 模式即可。

### 1.8 练习题现成资产（v1 遗漏的关键发现）

**25maths-website 练习题格式**：
```json
{
  "subtopicId": "cie0580:algebra-c2:c2-01-introduction-to-algebra",
  "questions": [{
    "type": "multiple-choice",
    "questionText": "Simplify `4a + 5a - 2a`",
    "options": ["7a", "11a", "9a - 2a", "7"],
    "correctAnswer": 0,
    "explanation": "Combine coefficients: 4+5-2=7"
  }]
}
```

**与现有 Quiz 模式的兼容度极高**：
- `questionText` → 题目显示
- `options[4]` → 四选一（与 Quiz 完全一致）
- `correctAnswer` → 评分
- `explanation` → 结果页解析

**数学渲染需求**：题目用反引号包裹 LaTeX（如 `` `4a + 5a - 2a` ``）。简单代数表达式可用纯文本显示；分数/根号/几何需 KaTeX。**可分阶段引入**：先上纯文本题，后加 KaTeX。

**CIE 真题数据**：按 subtopic 标签分类，含 cognitive level 和 marks。可作为进阶内容的元数据。

## 二、修正后扩展路线（v2）

### v1 路线的问题

1. Phase 0（架构准备）范围过大——把全局变量重构列为前置条件，实际上不必要
2. 低估了 getPairs() 的可扩展性，高估了改造成本
3. 遗漏了"纯文本练习题先行"策略——不需要等 KaTeX 就能上线 Layer 3 的子集
4. 没有利用现有 Quiz 模式的代码复用潜力

### v2 修正路线

```
Phase A: 数据层优化（3-5 天）【新增，但范围缩小】
├── levels.js 按 board 拆分为 3 个 JSON（异步加载）
├── 角色按需加载（学生不加载 admin/vocab-admin）
└── 简单 minify 脚本（esbuild 一行命令）
    ↓ 首屏从 114KB → ~75KB gzip

Phase B: 选择题练习——纯文本先行（1 周）【Layer 3 快速突破】
├── 导入 25maths-website 纯文本选择题（~800 题无 LaTeX 依赖）
├── 复用 Quiz 模式 UI（pickQuizOpt 稍作修改支持 4 选项文本）
├── 按 topic + difficulty 筛选
├── 练习进度独立存储（practice_progress 表）
└── 结果页显示 explanation 解析

Phase C: 概念卡 + KaTeX（1 周）【Layer 2】
├── getPairs() 扩展支持 formula/example 字段
├── KaTeX 按需加载（<50KB gzip，仅概念页触发）
├── 独立 panel-concept（概念卡翻转学习）
└── 剩余 ~400 题（含分数/根号等）接入练习模块

Phase D: 智能学习路径（1 周）【跨层整合】
├── 词汇→概念→练习 三层关联（subtopicId 映射）
├── 薄弱点检测（基于 wordData.fail 聚合到 topic 维度）
├── 练习推荐引擎（错误率高的 topic 优先推练习题）
└── 教师端：布置练习题作业

Phase E: 评估层（2 周，可选）【Layer 4】
├── 诊断测试（快速 20 题定位薄弱点）
├── 按考试局模拟卷格式组题
└── 服务端评分（Edge Function）
```

### v2 路线的关键改进

| 改进 | 说明 |
|------|------|
| **Phase 0 大幅缩小** | 全局变量重构降级为可选，只做数据拆分和按需加载 |
| **Layer 3 提前到 Phase B** | 纯文本选择题无需 KaTeX，复用 Quiz UI，最快见效 |
| **Layer 2 延后到 Phase C** | 概念卡需要 KaTeX，与练习题的 LaTeX 需求合并 |
| **新增 Phase D** | 三层关联是平台的核心差异化能力 |
| **Phase E 标记可选** | 评估层复杂度高，但核心价值在 B+C+D |

## 三、风险矩阵

| 风险 | 概率 | 影响 | 缓解措施 |
|------|------|------|----------|
| levels.js 拆分破坏索引引用 | 高 | 高 | 全局搜索 `LEVELS[` 的 26 处，逐一确认 |
| KaTeX 加载影响首屏性能 | 中 | 中 | 动态 import，仅概念页触发 |
| 练习题数据量膨胀 localStorage | 中 | 中 | 练习进度存 Supabase，不走 localStorage |
| 纯文本题覆盖率不足 | 低 | 低 | 实测 25maths-website 题库，先统计 LaTeX 依赖比例 |
| 全局变量冲突 | 低 | 低 | 73 个变量已命名清晰，短期无风险 |

## 四、核心结论

1. **v1 高估了改造难度**：73 个全局变量（非 200）、getPairs() 天然可扩展、levels.js 完美分段
2. **最高 ROI 路径**：Phase B（纯文本练习题）——800 道现成题 + Quiz UI 复用，1 周可上线
3. **真正的前置依赖只有一个**：levels.js 按 board 拆分（Phase A），其他都可并行
4. **KaTeX 不是阻塞项**：先上纯文本，后加渲染，分阶段降低风险
