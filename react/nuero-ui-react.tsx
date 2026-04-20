/**
 * NueroUI React Components v1.0.0
 * Date: 2026-04-19 | Output: Hermes01
 * Based on NueroUI Design System — 稳重·数字时代
 */

import React, { useState, useEffect, useRef, useCallback, CSSProperties } from 'react';

// ─────────────────────────────────────────────
// DESIGN TOKENS (mirrors tokens.css)
// ─────────────────────────────────────────────

export const tokens = {
  colors: {
    bgPrimary:    '#0B0E17',
    bgSecondary:  '#131829',
    bgElevated:   '#1A2035',
    bgOverlay:    '#212A45',
    bgInput:      '#0F121E',
    accentPrimary:   '#00D4FF',
    accentSecondary:  '#7B61FF',
    accentTertiary:   '#FF6B35',
    success: '#00E676',
    warning: '#FFB300',
    danger:  '#FF3D71',
    info:    '#00D4FF',
    vermilion: '#E8344A',
    gold:    '#C9A84C',
    jade:    '#00C48C',
    textPrimary:   '#F0F4FF',
    textSecondary: '#8892B0',
    textTertiary:  '#4A5578',
    border:        'rgba(255,255,255,0.08)',
    borderHover:   'rgba(0,212,255,0.35)',
    borderFocus:   '#00D4FF',
  },
  fonts: {
    display: "'Outfit', 'Noto Sans SC', system-ui, sans-serif",
    body:    "'Source Sans 3', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif",
    mono:    "'JetBrains Mono', 'Fira Code', monospace",
  },
  radii: {
    sm: '4px', md: '8px', lg: '16px', xl: '24px', full: '9999px',
  },
  durations: {
    fast: '80ms', normal: '150ms', slow: '250ms', slower: '400ms',
  },
  easings: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring:  'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
} as const;

type AccentVariant = 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'gold' | 'default';
type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// ─────────────────────────────────────────────
// UTILITY HOOKS
// ─────────────────────────────────────────────

export function useTheme(theme: string) {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    return () => document.documentElement.removeAttribute('data-theme');
  }, [theme]);
}

export function useToast() {
  const [toasts, setToasts] = useState<Array<{ id: number; type: string; title: string; msg: string }>>([]);
  const counter = useRef(0);

  const addToast = useCallback((type: string, title: string, msg: string, duration = 4000) => {
    const id = ++counter.current;
    setToasts(prev => [...prev, { id, type, title, msg }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), duration);
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return { toasts, addToast, removeToast };
}

// ─────────────────────────────────────────────
// BUTTON
// ─────────────────────────────────────────────

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline';
  size?: SizeVariant;
  loading?: boolean;
  iconOnly?: boolean;
  as?: 'button' | 'a';
  href?: string;
}

export const Button = React.forwardRef<HTMLElement, ButtonProps>(({
  variant = 'primary', size = 'md', loading = false, iconOnly = false,
  as: Tag = 'button', href, children, className = '', style, disabled, ...rest
}, ref) => {
  const heights: Record<SizeVariant, string> = { xs: '24px', sm: '32px', md: '40px', lg: '48px', xl: '56px', '2xl': '64px' };
  const paddings: Record<SizeVariant, string> = { xs: '0 8px', sm: '0 12px', md: '0 20px', lg: '0 24px', xl: '0 32px', '2xl': '0 40px' };
  const fontSizes: Record<SizeVariant, string> = { xs: '11px', sm: '12px', md: '14px', lg: '16px', xl: '18px', '2xl': '20px' };

  const variantStyles: Record<string, CSSProperties> = {
    primary:   { background: '#00D4FF', color: '#0B0E17', border: '1px solid #00D4FF', boxShadow: '0 0 20px rgba(0,212,255,0.35)' },
    secondary: { background: '#1A2035', color: '#F0F4FF', border: '1px solid rgba(255,255,255,0.08)' },
    ghost:     { background: 'transparent', color: '#8892B0', border: '1px solid transparent' },
    danger:    { background: '#FF3D71', color: '#fff', border: '1px solid #FF3D71', boxShadow: '0 0 16px rgba(255,61,113,0.5)' },
    outline:   { background: 'transparent', color: '#00D4FF', border: '1px solid #00D4FF' },
  };

  const baseStyle: CSSProperties = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
    height: heights[size], padding: iconOnly ? '0' : paddings[size],
    fontFamily: tokens.fonts.body, fontSize: fontSizes[size], fontWeight: '500',
    borderRadius: '8px', cursor: disabled || loading ? 'not-allowed' : 'pointer',
    transition: `all 150ms ${tokens.easings.default}`,
    opacity: disabled ? 0.4 : 1, width: iconOnly ? heights[size] : 'auto',
    whiteSpace: 'nowrap', userSelect: 'none', textDecoration: 'none',
    ...variantStyles[variant],
    ...(iconOnly ? { padding: '0' } : {}),
  };

  const content = loading ? (
    <span style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span style={{
        width: '14px', height: '14px', borderRadius: '50%',
        border: '2px solid currentColor', borderTopColor: 'transparent',
        animation: 'nui-spin-anim 0.8s linear infinite',
      }} />
      {children}
    </span>
  ) : children;

  if (Tag === 'a') {
    return <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} style={baseStyle} {...rest as React.AnchorHTMLAttributes<HTMLAnchorElement>}>{content}</a>;
  }
  return <button ref={ref as React.Ref<HTMLButtonElement>} disabled={disabled || loading} style={baseStyle} {...rest}>{content}</button>;
});
Button.displayName = 'Button';

