# NueroUI 跨平台适配方案
# Date: 2026-04-19 | Output: Hermes01

---

## 1. 平台变体总览

| 平台 | 属性值 | 说明 |
|------|--------|------|
| 深色主题（默认） | `data-theme="dark"` | 深海蓝黑基调 |
| 浅色主题 | `data-theme="light"` | 明亮背景 |
| 高对比度 | `data-theme="high-contrast"` | 无障碍增强 |
| 低功耗模式 | `data-theme="low-power"` | 节能 |
| 户外强光 | `data-theme="outdoor"` | 高亮背景 |
| 车载 HUD | `data-theme="car-hud"` | 驾驶环境 |

---

## 2. 深色主题（默认）

```css
[data-theme="dark"] {
  --color-bg-primary:    #0B0E17;
  --color-bg-secondary:  #131829;
  --color-bg-elevated:   #1A2035;
  --color-bg-overlay:    #212A45;
  --color-text-primary:  #F0F4FF;
  --glow-primary:        0 0 20px rgba(0,212,255,0.35);
}
```

---

## 3. 浅色主题

```css
[data-theme="light"] {
  --color-bg-primary:    #F0F4FF;
  --color-bg-secondary:  #E4E8F0;
  --color-bg-elevated:   #FFFFFF;
  --color-text-primary:  #0B0E17;
  --color-text-secondary:#4A5578;
  --shadow-sm:           0 1px 4px rgba(0,0,0,0.1);
  --glow-primary:        0 0 16px rgba(0,180,220,0.25);
}
```

**切换方式**：在任何 HTML 元素上设置 `data-theme="light"`

---

## 4. 高对比度模式（无障碍 WCAG AAA）

```css
[data-theme="high-contrast"] {
  --color-bg-primary:    #000000;
  --color-bg-secondary:  #111111;
  --color-text-primary:  #FFFFFF;
  --color-text-secondary:#EEEEEE;
  --color-accent-primary:#00FFFF;
  --color-border:       rgba(255,255,255,0.35);
  --color-border-focus:   #00FFFF;
  --radius-sm:  2px;
  --radius-md:  4px;
}
```

**特点**：
- 所有文字对比度 ≥ 7:1
- 无透明边框
- 更粗的边框（+1px）
- 无圆角（保持锐利几何感）

---

## 5. 低功耗模式

```css
[data-theme="low-power"] {
  /* 禁用所有阴影 */
  --shadow-xs: none;
  --shadow-sm: none;
  --shadow-md: none;
  --shadow-lg: none;
  --shadow-xl: none;
  --shadow-inner: none;

  /* 禁用光效 */
  --glow-primary:   none;
  --glow-secondary: none;
  --glow-danger:    none;
  --glow-success:   none;

  /* 禁用渐变动画 */
  --gradient-shimmer: none;
}
```

**触发方式**：
```javascript
// 自动检测（浏览器）
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.setAttribute('data-theme', 'low-power');
}
```

---

## 6. 户外强光模式

```css
[data-theme="outdoor"] {
  --color-bg-primary:    #E8ECEF;
  --color-bg-secondary:  #DDE1E8;
  --color-bg-elevated:   #F0F4FF;
  --color-text-primary:  #0A0D15;
  --color-text-secondary:#3A4055;
  --color-border:       rgba(10,13,21,0.2);
  --color-border-hover:  rgba(0,140,180,0.6);
  --radius-sm: 2px;
  --radius-md: 4px;
}
```

**特点**：
- 亮色背景提高户外可读性
- 更粗的边框（2px）
- 减少圆角（避免在高光下显得模糊）
- 警告/危险色彩加粗

---

## 7. 车载 HUD 模式

```css
[data-theme="car-hud"] {
  /* 字体放大 */
  --text-base: 1.125rem;   /* 18px */
  --text-lg:   1.375rem;    /* 22px */
  --text-xl:   1.625rem;    /* 26px */
  --text-2xl:  2rem;        /* 32px */
  --text-3xl:  2.5rem;      /* 40px */

  /* 触控区域加大 */
  --height-md: 48px;
  --height-lg: 56px;
  --height-xl: 64px;

  /* 圆角收窄 */
  --radius-md: 8px;
  --radius-lg: 12px;

  /* 过渡变慢（减少驾驶分心） */
  --duration-slow:   400ms;
  --duration-slower:  600ms;
}
```

