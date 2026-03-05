# 架构分析文档索引

本目录记录 25Maths-Keywords 项目的架构分析、审计报告和扩展规划。

## 文档列表

| 文件 | 版本 | 内容 |
|------|------|------|
| [2026-03-05-expansion-vision.md](2026-03-05-expansion-vision.md) | v1.0 | 四层扩展模型：词汇→概念→练习→评估 |
| [2026-03-05-module-audit.md](2026-03-05-module-audit.md) | v1.0 | v1.3.0 全模块一致性审计 |
| [2026-03-05-architecture-review.md](2026-03-05-architecture-review.md) | v1.0 | 架构可行性评审（初版，偏保守） |
| [2026-03-05-architecture-review-v2.md](2026-03-05-architecture-review-v2.md) | v2.0 | 深度技术审计 + 修正路线（推荐） |
| [scoring-spec-v1.0.md](../scoring-spec-v1.0.md) | v1.0 | 星级计分规格说明 |
| [scoring-impl-checklist.md](../scoring-impl-checklist.md) | v1.0 | 计分系统实施检查清单 |

## 版本演进

```
v1 扩展愿景 → v1 架构评审（偏保守）→ v2 深度审计（修正，推荐）
                                          ↑
                              全局变量精确统计 73 个（非 200）
                              getPairs() 天然可扩展
                              levels.js 完美分段可拆分
                              800 道纯文本题可直接复用
```