// ─────────────────────────────────────────────
// INPUT
// ─────────────────────────────────────────────

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  inputSize?: 'sm' | 'md' | 'lg';
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  label, error, inputSize = 'md', className = '', style, ...rest
}, ref) => {
  const heights: Record<string, string> = { sm: '32px', md: '40px', lg: '48px' };
  const fontSizes: Record<string, string> = { sm: '12px', md: '14px', lg: '16px' };

  const wrapperStyle: CSSProperties = { display: 'flex', flexDirection: 'column', gap: '4px' };
  const labelStyle: CSSProperties = { fontSize: '14px', fontWeight: '500', color: '#8892B0' };
  const inputStyle: CSSProperties = {
    height: heights[inputSize], padding: '0 12px',
    background: '#0F121E', border: `1px solid ${error ? '#FF3D71' : 'rgba(255,255,255,0.08)'}`,
    borderRadius: '8px', color: '#F0F4FF', fontFamily: tokens.fonts.body,
    fontSize: fontSizes[inputSize], outline: 'none',
    transition: `border-color 150ms, box-shadow 150ms`,
    width: '100%', boxSizing: 'border-box',
    ...(error ? { boxShadow: '0 0 0 3px rgba(255,61,113,0.15)' } : {}),
    ...style,
  };

  return (
    <div style={wrapperStyle}>
      {label && <label style={labelStyle}>{label}</label>}
      <input
        ref={ref}
        style={inputStyle}
        onFocus: (e) => { e.target.style.borderColor = '#00D4FF'; e.target.style.boxShadow = '0 0 0 3px rgba(0,212,255,0.15)'; }
        onBlur:  (e) => { e.target.style.borderColor = error ? '#FF3D71' : 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = error ? '0 0 0 3px rgba(255,61,113,0.15)' : 'none'; }
        {...rest}
      />
      {error && <span style={{ fontSize: '12px', color: '#FF3D71', display: 'flex', alignItems: 'center', gap: '4px' }}>{error}</span>}
    </div>
  );
});
Input.displayName = 'Input';

// ─────────────────────────────────────────────
// BADGE
// ─────────────────────────────────────────────

interface BadgeProps {
  variant?: AccentVariant;
  dot?: boolean;
  children?: React.ReactNode;
  style?: CSSProperties;
}