**交互原则**：
- 最小点击区域 48×48px
- 动效简化，避免过度动画
- 关键操作放在屏幕下半部分（驾驶员视角）
- 使用高对比色确保仪表盘可读性

---

## 8. 折叠屏 / 双屏适配

### 断点系统

| 断点 | 宽度 | 设备 |
|------|------|------|
| xs | `< 320px` | 小手机 |
| sm | `320px - 639px` | 手机 |
| md | `640px - 767px` | 大手机/小平板 |
| lg | `768px - 1023px` | 平板 |
| xl | `1024px - 1439px` | 桌面 |
| 2xl | `≥ 1440px` | 大屏 |

### 折叠屏接缝处理

```css
/* 检测折叠屏并处理接缝区域 */
@media (screen and (min-width: 728px)) and (max-width: 1024px) {
  /* 双屏模式下，接缝区域留出 gap */
  .nui-card,
  .nui-modal,
  .nui-sidebar {
    margin: calc(var(--space-4) + env(fold-height, 0px)) auto;
  }
}

/* 铰链区域保护带 */
.nui-fold-safe-zone {
  padding: env(fold-top, 0px) env(fold-right, 0px)
           env(fold-bottom, 0px) env(fold-left, 0px);
}
```

### 布局策略

```css
/* 默认：单列 */
.layout { display: flex; flex-direction: column; gap: var(--space-4); }

/* 大屏：网格 */
@media (min-width: 768px) {
  .layout { display: grid; grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .layout { grid-template-columns: repeat(3, 1fr); }
}
@media (min-width: 1440px) {
  .layout { grid-template-columns: repeat(4, 1fr); }
}

/* 双屏展开：内容流自动适应 */
@media (screen and (min-resolution: 2dppx)) and (orientation: landscape) {
  .layout { flex-direction: row; }
}
```

---

## 9. React / Vue 集成示例

```tsx
// React
import './tokens.css';

// 主题切换 Hook
function useTheme(theme: string) {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
}

// 使用
<Html htmlAttributes={{ 'data-theme': 'dark' }}>
  <App />
</Html>

// Vue 3
// main.ts
import './tokens.css'

// 主题切换
const setTheme = (theme: string) => {
  document.documentElement.setAttribute('data-theme', theme)
}
```

---

## 10. 字体回退策略

```css
/* 中文优先 */
--font-body: 'Source Sans 3', 'PingFang SC', 'Microsoft YaHei',
             'Hiragino Sans GB', system-ui, sans-serif;

/* 日文 */
--font-body-ja: 'Source Sans 3', 'Hiragino Kaku Gothic ProN',
                'Yu Gothic', system-ui, sans-serif;

/* 韩文 */
--font-body-ko: 'Source Sans 3', 'Malgun Gothic', system-ui, sans-serif;

/* 西里尔文 */
--font-body-cyrillic: 'Source Sans 3', 'Roboto', system-ui, sans-serif;
```

---

## 11. 无障碍检查清单

- [ ] 所有文字对比度 ≥ 4.5:1（普通文字）或 7:1（大字）
- [ ] 所有交互元素可通过键盘访问（Tab / Enter / Escape）
- [ ] 所有图标有 `aria-label` 或配套文字标签
- [ ] 所有表单元素有 `<label>` 关联
- [ ] 使用 `prefers-reduced-motion` 检测并禁用动效
- [ ] 使用 `prefers-color-scheme` 自动检测深色/浅色偏好
- [ ] 使用 `prefers-contrast` 检测高对比度模式
- [ ] 焦点状态有明确的视觉指示（`:focus-visible`）
- [ ] 所有非纯装饰性 SVG 有 `role="img"` 和 `aria-label`
