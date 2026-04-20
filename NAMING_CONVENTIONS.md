# 命名规范 — Naming Conventions

> **版本**: v1.0.0  
> **日期**: 2026-04-20  
> **Output**: Hermes01

本文档定义了 NueroUI 和 BreezeUI 设计系统的统一命名规范，确保跨平台、跨组件的一致性。

---

## 1. CSS 变量命名

### 1.1 统一前缀策略

| 设计系统 | CSS 类前缀 | CSS 变量前缀 | 说明 |
|----------|-----------|-------------|------|
| NueroUI | `.nui-` | `--nuero-*` | 稳重科技风格 |
| BreezeUI | `.bz-` | `--breeze-*` | 明亮清新风格 |

**命名格式**: `{prefix}-{category}-{property}-{variant}`

```css
/* NueroUI 示例 */
--nuero-color-bg-primary      /* 背景-主 */
--nuero-color-text-secondary  /* 文字-次 */
--nuero-shadow-md             /* 阴影-中 */
--nuero-space-4               /* 间距-4 */
--nuero-radius-lg             /* 圆角-大 */

/* BreezeUI 示例 */
--breeze-color-bg-primary
--breeze-color-text-secondary
--breeze-shadow-md
--breeze-space-4
--breeze-radius-lg
```

### 1.2 变量命名规则

| 类别 | 规则 | 示例 |
|------|------|------|
| 颜色 | `{prefix}-color-{surface}-{state}` | `--nuero-color-bg-primary` |
| 阴影 | `{prefix}-shadow-{size}` | `--nuero-shadow-md` |
| 间距 | `{prefix}-space-{n}` | `--nuero-space-4` |
| 圆角 | `{prefix}-radius-{size}` | `--nuero-radius-lg` |
| 字体 | `{prefix}-font-{role}` | `--nuero-font-body` |
| 动效 | `{prefix}-duration-{speed}` | `--nuero-duration-normal` |

---

## 2. 组件类命名 (BEM)

### 2.1 命名格式

```
{prefix}-{block}
{prefix}-{block}__{element}
{prefix}-{block}--{modifier}
{prefix}-{block}__{element}--{modifier}
```

### 2.2 示例

```css
/* Block */
.nui-btn { }

/* Element */
.nui-btn__icon { }
.nui-btn__text { }
.nui-card__header { }
.nui-card__body { }
.nui-card__footer { }

/* Modifier */
.nui-btn--primary { }
.nui-btn--secondary { }
.nui-btn--ghost { }
.nui-btn--disabled { }
.nui-btn--loading { }

/* Element + Modifier */
.nui-btn__icon--left { }
.nui-btn__icon--right { }
```

### 2.3 状态类名

| 状态 | 命名 | 说明 |
|------|------|------|
| 悬停 | `{prefix}-btn:hover` | 鼠标悬停 |
| 聚焦 | `{prefix}-btn:focus` | 键盘聚焦 |
| 激活 | `{prefix}-btn:active` | 点击激活 |
| 禁用 | `{prefix}-btn--disabled` | 禁用状态 |
| 加载 | `{prefix}-btn--loading` | 加载状态 |
| 错误 | `{prefix}-input--error` | 错误状态 |
| 成功 | `{prefix}-input--success` | 成功状态 |

---

## 3. 组件命名对照表

### 3.1 基础组件

| 组件名 | NueroUI | BreezeUI | 说明 |
|--------|---------|----------|------|
| 按钮 | `.nui-btn` | `.bz-btn` | 交互触发 |
| 输入框 | `.nui-input` | `.bz-input` | 文本输入 |
| 选择器 | `.nui-select` | `.bz-select` | 下拉选择 |
| 复选框 | `.nui-checkbox` | `.bz-checkbox` | 多选 |
| 单选框 | `.nui-radio` | `.bz-radio` | 单选 |
| 开关 | `.nui-switch` | `.bz-switch` | 开关切换 |
| 滑块 | `.nui-slider` | `.bz-slider` | 范围选择 |
| 文本域 | `.nui-textarea` | `.bz-textarea` | 多行文本 |
| 标签 | `.nui-tag` | `.bz-tag` | 小标签 |
| 徽章 | `.nui-badge` | `.bz-badge` | 数字徽章 |
| 卡片 | `.nui-card` | `.bz-card` | 容器卡片 |
| 模态框 | `.nui-modal` | `.bz-modal` | 弹窗 |
| 提示 | `.nui-tooltip` | `.bz-tooltip` | 悬浮提示 |
| 折叠面板 | `.nui-collapse` | `.bz-collapse` | 折叠展开 |
| 手风琴 | `.nui-accordion` | `.bz-accordion` | 互斥折叠 |
| 表格 | `.nui-table` | `.bz-table` | 数据表格 |
| 分页 | `.nui-pagination` | `.bz-pagination` | 分页导航 |
| 进度条 | `.nui-progress` | `.bz-progress` | 进度展示 |
| 骨架屏 | `.nui-skeleton` | `.bz-skeleton` | 加载占位 |
| 头像 | `.nui-avatar` | `.bz-avatar` | 用户头像 |
| 评论 | `.nui-comment` | `.bz-comment` | 评论组件 |
| 空状态 | `.nui-empty` | `.bz-empty` | 空数据 |
| 结果页 | `.nui-result` | `.bz-result` | 操作结果 |