const badgeVariants: Record<string, { bg: string; color: string; border: string }> = {
  default:  { bg: 'rgba(255,255,255,0.08)', color: '#8892B0', border: 'rgba(255,255,255,0.08)' },
  primary:  { bg: 'rgba(0,212,255,0.15)',  color: '#00D4FF', border: 'rgba(0,212,255,0.3)' },
  success:  { bg: 'rgba(0,230,118,0.15)',   color: '#00E676', border: 'rgba(0,230,118,0.3)' },
  warning:  { bg: 'rgba(255,179,0,0.15)',   color: '#FFB300', border: 'rgba(255,179,0,0.3)' },
  danger:   { bg: 'rgba(255,61,113,0.15)',  color: '#FF3D71', border: 'rgba(255,61,113,0.3)' },
  gold:     { bg: 'rgba(201,168,76,0.15)',  color: '#C9A84C', border: 'rgba(201,168,76,0.3)' },
};

export const Badge: React.FC<BadgeProps> = ({ variant = 'default', dot = false, children, style }) => {
  const v = badgeVariants[variant] || badgeVariants.default;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '4px',
      height: '22px', padding: dot ? '0 6px' : '0 8px',
      fontSize: '12px', fontWeight: '500', borderRadius: '9999px',
      background: v.bg, color: v.color, border: `1px solid ${v.border}`,
      ...style,
    }}>
      {dot && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'currentColor', flexShrink: 0 }} />}
      {children}
    </span>
  );
};

// ─────────────────────────────────────────────
// CARD
// ─────────────────────────────────────────────

interface CardProps {
  elevated?: boolean;
  hoverable?: boolean;
  children: React.ReactNode;
  style?: CSSProperties;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ elevated = false, hoverable = false, children, style, onClick }) => (
  <div
    onClick={onClick}
    style={{
      background: elevated ? '#1A2035' : '#131829',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '16px',
      padding: '24px',
      transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: hoverable ? 'pointer' : 'default',
      position: 'relative', overflow: 'hidden',
      ...(hoverable ? {
        ':hover': {
          transform: 'translateY(-2px)',
          borderColor: 'rgba(0,212,255,0.2)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.65), 0 0 40px rgba(0,212,255,0.05)',
        }
      } : {}),
      ...style,
    }}
  >
    {children}
  </div>
);

// ─────────────────────────────────────────────
// CHECKBOX & RADIO
// ─────────────────────────────────────────────

interface CheckProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  type?: 'checkbox' | 'radio';
}

export const Checkbox: React.FC<CheckProps> = ({ label, checked = false, onChange, disabled = false }) => (
  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1 }}>
    <input type="checkbox" checked={checked} onChange={e => onChange?.(e.target.checked)} disabled={disabled} style={{ display: 'none' }} />
    <span style={{
      width: '18px', height: '18px', border: '2px solid rgba(255,255,255,0.08)',
      borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: checked ? '#00D4FF' : '#0F121E', borderColor: checked ? '#00D4FF' : 'rgba(255,255,255,0.08)',
      transition: 'all 150ms cubic-bezier(0.34, 1.56, 0.64, 1)',
      flexShrink: 0,
    }}>
      {checked && <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#0B0E17" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>}
    </span>
    <span style={{ fontSize: '14px', color: '#F0F4FF' }}>{label}</span>
  </label>
);

export const Radio: React.FC<CheckProps> = ({ label, checked = false, onChange, disabled = false }) => (
  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1 }}>
    <input type="radio" checked={checked} onChange={e => onChange?.(e.target.checked)} disabled={disabled} style={{ display: 'none' }} />
    <span style={{
      width: '18px', height: '18px', border: '2px solid rgba(255,255,255,0.08)',
      borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: checked ? '#1A2035' : '#0F121E', borderColor: checked ? '#00D4FF' : 'rgba(255,255,255,0.08)',
      transition: 'all 150ms cubic-bezier(0.34, 1.56, 0.64, 1)',
      flexShrink: 0,
    }}>
      {checked && <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00D4FF' }} />}
    </span>
    <span style={{ fontSize: '14px', color: '#F0F4FF' }}>{label}</span>
  </label>
);

// ─────────────────────────────────────────────
// SWITCH
// ─────────────────────────────────────────────

interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
}

