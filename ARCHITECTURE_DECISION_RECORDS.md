# 架构决策记录 — Architecture Decision Records

> **版本**: v1.0.0  
> **日期**: 2026-04-20  
> **Output**: Hermes01

Architecture Decision Records (ADR) 记录了 NueroUI / BreezeUI 设计系统中的重要架构决策。

---

## ADR 格式

每个 ADR 包含以下部分：

```
# ADR-{编号}: {标题}

## 状态
[提议 | 接受 | 已废弃 | 已替换]

## 上下文
描述做出决策的背景和问题。

## 决策
描述采取的具体决策。

## 结果
### 正面
### 负面
### 相关决策
```

---

## ADR-001: 采用双设计系统策略

**状态**: 接受

**日期**: 2026-04-19

### 上下文

我们需要为不同场景提供合适的设计系统。单一日设计系统难以同时满足：
- 深色主题（企业后台、专业工具）
- 浅色主题（消费者产品、移动应用）

### 决策

采用双设计系统策略：
- **NueroUI**: 稳重科技风，深色默认，面向企业后台
- **BreezeUI**: 明亮清新风，浅色默认，面向消费者产品

两个系统共享相似的架构和工具链，但有独立的设计语言。

### 结果

**正面**:
- 设计定位清晰，针对性强
- 便于独立演进
- 共享 token 系统和图标资源

**负面**:
- 维护成本加倍
- 需要保持两个系统的同步更新

**相关决策**: ADR-003 (Token 系统设计)

---

## ADR-002: 图标双 Variant 策略

**状态**: 接受

**日期**: 2026-04-19

### 上下文

不同场景需要不同的图标风格：
- filled 变体：紧凑 UI、按钮内、状态指示
- outline 变体：导航、标题、强调展示

### 决策

所有图标必须同时提供 `-filled` 和 `-outline` 两种变体：
```
icons/
├── {name}-filled.svg   # 实心变体
└── {name}-outline.svg  # 描边变体
```

两种变体必须保持一致的视觉重量和尺寸。

### 结果

**正面**:
- 满足不同场景需求
- 设计师有更多选择
- 使用简单明了

**负面**:
- 图标数量翻倍
- 需要维护两套 SVG

---

## ADR-003: 采用 W3C DTCG Token 标准

**状态**: 接受

**日期**: 2026-04-19

### 上下文

需要一种跨平台、一致的 Design Token 格式，以支持：
- Web (CSS Custom Properties)
- Mobile (Flutter/SwiftUI/Compose)
- 可能的桌面平台

### 决策

采用 W3C Design Token Community Group (DTCG) 规范：
- 使用 JSON 格式存储 token
- 支持主题变体（default/light/dark 等）
- 支持别名机制（alias）

```json
{
  "$schema": "https://design-tokens.org/schema/v1.0.0.json",
  "name": "NueroUI",
  "version": "1.0.0",
  "colors": { ... },
  "aliases": { ... }
}
```

### 结果

**正面**:
- 行业标准，工具支持好
- 易于转换为各平台格式
- 支持主题变体和别名

**负面**:
- 规范相对较新，部分工具还在完善中

**相关决策**: ADR-001 (双设计系统策略)

---

## ADR-004: CSS 类名采用 BEM 命名法

**状态**: 接受

**日期**: 2026-04-19

### 上下文

需要一种可扩展、清晰的 CSS 类命名规范，以避免：
- 命名冲突
- 样式泄露
- 难以维护

### 决策

采用 BEM (Block Element Modifier) 命名法：

```
Block:     .nui-card
Element:   .nui-card__header
Modifier:  .nui-card--elevated
Combined:  .nui-card__header--primary
```

组件前缀隔离：
- NueroUI: `.nui-`
- BreezeUI: `.bz-`

### 结果

**正面**:
- 命名空间隔离，避免冲突
- 结构清晰，易于理解
- 便于工具处理（Linter、Minifier）

**负面**:
- 类名较长
- 需要团队统一遵守规范

---

## ADR-005: hermes-console 图标同步策略

**状态**: 接受

**日期**: 2026-04-20

### 上下文

hermes-console 使用 NueroUI 图标，但存在以下问题：
- hermes-console 有额外图标未同步回 NueroUI
- 图标源不一致，难以维护
- 需要确保 hermes-console 始终包含所有 NueroUI 图标

### 决策

建立单一真相来源（Single Source of Truth）：
- **主源**: `/root/NueroUI/icons/` — 只读源
- **消费点**: `/root/hermes-console/frontend/assets/icons/` — 从主源同步

同步规则：
1. 所有新图标必须先添加到 NueroUI 主源
2. hermes-console 使用 rsync 从主源同步
3. hermes-console 专属图标必须同步回 NueroUI

### 结果

**正面**:
- 单一真相来源
- 避免图标重复维护
- 清晰的同步流程

**负面**:
- 需要额外的同步步骤
- 同步失败可能影响 hermes-console

**相关决策**: ADR-002 (图标双 Variant 策略)

---

