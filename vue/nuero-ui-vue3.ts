<script setup lang="ts">
/**
 * NueroUI Vue 3 Components v1.0.0
 * Date: 2026-04-19 | Output: Hermes01
 * Based on NueroUI Design System — 稳重·数字时代
 * Framework: Vue 3 Composition API + TypeScript
 */

// ─────────────────────────────────────────────
// BUTTON
// ─────────────────────────────────────────────

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
  iconOnly?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary', size: 'md', loading: false, iconOnly: false, disabled: false
})

const heights: Record<string, string> = { xs:'24px', sm:'32px', md:'40px', lg:'48px', xl:'56px' }
const paddings: Record<string, string> = { xs:'0 8px', sm:'0 12px', md:'0 20px', lg:'0 24px', xl:'0 32px' }
const fontSizes: Record<string, string> = { xs:'11px', sm:'12px', md:'14px', lg:'16px', xl:'18px' }

const variantStyle = computed(() => {
  const map: Record<string, Record<string, string>> = {
    primary:   { background:'#00D4FF', color:'#0B0E17', border:'1px solid #00D4FF', boxShadow:'0 0 20px rgba(0,212,255,0.35)' },
    secondary: { background:'#1A2035', color:'#F0F4FF', border:'1px solid rgba(255,255,255,0.08)' },
    ghost:     { background:'transparent', color:'#8892B0', border:'1px solid transparent' },
    danger:    { background:'#FF3D71', color:'#fff', border:'1px solid #FF3D71', boxShadow:'0 0 16px rgba(255,61,113,0.5)' },
    outline:   { background:'transparent', color:'#00D4FF', border:'1px solid #00D4FF' },
  }
  return map[props.variant] || map.primary
})

const btnStyle = computed(() => ({
  display: 'inline-flex', alignItems:'center', justifyContent:'center', gap:'8px',
  height: heights[props.size],
  padding: props.iconOnly ? '0' : paddings[props.size],
  fontFamily: "'Source Sans 3','PingFang SC','Microsoft YaHei',system-ui,sans-serif",
  fontSize: fontSizes[props.size], fontWeight:'500',
  borderRadius: '8px', cursor: props.disabled || props.loading ? 'not-allowed' : 'pointer',
  transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  opacity: (props.disabled || props.loading) ? 0.4 : 1,
  width: props.iconOnly ? heights[props.size] : 'auto',
  whiteSpace: 'nowrap', userSelect: 'none', outline: 'none',
  ...variantStyle.value
}))
</script>

<template>
  <button :style="btnStyle" :disabled="disabled || loading">
    <span v-if="loading" class="nui-spin-inline" />
    <slot />
  </button>
</template>

<style scoped>
.nui-spin-inline {
  width: 14px; height: 14px; border-radius: 50%;
  border: 2px solid currentColor; border-top-color: transparent;
  animation: nui-spin-anim 0.8s linear infinite; display: inline-block;
}
@keyframes nui-spin-anim { to { transform: rotate(360deg); } }
</style>