export const Switch: React.FC<SwitchProps> = ({ checked = false, onChange, disabled = false, label }) => (
  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1 }}>
    {label && <span style={{ fontSize: '14px', color: '#F0F4FF' }}>{label}</span>}
    <input type="checkbox" checked={checked} onChange={e => onChange?.(e.target.checked)} disabled={disabled} style={{ display: 'none' }} />
    <span style={{
      width: '40px', height: '22px', background: checked ? 'rgba(0,212,255,0.2)' : 'rgba(255,255,255,0.08)',
      border: `1px solid ${checked ? '#00D4FF' : 'rgba(255,255,255,0.08)'}`,
      borderRadius: '9999px', position: 'relative', transition: 'all 150ms',
      boxShadow: checked ? '0 0 20px rgba(0,212,255,0.35)' : 'none',
    }}>
      <span style={{
        position: 'absolute', top: '2px', left: checked ? '20px' : '2px',
        width: '16px', height: '16px', borderRadius: '50%',
        background: checked ? '#00D4FF' : '#4A5578',
        transition: 'all 150ms cubic-bezier(0.34, 1.56, 0.64, 1)',
      }} />
    </span>
  </label>
);

// ─────────────────────────────────────────────
// SPINNER
// ─────────────────────────────────────────────

interface SpinnerProps { size?: 'sm' | 'md' | 'lg' | 'xl'; }

export const Spinner: React.FC<SpinnerProps> = ({ size = 'md' }) => {
  const sizes: Record<string, string> = { sm: '16px', md: '24px', lg: '40px', xl: '56px' };
  const widths: Record<string, number> = { sm: 2, md: 2.5, lg: 3, xl: 4 };
  return (
    <span style={{
      display: 'inline-block', width: sizes[size], height: sizes[size],
      borderRadius: '50%', border: `${widths[size]}px solid rgba(255,255,255,0.08)`,
      borderTopColor: '#00D4FF', animation: 'nui-spin-anim 0.8s linear infinite',
      boxShadow: '0 0 20px rgba(0,212,255,0.35)',
    }} />
  );
};

// ─────────────────────────────────────────────
// PROGRESS
// ─────────────────────────────────────────────

