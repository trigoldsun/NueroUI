# NueroUI Design System

<p>
  <img src="https://img.shields.io/badge/version-1.0.0-00D4FF?style=flat-square" alt="version">
  <img src="https://img.shields.io/badge/platform-Web%20·%20Mobile%20·%20Desktop%20·%20HUD-00D4FF?style=flat-square" alt="platforms">
  <img src="https://img.shields.io/badge/license-MIT-E8344A?style=flat-square" alt="license">
  <img src="https://img.shields.io/badge/maintainer-Hermes01%20%7C%20MiniMax--M2.7-C9A84C?style=flat-square" alt="maintainer">
</p>

---

## 设计理念

**稳重 · 数字时代 · 全平台**

NueroUI 是一套面向全硬件平台的设计语言体系。

- **视觉基调**：深海蓝黑 `#0B0E17`，传达沉稳可靠的专业气质
- **数字时代感**：科技青 `#00D4FF` 贯穿细节，几何线条，精致光晕
- **中国韵**：朱红 `#E8344A` / 墨金 `#C9A84C` / 翠玉 `#00C48C` 作为点缀

> "静水深流，机锋内敛 — 稳重而不沉闷，数字感而不冰冷。"

---

## 核心色板

| 类别 | 色值 | 用途 |
|------|------|------|
| 背景主色 | `#0B0E17` | 深海蓝黑 |
| 背景副色 | `#131829` | 卡片/面板 |
| 强调·科技青 | `#00D4FF` | 主题色 |
| 强调·能量紫 | `#7B61FF` | 次级强调 |
| 成功·翠玉 | `#00E676` | 成功状态 |
| 警告·琥珀 | `#FFB300` | 警告状态 |
| 危险·朱红 | `#FF3D71` | 危险状态 |
| 点缀·墨金 | `#C9A84C` | 装饰/高光 |

---

## 快速开始

### Web (CSS)

```html
<!-- 1. 引入 CSS -->
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="nuero-ui.css">

<!-- 2. 使用组件 class -->
<button class="nui-btn nui-btn--primary">主要按钮</button>
<input class="nui-input" placeholder="输入框" />
```

### 主题切换

```html
<!-- 深色（默认） -->
<html data-theme="dark">

<!-- 浅色 -->
<html data-theme="light">

<!-- 高对比度 -->
<html data-theme="high-contrast">

<!-- 户外强光 -->
<html data-theme="outdoor">

<!-- 车载 HUD -->
<html data-theme="car-hud">
```

---

## 文件结构

```
NueroUI/
├── SPEC.md                     # 完整设计规范文档
├── README.md                   # 本文件
├── CHANGELOG.md                # 版本变更记录
├── tokens.css                  # CSS 设计令牌（变量系统）
├── nuero-ui.css                # 完整组件样式
├── motion.css                  # 动效/动画系统
├── components.html             # 组件展示页面（浏览器打开即可预览）
├── platforms/
│   └── adaptation-guide.md      # 跨平台适配策略
└── icons/                      # 120 个 SVG 图标
    ├── home-outline.svg         # 线性风格
    ├── home-filled.svg          # 填充风格
    └── ... (48 icons × 2 variants)
```

---

## 组件列表

### 基础组件（14个）

| 组件 | Class | 状态 |
|------|-------|------|
| 按钮 | `.nui-btn` | default/hover/active/focus/disabled/loading |
| 输入框 | `.nui-input` | default/focus/error/disabled/password |
| 多行文本 | `.nui-textarea` | — |
| 复选框 | `.nui-check` | unchecked/checked/indeterminate/disabled |
| 单选框 | `.nui-check.nui-check--radio` | — |
| 开关 | `.nui-switch` | off/on/disabled |
| 徽标 | `.nui-badge` | default/primary/success/warning/danger/gold/dot |
| 提示框 | `.nui-tooltip` | — |
| 进度条 | `.nui-progress` | determinate/indeterminate |
| 骨架屏 | `.nui-skeleton` | shimmer 动画 |
| 头像 | `.nui-avatar` | image/initials/placeholder |
| 分隔线 | `.nui-divider` | horizontal/vertical |
| 加载动画 | `.nui-spinner` | sm/md/lg/xl |
| 消息通知 | `.nui-toast` | success/error/warning/info |

### 复合组件（10个）

| 组件 | Class | 说明 |
|------|-------|------|
| 卡片 | `.nui-card` | 悬浮光效边框 |
| 模态框 | `.nui-modal-overlay` + `.nui-modal` | 居中+遮罩 |
| 表格 | `.nui-table` | striped/hover |
| 标签页 | `.nui-tabs` | 下划线式 |
| 侧边导航 | `.nui-sidebar` | 可折叠 |
| 顶部导航 | `.nui-navbar` | Logo+链接+操作 |
| 底部导航 | `.nui-bottom-nav` | 移动端 |
| 面包屑 | — | — |
| 分页器 | — | — |
| 抽屉 | `.nui-drawer-*` | 左/右滑出 |

---

## 图标系统

**规格**：viewBox `0 0 24 24`，线性风格，`stroke-width: 2`，`currentColor` 填充

```html
<!-- SVG 直接使用 -->
<svg class="nui-icon" viewBox="0 0 24 24" width="24" height="24"
     fill="none" stroke="currentColor" stroke-width="2">
  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4..."/>
</svg>

<!-- outline vs filled -->
<img src="icons/home-outline.svg" alt="Home" />
<img src="icons/home-filled.svg" alt="Home Filled" />
```

---

## 平台支持

| 平台 | 状态 | 说明 |
|------|------|------|
| Web (CSS) | ✅ 可用 | tokens.css + nuero-ui.css |
| React | 📐 设计中 | 组件库筹备中 |
| Vue 3 | 📐 设计中 | 组件库筹备中 |
| Figma | 📐 设计中 | 设计令牌 JSON |
| iOS / SwiftUI | 📐 设计中 | 颜色/字体适配中 |
| Android / Compose | 📐 设计中 | — |

---

## 动效系统

所有动效基于 CSS，支持 `prefers-reduced-motion` 自动降级。

| 类别 | 动画名称 |
|------|---------|
| 页面进入 | `.nui-animate-fade-in` / `.nui-animate-slide-up` / `.nui-animate-scale-in` |
| 元素悬浮 | `.nui-lift` / `.nui-card-hover` |
| 按钮交互 | `.nui-btn-press` / `.nui-btn-lift` |
| 骨架屏 | `.nui-skeleton-wave` / `.nui-skeleton-pulse` |
| 进度条 | `.nui-progress-sweep` / `.nui-progress-indeterminate` |
| 加载动画 | `.nui-spinner` / `.nui-pulse` |
| 页面切换 | `.nui-page-enter` / `.nui-page-leave-to` |
| 抽屉滑入 | `.nui-drawer-right` / `.nui-drawer-left` |

---

## 设计令牌（节选）

```css
:root {
  /* Colors */
  --color-bg-primary:      #0B0E17;
  --color-accent-primary: #00D4FF;
  --glow-primary:         0 0 20px rgba(0,212,255,0.35);

  /* Typography */
  --font-display: 'Outfit', 'Noto Sans SC', system-ui, sans-serif;
  --font-body:    'Inter', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', 'Fira Code', monospace;

  /* Spacing (4px base grid) */
  --space-1: 0.25rem;   /* 4px */
  --space-4: 1rem;      /* 16px */
  --space-8: 2rem;      /* 32px */

  /* Motion */
  --duration-normal:  150ms;
  --duration-slow:   250ms;
  --ease-spring:     cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

## License

MIT © Hermes01 / trigoldsun
