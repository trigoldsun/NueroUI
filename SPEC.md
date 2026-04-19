# NueroUI 设计系统规范
# 版本: 1.0.0
# 日期: 2026-04-19
# 输出者: Hermes01

---

## 一、设计理念与愿景

**稳重·数字时代**

NueroUI 是一套面向全硬件平台的设计语言体系。视觉以深邃蓝黑为主基调，传达沉稳可靠的专业气质；以科技青 `#00D4FF` 贯穿细节，注入数字时代的精密感与未来感。

> "静水深流，机锋内敛 — 稳重而不沉闷，数字感而不冰冷。"

**设计关键词**：深海蓝黑 · 科技青光 · 几何精准 · 朱墨点睛 · 中国韵

---

## 二、色彩系统

### 主色板（深海蓝黑 — 稳重基底）

| Token | HEX | RGB | HSL | 用途 |
|-------|-----|-----|-----|------|
| `--color-bg-primary` | `#0B0E17` | `11,14,23` | `227°,33%,7%` | 主背景 |
| `--color-bg-secondary` | `#131829` | `19,24,41` | `226°,37%,12%` | 卡片/面板背景 |
| `--color-bg-elevated` | `#1A2035` | `26,32,53` | `226°,34%,15%` | 悬浮层/弹出层 |
| `--color-bg-overlay` | `#212A45` | `33,42,69` | `226°,35%,20%` | 模态遮罩/浮层 |
| `--color-bg-input` | `#0F121E` | `15,18,30` | `227°,33%,9%` | 输入框背景 |

### 强调色板（数字时代感）

| Token | HEX | RGB | HSL | 用途 |
|-------|-----|-----|-----|------|
| `--color-accent-primary` | `#00D4FF` | `0,212,255` | `189°,100%,50%` | 主强调·科技青 |
| `--color-accent-secondary` | `#7B61FF` | `123,97,255` | `249°,100%,69%` | 次强调·能量紫 |
| `--color-accent-tertiary` | `#FF6B35` | `255,107,53` | `17°,100%,60%` | 第三强调·警示橙 |

### 功能色板

| Token | HEX | RGB | HSL | 用途 |
|-------|-----|-----|-----|------|
| `--color-success` | `#00E676` | `0,230,118` | `145°,100%,45%` | 成功 |
| `--color-warning` | `#FFB300` | `255,179,0` | `45°,100%,50%` | 警告 |
| `--color-danger` | `#FF3D71` | `255,61,113` | `344°,100%,62%` | 危险/错误 |
| `--color-info` | `#00D4FF` | `0,212,255` | `189°,100%,50%` | 信息（同主强调） |

### 点缀色板（中国传统色）

| Token | HEX | RGB | HSL | 用途 |
|-------|-----|-----|-----|------|
| `--color-vermilion` | `#E8344A` | `232,52,74` | `353°,79%,56%` | 朱红·喜庆/重点 |
| `--color-ink` | `#1A1A2E` | `26,26,46` | `240°,28%,14%` | 墨黑·文字/标题 |
| `--color-gold` | `#C9A84C` | `201,168,76` | `44°,54%,54%` | 墨金·装饰/高光 |
| `--color-jade` | `#00C48C` | `0,196,140` | `164°,100%,38%` | 翠玉·成功/清新 |

### 文字色

| Token | HEX | 用途 |
|-------|-----|------|
| `--color-text-primary` | `#F0F4FF` | 主文字（白底低眩光） |
| `--color-text-secondary` | `#8892B0` | 次级文字 |
| `--color-text-tertiary` | `#4A5578` | 占位符/禁用文字 |
| `--color-text-inverse` | `#0B0E17` | 深色背景上的浅色文字 |
| `--color-text-link` | `#00D4FF` | 链接 |

### 边框与分隔

| Token | HEX | 用途 |
|-------|-----|------|
| `--color-border` | `rgba(255,255,255,0.08)` | 默认边框 |
| `--color-border-hover` | `rgba(0,212,255,0.35)` | 悬浮边框（青光） |
| `--color-border-focus` | `#00D4FF` | 聚焦边框 |
| `--color-border-active` | `rgba(123,97,255,0.5)` | 激活边框（紫） |

### 光效（发光与投影）

| Token | 值 | 用途 |
|-------|---|------|
| `--glow-primary` | `0 0 20px rgba(0,212,255,0.35)` | 科技青光晕 |
| `--glow-secondary` | `0 0 20px rgba(123,97,255,0.35)` | 能量紫光晕 |
| `--glow-danger` | `0 0 12px rgba(255,61,113,0.5)` | 危险红光晕 |
| `--shadow-subtle` | `0 1px 4px rgba(0,0,0,0.5)` | 微阴影 |
| `--shadow-elevation` | `0 4px 16px rgba(0,0,0,0.6)` | 卡片阴影 |
| `--shadow-float` | `0 8px 32px rgba(0,0,0,0.8)` | 浮层阴影 |

