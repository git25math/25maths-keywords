# 扩展分析 v1: 从词汇工具到双语数学学习支撑平台

> **日期**: 2026-03-05
> **版本**: v1.0
> **状态**: 初始分析（已被 v2 架构评审修正）

## 背景

25Maths-Keywords 已从简单词汇卡发展为覆盖 3 个考试局、264 级、2,200 词的完整双语数学词汇学习平台（v1.3.0）。本文分析如何进一步扩展为完整的 bilingual maths learning support hub。

## 四层扩展模型

```
Layer 4: Assessment（诊断测试 / 模拟考试 / 成绩预测）
Layer 3: Practice（分主题练习题 / 错题本 / 解题步骤）
Layer 2: Concept（公式卡 / 知识点卡 / 图示解释）
Layer 1: Vocabulary（当前 — 词汇闪卡 / SRS / 六模式）
```

### Layer 1: Vocabulary（当前已完善）

v1.3.0 已高度完善：
- 7 种学习模式（Study / Quiz / Spell / Match / Battle / Review / Daily Challenge）
- SRS 8 级艾宾浩斯复习系统
- 星级计分体系（learningPct + masteryPct 双指标）
- 学习路径引导（主线三步 + 辅助三模式 + ✓ 进度标记）
- 错词即时复习
- 教师管理 + 作业系统 + 排行榜

### Layer 2: Concept Cards（公式卡 / 知识点卡）

**目标**：每个词汇关联公式、定义、图示、例题

**数据结构扩展**：
```js
// 当前 pair: { word, def, lid }
// 扩展 concept: { word, def, lid, formula?, diagram?, example?, related? }
```

**可复用模式**：
- Flashcard Study → 公式卡翻转学习
- Quiz → 公式→名称 / 名称→公式 四选一
- Spell → 给公式写术语名

**新增模式**：
- Formula Builder — 拖拽组件构建公式
- Concept Map — 知识点关联图

**实现路径**：
- 优先从 CIE 0580 高频考点开始（代数、几何、统计各 10-20 个核心公式）
- 数据可手写 JSON 或从 .tex 文件提取

### Layer 3: Practice（练习题）

**现有资产**：
- 25maths-website: ~1,200 道练习题（202 个 JSON 文件，选择题格式）
- CIE 分析管道: ~2,300 道真题（含 subtopic / difficulty / cognitive level 标签）

**实现路径**：
1. 导入 25maths-website 选择题（已有标准 JSON 格式）
2. 按 topic + difficulty 筛选
3. 错题自动关联到对应词汇卡
4. CIE 真题作为进阶内容

**新增功能**：
- 分步解题（step-by-step solution）
- 错题本（自动收集 + 定期复习）
- 难度自适应（根据正确率调整题目难度）

### Layer 4: Assessment（评估）

**功能规划**：
- 诊断测试：快速识别薄弱知识点
- 模拟考试：按考试局格式模拟（CIE Paper 1/2/4、Edexcel 1H/2H/3H）
- 成绩预测：基于练习数据预测考试等级

**技术需求**：
- 多题型混合（选择 / 填空 / 简答）
- 评分 rubric（mark scheme）
- 服务端评分逻辑

## 跨层通用能力

| 能力 | 当前状态 | 需要新增 |
|------|----------|----------|
| 双语 UI | ✅ 已完善 | — |
| SRS 复习 | ✅ 词汇级 | 扩展到公式/题目 |
| 教师管理 | ✅ 班级/作业 | 布置练习题作业 |
| 排行榜 | ✅ 词汇维度 | 多维度（词汇/练习/模考） |
| 数据同步 | ✅ Supabase | 新增练习/评估数据表 |
| 离线支持 | ⚠️ 单文件包 | 需 Service Worker |

## 商业价值

1. **差异化定位**：唯一的双语数学学习平台（EN/ZH），面向国际学校市场
2. **考试局覆盖**：CIE + Edexcel + 校本课程，可扩展 IB / AQA
3. **教师生态**：作业系统 + 班级管理形成学校采购动力
4. **数据飞轮**：学生学习数据 → 智能推荐 → 提升效果 → 口碑传播

## ⚠️ 已知局限（见 v2 架构评审）

本分析在 Layer 2-4 的实现成本评估偏乐观。详见 `2026-03-05-architecture-review.md` 中的架构约束分析。
