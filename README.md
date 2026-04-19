# NueroUI Design System

> 稳重·数字时代 — 深色科技风格设计系统

**v1.0.0** · 2026-04-19 · Hermes01

---

## 设计理念

NueroUI 是一套深色科技风格的设计系统，融合中国传统色彩美学与现代数字界面设计。以深海蓝黑为主背景，科技青 `#00D4FF` 为主色调，能量紫 `#7B61FF` 为辅助色，构建稳重而现代的数字产品视觉语言。

---

## 核心特色

- 🌊 **深海蓝黑** — 主背景 `#0B0E17`，沉稳深邃
- 🔵 **科技青** — 主强调色 `#00D4FF`，未来感
- 🟣 **能量紫** — 辅助强调 `#7B61FF`，层次丰富
- 🏮 **朱红/墨金/翠玉** — 中国传统色点缀
- ⚡ **Spring 动效** — 弹性曲线 `cubic-bezier(0.34, 1.56, 0.64, 1)`
- 📐 **Token 驱动** — CSS Variables / JSON / Flutter / SwiftUI / Compose 全平台覆盖

---

## 文件结构

```
NueroUI/
├── tokens/
│   ├── tokens.css          ✅ CSS Custom Properties (基础)
│   ├── tokens.json          ✅ Design Tokens JSON (W3C DTCG格式)
│   └── ...
├── icons/
│   ├── icons.svg            ✅ 120 SVG 图标 (24×24, stroke-based)
│   ├── icon-names.json       ✅ 图标名称/标签/分类索引
│   └── ...
├── platforms/
│   ├── flutter/              ✅ Flutter/Dart Tokens
│   ├── swiftui/             ✅ SwiftUI Tokens
│   └── compose/              ✅ Jetpack Compose Tokens
├── figma/
│   └── tokens.json          ✅ Figma Variables JSON
├── react/
│   └── nuero-ui-react.tsx   ✅ React 17+ / TypeScript 组件库
├── vue/
│   ├── nuero-ui-vue3.ts     ✅ Vue 3 Composition API
│   └── setup.ts             ✅ Vue 3 Composables (useTheme/useToast)
├── components.html           ✅ 交互式组件预览 (浏览器直接打开)
├── motion.css                ✅ 独立动效模块 (12KB)
├── nuero-ui.css              ✅ 完整 CSS 框架 (24KB)
├── nuero-ui-dark.css         ✅ 精简暗色版
├── SPEC.md                   ✅ 设计规范文档
├── platforms/adaptation-guide.md  ✅ 全平台适配指南
├── CHANGELOG.md
└── README.md
```

---

## 快速开始

### Web (CSS)

```html
<link rel="stylesheet" href="nuero-ui.min.css">
<!-- 或使用 CDN -->
```

### React

```tsx
import { Button, Input, Card, Badge, Modal } from './nuero-ui-react'
;<Button variant="primary" size="md">开始使用</Button>
```

### Vue 3

```vue
<script setup>
import { NUIButton } from './components/NueroUI'
</script>
<template>
  <NUIButton variant="primary">开始使用</NUIButton>
</template>
```

### Flutter

```dart
import 'package:nuero_ui/tokens.dart';
ElevatedButton(
  style: ElevatedButton.styleFrom(
    backgroundColor: NueroColors.accentPrimary,
    foregroundColor: NueroColors.textInverse,
  ),
  child: Text('开始使用'),
)
```

---

## 设计令牌

| 类别 | 数量 | 示例 |
|------|------|------|
| 颜色 | 30+ | `var(--nui-color-accent-primary)` → `#00D4FF` |
| 字体 | 3 | display / body / mono |
| 间距 | 22 | `var(--nui-space-4)` → `1rem` |
| 圆角 | 7 | sm(4px) / md(8px) / lg(16px) / xl(24px) |
| 阴影 | 7 | glow / sm / md / lg / xl |
| 动效 | 6 | fast(80ms) / normal(150ms) / slow(250ms) |

---

## 组件清单

| 组件 | 状态 | 说明 |
|------|------|------|
| Button | ✅ | 5变体 × 6尺寸 × 加载/图标/禁用态 |
| Input | ✅ | 3尺寸 / 标签 / 错误态 / 聚焦动效 |
| Badge | ✅ | 7变体色 / dot模式 |
| Card | ✅ | elevated / hoverable 悬停态 |
| Checkbox | ✅ | 弹性动画勾选 |
| Radio | ✅ | 圆点动画选中 |
| Switch | ✅ | 发光动效 |
| Spinner | ✅ | 光晕旋转 |
| Progress | ✅ | 流光进度条 |
| Tabs | ✅ | 下划线滑动 |
| Modal | ✅ | 缩放+模糊遮罩 |
| Toast | ✅ | 右滑入通知 |
| Skeleton | ✅ | shimmer占位 |
| Avatar | ✅ | 渐变头像 |
| Navbar | ✅ | 科技风导航 |
| Sidebar | ✅ | 侧边栏 |
| Tooltip | ✅ | CSS实现 |
| Dropdown | ✅ | 下拉菜单 |
| Pagination | ✅ | 分页器 |

---

## 图标 (120个)

基于 Heroicons/Lucide 风格，24×24 viewBox，stroke-width 2，stroke-linecap/linejoin round。

**分类**: Basic / Device / Communication / Status

```bash
# 使用示例
<img src="icons/home.svg" width="20" height="20" alt="home">
```

---

## 许可证

MIT License © 2026 NueroUI Team