---

## 三、字体系统

### 字体栈

```css
/* 显示/标题字体 */
--font-display: 'Outfit', 'Noto Sans SC', system-ui, sans-serif;

/* 正文字体 */
--font-body: 'Inter', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif;

/* 等宽字体 */
--font-mono: 'JetBrains Mono', 'Fira Code', 'Source Code Pro', monospace;
```

### 字阶（基于 16px 基准）

| Token | rem | px | 用途 |
|-------|-----|----|------|
| `--text-2xs` | 0.625rem | 10px | 极小标签 |
| `--text-xs` | 0.75rem | 12px | 标签/注释 |
| `--text-sm` | 0.875rem | 14px | 次级正文 |
| `--text-base` | 1rem | 16px | 正文（基准） |
| `--text-lg` | 1.125rem | 18px | 大正文 |
| `--text-xl` | 1.25rem | 20px | 小标题 |
| `--text-2xl` | 1.5rem | 24px | 区块标题 |
| `--text-3xl` | 2rem | 32px | 页面标题 |
| `--text-4xl` | 2.5rem | 40px | 大标题 |
| `--text-5xl` | 3rem | 48px | 英雄标题 |

### 字重

| Token | 值 | 用途 |
|-------|---|------|
| `--font-light` | 300 | 辅助说明 |
| `--font-normal` | 400 | 正文 |
| `--font-medium` | 500 | 强调正文 |
| `--font-semibold` | 600 | 标题 |
| `--font-bold` | 700 | 重要标题 |

---

## 四、间距系统

基于 **4px 基准网格**：

| Token | rem | px | 用途 |
|-------|-----|----|------|
| `--space-0` | 0 | 0 | 无间距 |
| `--space-px` | 0.0625rem | 1px | 极细线 |
| `--space-0.5` | 0.125rem | 2px | 极小间距 |
| `--space-1` | 0.25rem | 4px | 基础单元 |
| `--space-2` | 0.5rem | 8px | 紧凑间距 |
| `--space-3` | 0.75rem | 12px | 小间距 |
| `--space-4` | 1rem | 16px | 标准间距 |
| `--space-5` | 1.25rem | 20px | 中间距 |
| `--space-6` | 1.5rem | 24px | 宽松间距 |
| `--space-8` | 2rem | 32px | 大间距 |
| `--space-10` | 2.5rem | 40px | 区块间距 |
| `--space-12` | 3rem | 48px | 大区块 |
| `--space-16` | 4rem | 64px | 页面间距 |
| `--space-20` | 5rem | 80px | 超大间距 |
| `--space-24` | 6rem | 96px | 极间距 |

---

## 五、圆角系统

| Token | 值 | 用途 |
|-------|-----|------|
| `--radius-none` | 0 | 无圆角（几何感） |
| `--radius-sm` | 4px | 标签/小按钮 |
| `--radius-md` | 8px | 默认组件 |
| `--radius-lg` | 16px | 卡片/面板 |
| `--radius-xl` | 24px | 大卡片/模态 |
| `--radius-2xl` | 32px | 超大容器 |
| `--radius-full` | 9999px | 药丸/圆形 |

---

## 六、阴影系统

| Token | 值 | 用途 |
|-------|-----|------|
| `--shadow-xs` | `0 1px 2px rgba(0,0,0,0.4)` | 最低阴影 |
| `--shadow-sm` | `0 1px 4px rgba(0,0,0,0.5)` | 卡片默认 |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.55)` | 悬浮阴影 |
| `--shadow-lg` | `0 8px 24px rgba(0,0,0,0.65)` | 弹出层 |
| `--shadow-xl` | `0 16px 48px rgba(0,0,0,0.75)` | 模态框 |
| `--shadow-glow` | `0 0 24px rgba(0,212,255,0.25)` | 光效阴影 |

---

## 七、动效规范

### 时长

| Token | 值 | 用途 |
|-------|-----|------|
| `--duration-instant` | 0ms | 无过渡 |
| `--duration-fast` | 80ms | 微交互反馈 |
| `--duration-normal` | 150ms | 常规过渡 |
| `--duration-slow` | 250ms | 展开/收起 |
| `--duration-slower` | 400ms | 页面进入 |
| `--duration-slowest` | 600ms | 复杂动画 |

### 缓动曲线

| Token | 值 | 用途 |
|-------|-----|------|
| `--ease-default` | `cubic-bezier(0.4, 0, 0.2, 1)` | 默认 |
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | 进入 |
| `--ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | 退出 |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | 匀速 |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | 弹性 |
| `--ease-bounce` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | 弹跳 |