interface ProgressProps {
  value: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const Progress: React.FC<ProgressProps> = ({ value, size = 'md', showLabel = false }) => {
  const heights: Record<string, string> = { sm: '3px', md: '6px', lg: '10px' };
  return (
    <div style={{ width: '100%' }}>
      {showLabel && (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontSize: '14px', color: '#8892B0' }}>进度</span>
          <span style={{ fontSize: '14px', color: '#00D4FF', fontWeight: '500' }}>{value}%</span>
        </div>
      )}
      <div style={{ width: '100%', height: heights[size], background: '#212A45', borderRadius: '9999px', overflow: 'hidden' }}>
        <div style={{
          width: `${Math.min(100, Math.max(0, value))}%`, height: '100%',
          background: 'linear-gradient(90deg, #00D4FF, #7B61FF)',
          borderRadius: 'inherit', transition: 'width 250ms cubic-bezier(0, 0, 0.2, 1)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            content: '', position: 'absolute', top: 0, right: 0, bottom: 0, width: '60px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
            animation: 'progress-shimmer 1.5s ease-in-out infinite',
          }} />
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
// TABS
// ─────────────────────────────────────────────

interface Tab {
  id: string; label: string; content?: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  activeTab?: string;
  onChange?: (id: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTab: controlledActive, onChange }) => {
  const [internalActive, setInternalActive] = useState(tabs[0]?.id || '');
  const active = controlledActive ?? internalActive;

  const handleSelect = (id: string) => {
    setInternalActive(id);
    onChange?.(id);
  };

  return (
    <div>
      <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.08)', gap: '4px' }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => handleSelect(tab.id)}
            style={{
              padding: '12px 16px', fontSize: '14px', fontWeight: '500',
              color: active === tab.id ? '#00D4FF' : '#8892B0',
              background: 'none', border: 'none', borderBottom: `2px solid ${active === tab.id ? '#00D4FF' : 'transparent'}`,
              marginBottom: '-1px', cursor: 'pointer', transition: 'all 150ms',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div style={{ padding: '24px 0', animation: 'tab-in 400ms ease-out' }}>
        {tabs.find(t => t.id === active)?.content}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
// MODAL
// ─────────────────────────────────────────────

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ open, onClose, title, children, footer }) => {
  if (!open) return null;

  return (
    <div
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)',
        backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center',
        justifyContent: 'center', zIndex: 400, padding: '16px',
        animation: 'modal-fade-in 400ms ease-out',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{
        background: '#1A2035', border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '24px', boxShadow: '0 16px 48px rgba(0,0,0,0.75)',
        width: '100%', maxWidth: '480px', maxHeight: '90vh', overflow: 'auto',
        animation: 'modal-scale-in 400ms cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}>
        {title && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <span style={{ fontSize: '18px', fontWeight: '600', color: '#F0F4FF' }}>{title}</span>
            <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#4A5578', fontSize: '20px', padding: '0', lineHeight: 1 }}>×</button>
          </div>
        )}
        <div style={{ padding: '24px' }}>{children}</div>
        {footer && <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', padding: '16px 24px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>{footer}</div>}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
// TOAST
// ─────────────────────────────────────────────

const toastIcons: Record<string, React.ReactNode> = {
  success: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#00E676" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>,
  error:   <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#FF3D71" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>,
  warning: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#FFB300" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg>,
  info:    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#00D4FF" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>,
};

interface ToastItemProps { id: number; type: string; title: string; msg: string; onRemove: (id: number) => void; }

const ToastItem: React.FC<ToastItemProps> = ({ type, title, msg, onRemove }) => (
  <div style={{
    display: 'flex', alignItems: 'flex-start', gap: '12px', minWidth: '280px', maxWidth: '400px',
    padding: '16px', background: '#1A2035', border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '16px', boxShadow: '0 16px 48px rgba(0,0,0,0.75)',
    animation: 'toast-slide-in 400ms cubic-bezier(0.34, 1.56, 0.64, 1)',
    pointerEvents: 'auto',
  }}>
    <div style={{ flexShrink: 0, marginTop: '1px' }}>{toastIcons[type] || toastIcons.info}</div>
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: '14px', fontWeight: '600', color: '#F0F4FF', marginBottom: '4px' }}>{title}</div>
      <div style={{ fontSize: '14px', color: '#8892B0', lineHeight: '1.4' }}>{msg}</div>
    </div>
    <button onClick={() => onRemove(id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#4A5578', padding: '0', flexShrink: 0 }}>×</button>
  </div>
);

interface ToastContainerProps { toasts: Array<{ id: number; type: string; title: string; msg: string }>; onRemove: (id: number) => void; }

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove }) => (
  <div style={{ position: 'fixed', top: '16px', right: '16px', zIndex: 500, display: 'flex', flexDirection: 'column', gap: '8px', pointerEvents: 'none' }}>
    {toasts.map(t => <ToastItem key={t.id} {...t} onRemove={onRemove} />)}
  </div>
);

// ─────────────────────────────────────────────
// SKELETON
// ─────────────────────────────────────────────

interface SkeletonProps { width?: string | number; height?: string | number; radius?: string; style?: CSSProperties; }

export const Skeleton: React.FC<SkeletonProps> = ({ width = '100%', height = '16px', radius = '8px', style }) => (
  <div style={{
    width, height, borderRadius: radius, background: '#212A45', position: 'relative', overflow: 'hidden', ...style,
  }}>
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(90deg, transparent 25%, rgba(255,255,255,0.05) 50%, transparent 75%)',
      backgroundSize: '200% 100%',
      animation: 'skeleton-shimmer 1.5s ease-in-out infinite',
    }} />
  </div>
);

// ─────────────────────────────────────────────
// AVATAR
// ─────────────────────────────────────────────

interface AvatarProps { name?: string; src?: string; size?: 'sm' | 'md' | 'lg' | 'xl'; }