### 3.2 复合组件

| 组件名 | NueroUI | BreezeUI |
|--------|---------|----------|
| 表单 | `.nui-form` | `.bz-form` |
| 表单项 | `.nui-form-item` | `.bz-form-item` |
| 导航菜单 | `.nui-menu` | `.bz-menu` |
| 导航项 | `.nui-menu-item` | `.bz-menu-item` |
| 侧边栏 | `.nui-sidebar` | `.bz-sidebar` |
| 面包屑 | `.nui-breadcrumb` | `.bz-breadcrumb` |
| 标签页 | `.nui-tabs` | `.bz-tabs` |
| 标签页面板 | `.nui-tab-panel` | `.bz-tab-panel` |
| 列表 | `.nui-list` | `.bz-list` |
| 列表项 | `.nui-list-item` | `.bz-list-item` |
| 步骤条 | `.nui-steps` | `.bz-steps` |
| 步骤项 | `.nui-step` | `.bz-step` |

---

## 4. 图标命名

### 4.1 文件命名

```
{icon-name}-filled.svg    /* 实心/填充变体 */
{icon-name}-outline.svg   /* 描边变体 */
```

### 4.2 使用示例

```html
<!-- NueroUI 图标使用 -->
<img src="/icons/bar-chart-filled.svg" class="nui-icon" alt="柱状图">
<img src="/icons/bar-chart-outline.svg" class="nui-icon" alt="柱状图">

<!-- Vue 组件 -->
<NuerIcon name="bar-chart" variant="filled" />
<NuerIcon name="bar-chart" variant="outline" />
```

### 4.3 图标尺寸

| 尺寸名 | 大小 | 用途 |
|--------|------|------|
| `icon-xs` | 12px | 紧凑文字旁 |
| `icon-sm` | 16px | 默认内联 |
| `icon-md` | 20px | 按钮内 |
| `icon-lg` | 24px | 导航/标题 |
| `icon-xl` | 32px | 大图标展示 |

---

## 5. Token 命名

### 5.1 Token 类型

| 类型 | 命名规则 | 示例 |
|------|----------|------|
| 基础 Token | `{category}.{property}.{value}` | `colors.accent.primary` |
| 别名 Token | `{category}.{component}.{state}` | `button.primary.background` |
| 模式 Token | `{category}.{property}.{theme}` | `colors.bg.primary.light` |

### 5.2 JSON 结构键命名

```json
{
  "colors": {
    "background": {
      "primary": { "default": "#0B0E17", "light": "#F0F4FF" }
    },
    "accent": {
      "primary": { "default": "#00D4FF" }
    }
  },
  "aliases": {
    "button": {
      "primary": {
        "background": "{colors.accent.primary}"
      }
    }
  }
}
```

---

## 6. 颜色语义命名

| 语义 | NueroUI | BreezeUI | 用途 |
|------|---------|----------|------|
| 主色 | `#00D4FF` | `#4A9FFF` | 主要交互 |
| 次色 | `#7B61FF` | `#36D399` | 次要强调 |
| 成功 | `#00E676` | `#22C55E` | 成功状态 |
| 警告 | `#FFB300` | `#F59E0B` | 警告状态 |
| 危险 | `#FF3D71` | `#EF4444` | 错误/危险 |
| 信息 | `#00D4FF` | `#4A9FFF` | 信息提示 |

---

## 7. 文件与目录命名

| 类型 | 命名规则 | 示例 |
|------|----------|------|
| 组件目录 | kebab-case | `button-group/` |
| 组件文件 | kebab-case | `button-group.vue` |
| 样式文件 | kebab-case | `button-group.css` |
| 测试文件 | `{name}.test.ts` | `button.test.ts` |
| 类型定义 | `{name}.types.ts` | `button.types.ts` |
| 平台适配 | platform-name | `flutter/` `swiftui/` |
| 图标目录 | kebab-case | `icons/outline/` |

### 目录结构示例

```
NueroUI/
├── components/
│   ├── button/
│   │   ├── button.vue
│   │   ├── button.css
│   │   ├── button.test.ts
│   │   └── button.types.ts
│   └── input/
│       └── ...
├── icons/
│   ├── outline/
│   └── filled/
├── tokens/
│   └── tokens.json
└── platforms/
    ├── flutter/
    ├── swiftui/
    └── compose/
```

---

## 8. 命名一致性检查

### 8.1 ESLint 规则

```json
{
  "rules": {
    "design-system/naming-convention": [
      "error",
      {
        "prefixes": ["nui-", "bz-"],
        "casing": "kebab-case"
      }
    ]
  }
}
```

### 8.2 StyleLint 规则

```json
{
  "rules": {
    "custom-property-pattern": "^([a-z][a-z0-9]*)(-[a-z][a-z0-9]*)*$",
    "selector-class-pattern": "^(nui|bz)-[a-z][a-z0-9]*(-[a-z][a-z0-9]*)*$"
  }
}
```

---

*本文档遵循 W3C Design Token Community Group 规范*