### 动效场景

| 场景 | 动画 |
|------|------|
| 按钮点击 | scale(0.97) → scale(1)，80ms |
| 卡片悬浮 | translateY(-2px) + shadow-md，200ms |
| 模态打开 | opacity 0→1 + scale(0.95→1)，250ms |
| Toast 进入 | translateX(110%)→translateX(0)，300ms spring |
| 骨架屏 | shimmer gradient 动画，1.5s 循环 |
| 加载旋转 | rotate(0→360)，1s linear 循环 |
| 页面切换 | opacity + translateY(8px→0)，400ms |

---

## 八、图标系统

### 规格

- **viewBox**: `0 0 24 24`（统一）
- **笔画宽度**: `2px`（常规）、`1.5px`（细小图标）
- **风格**: 线性（outline），`stroke-linecap: round`，`stroke-linejoin: round`
- **填充**: 无填充，使用 `currentColor`
- **尺寸**: 16 / 20 / 24 / 32 / 48 px（5档）

### 图标列表（48个核心）

**基础操作**: home, search, user, settings, bell, menu, close, check, chevron-down, chevron-right, chevron-left, plus, minus, refresh, download, upload, eye, eye-off, lock, unlock, copy, trash, edit, info, help-circle

**设备/系统**: monitor, smartphone, tablet, cpu, wifi, bluetooth, battery, camera, mic, speaker, server, hard-drive

**通讯**: send, message, mail, phone, bookmark, share, link, flag, heart, star

**状态/反馈**: alert-circle, check-circle, x-circle, alert-triangle, loader, zap, activity, trending-up, trending-down, filter, sort, grid, list

---

## 九、组件清单

### 基础组件（14个）

| 组件 | 状态 |
|------|------|
| Button | default / hover / active / focus / disabled / loading |
| Input | default / focus / error / disabled / readonly / password |
| Select/Dropdown | default / open / disabled |
| Checkbox | unchecked / checked / indeterminate / disabled |
| Radio | unselected / selected / disabled |
| Switch/Toggle | off / on / disabled |
| Badge/Tag | default / primary / success / warning / danger / dot |
| Tooltip | hidden / visible（4个方向） |
| Progress Bar | determinate / indeterminate |
| Skeleton | shimmer 动画状态 |
| Avatar | image / initials / placeholder |
| Divider | horizontal / vertical |
| Spinner | 4种尺寸 |
| Toast | success / error / warning / info |

### 复合组件（10个）

| 组件 | 说明 |
|------|------|
| Card | 悬浮态带光效 |
| Modal/Dialog | 居中 + 遮罩 |
| Drawer | 左/右滑出 |
| Table | 排序/分页 |
| Tabs | 下划线/胶囊式 |
| Sidebar | 可折叠 |
| TopNav | Logo + 搜索 + 用户 |
| BottomNav | 移动端 4-5 项 |
| Breadcrumb | 路径导航 |
| Pagination | 分页控件 |

---

## 十、跨平台适配策略

### 断点

| 名称 | 宽度 | 设备 |
|------|------|------|
| xs | < 640px | 手机 |
| sm | 640px - 767px | 大手机 |
| md | 768px - 1023px | 平板 |
| lg | 1024px - 1439px | 桌面 |
| xl | ≥ 1440px | 大屏 |

### 平台变体

#### 深色主题（默认）
- `--color-bg-primary: #0B0E17`
- `--color-text-primary: #F0F4FF`

#### 浅色主题
- `--color-bg-primary: #F0F4FF`
- `--color-bg-secondary: #E4E8F0`
- `--color-bg-elevated: #FFFFFF`
- `--color-text-primary: #0B0E17`
- `--color-text-secondary: #4A5578`

#### 高对比度模式（无障碍）
- 边框宽度 +1px
- 文字对比度 ≥ 7:1
- 禁用所有透明色

#### 低功耗模式
- 禁用 `box-shadow`
- 禁用 `glow` 效果
- 禁用渐变动画
- 简化背景动效

#### 户外强光模式
- `--color-bg-primary: #E8ECEF`
- 加粗边框（2px）
- 增加文字粗细

#### 车载/HUD 模式
- 最小字体 18px
- 最小点击区域 48×48px
- 增大按钮和控件尺寸
- 简化动效，延长过渡时间

#### 折叠屏/双屏适配
- 断点 320px / 640px / 768px / 1024px / 1440px
- 内容流自动重排
- 屏幕接缝处理（gap ≥ 8px）

---

## 十一、版本历史

| 版本 | 日期 | 说明 |
|------|------|------|
| 1.0.0 | 2026-04-19 | 初始版本 |