export const Avatar: React.FC<AvatarProps> = ({ name, src, size = 'md' }) => {
  const sizes: Record<string, string> = { sm: '32px', md: '40px', lg: '56px', xl: '80px' };
  const fontSizes: Record<string, string> = { sm: '12px', md: '14px', lg: '18px', xl: '24px' };
  const initials = name ? name.charAt(0) : '?';

  return (
    <div style={{
      width: sizes[size], height: sizes[size], borderRadius: '50%',
      background: 'linear-gradient(135deg, #00D4FF, #7B61FF)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: '600', fontSize: fontSizes[size], color: '#0B0E17', overflow: 'hidden', flexShrink: 0,
    }}>
      {src ? <img src={src} alt={name || 'avatar'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials}
    </div>
  );
};

// ─────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────

interface NavbarProps { logo?: React.ReactNode; links?: Array<{ label: string; href?: string; active?: boolean; onClick?: () => void }>; actions?: React.ReactNode; }

export const Navbar: React.FC<NavbarProps> = ({ logo, links = [], actions }) => (
  <nav style={{
    display: 'flex', alignItems: 'center', height: '48px', padding: '0 24px',
    background: '#131829', borderBottom: '1px solid rgba(255,255,255,0.08)', gap: '24px',
  }}>
    {logo && <div style={{ fontFamily: tokens.fonts.display, fontSize: '18px', fontWeight: '700', background: 'linear-gradient(135deg, #00D4FF, #7B61FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{logo}</div>}
    <div style={{ display: 'flex', gap: '4px', flex: 1 }}>
      {links.map((link, i) => (
        <a key={i} href={link.href || '#'} onClick={link.onClick} style={{
          padding: '8px 12px', fontSize: '14px',
          color: link.active ? '#00D4FF' : '#8892B0', textDecoration: 'none', borderRadius: '8px',
          background: link.active ? 'rgba(0,212,255,0.1)' : 'transparent',
          transition: 'all 150ms',
        }}>
          {link.label}
        </a>
      ))}
    </div>
    {actions && <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>{actions}</div>}
  </nav>
);

// ─────────────────────────────────────────────
// SIDEBAR
// ─────────────────────────────────────────────

interface SidebarItem { id: string; label: string; icon?: React.ReactNode; active?: boolean; onClick?: () => void; }
interface SidebarProps { items: SidebarItem[]; }

export const Sidebar: React.FC<SidebarProps> = ({ items }) => (
  <div style={{ width: '240px', height: '100%', background: '#131829', borderRight: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', padding: '16px', gap: '4px' }}>
    {items.map(item => (
      <div key={item.id} onClick={item.onClick} style={{
        display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px',
        borderRadius: '8px', color: item.active ? '#00D4FF' : '#8892B0',
        background: item.active ? 'rgba(0,212,255,0.1)' : 'transparent',
        cursor: 'pointer', fontSize: '14px', transition: 'all 150ms',
      }}>
        {item.icon && <span style={{ flexShrink: 0 }}>{item.icon}</span>}
        {item.label}
      </div>
    ))}
  </div>
);

// ─────────────────────────────────────────────
// CSS KEYFRAMES (inject once)
// ─────────────────────────────────────────────

export const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Source+Sans+3:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

    @keyframes nui-spin-anim { to { transform: rotate(360deg); } }
    @keyframes skeleton-shimmer {
      0%   { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    @keyframes progress-shimmer {
      from { transform: translateX(-100%); }
      to   { transform: translateX(400%); }
    }
    @keyframes modal-fade-in {
      from { opacity: 0; } to { opacity: 1; }
    }
    @keyframes modal-scale-in {
      from { opacity: 0; transform: scale(0.92) translateY(8px); }
      to   { opacity: 1; transform: scale(1) translateY(0); }
    }
    @keyframes toast-slide-in {
      from { opacity: 0; transform: translateX(110%); }
      to   { opacity: 1; transform: translateX(0); }
    }
    @keyframes tab-in {
      from { opacity: 0; transform: translateY(4px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  `}</style>
);

// ─────────────────────────────────────────────
// DEFAULT EXPORT
// ─────────────────────────────────────────────

export default {
  Button, Input, Badge, Card, Checkbox, Radio, Switch,
  Spinner, Progress, Tabs, Modal, ToastContainer, Skeleton,
  Avatar, Navbar, Sidebar, GlobalStyles, tokens, useTheme, useToast,
};
