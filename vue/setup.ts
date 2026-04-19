/**
 * NueroUI Vue 3 Setup & Composables v1.0.0
 * Date: 2026-04-19 | Output: Hermes01
 */

import { ref, onMounted } from 'vue'

// ─────────────────────────────────────────────
// THEME COMPOSABLE
// ─────────────────────────────────────────────

export function useTheme(initialTheme = 'dark') {
  const theme = ref(initialTheme)
  const setTheme = (t: string) => {
    theme.value = t
    document.documentElement.setAttribute('data-theme', t)
  }
  onMounted(() => document.documentElement.setAttribute('data-theme', theme.value))
  return { theme, setTheme }
}

// ─────────────────────────────────────────────
// TOAST COMPOSABLE
// ─────────────────────────────────────────────

export interface Toast {
  id: number
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  msg: string
}

const toastList = ref<Toast[]>([])
let _counter = 0

export function useToast() {
  const add = (type: Toast['type'], title: string, msg: string, duration = 4000) => {
    const id = ++_counter
    toastList.value.push({ id, type, title, msg })
    setTimeout(() => remove(id), duration)
  }
  const remove = (id: number) => {
    toastList.value = toastList.value.filter(t => t.id !== id)
  }
  const success = (title: string, msg: string) => add('success', title, msg)
  const error   = (title: string, msg: string) => add('error',   title, msg)
  const warning = (title: string, msg: string) => add('warning', title, msg)
  const info    = (title: string, msg: string) => add('info',    title, msg)
  return { list: toastList, add, remove, success, error, warning, info }
}

// ─────────────────────────────────────────────
// ANIMATION HELPERS
// ─────────────────────────────────────────────

export const nuiAnimations = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

@keyframes nui-spin-anim     { to { transform: rotate(360deg); } }
@keyframes nui-fade-in      { from { opacity:0; } to { opacity:1; } }
@keyframes nui-scale-in     { from { opacity:0; transform:scale(0.94); } to { opacity:1; transform:scale(1); } }
@keyframes nui-slide-up     { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
@keyframes nui-drawer-right { from { transform:translateX(100%); opacity:0; } to { transform:translateX(0); opacity:1; } }
@keyframes nui-toast-in     { from { opacity:0; transform:translateX(110%); } to { opacity:1; transform:translateX(0); } }
@keyframes nui-skeleton-wave {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
@keyframes nui-progress-shimmer {
  from { transform: translateX(-100%); }
  to   { transform: translateX(400%); }
}
`

// ─────────────────────────────────────────────
// TOAST COMPONENT (NueroToast.vue)
// ─────────────────────────────────────────────

export const NueroToast_vue = `
<script setup lang="ts">
import { useToast } from './setup'
const { list, remove } = useToast()
</script>

<template>
  <Teleport to="body">
    <div class="nui-toast-container">
      <TransitionGroup name="toast">
        <div v-for="toast in list" :key="toast.id" :class="['nui-toast', 'nui-toast--' + toast.type]">
          <div class="nui-toast__icon">
            <svg v-if="toast.type==='success'" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#00E676" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
            <svg v-else-if="toast.type==='error'"   viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#FF3D71" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>
            <svg v-else-if="toast.type==='warning'" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#FFB300" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg>
            <svg v-else viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#00D4FF" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
          </div>
          <div class="nui-toast__content">
            <div class="nui-toast__title">{{ toast.title }}</div>
            <div class="nui-toast__msg">{{ toast.msg }}</div>
          </div>
          <button class="nui-toast__close" @click="remove(toast.id)">×</button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<style scoped>
.nui-toast-container {
  position: fixed; top: 16px; right: 16px; z-index: 500;
  display: flex; flex-direction: column; gap: 8px; pointer-events: none;
}
.nui-toast {
  display: flex; align-items: flex-start; gap: 12px;
  min-width: 280px; max-width: 400px; padding: 16px;
  background: #1A2035; border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px; box-shadow: 0 16px 48px rgba(0,0,0,0.75);
  pointer-events: auto;
}
.nui-toast__icon { flex-shrink: 0; margin-top: 1px; }
.nui-toast__content { flex: 1; }
.nui-toast__title { font-size: 14px; font-weight: 600; color: #F0F4FF; margin-bottom: 4px; }
.nui-toast__msg { font-size: 14px; color: #8892B0; line-height: 1.4; }
.nui-toast__close { background: none; border: none; cursor: pointer; color: #4A5578; padding: 0; flex-shrink: 0; }
.toast-enter-active { animation: nui-toast-in 400ms cubic-bezier(0.34, 1.56, 0.64, 1); }
.toast-leave-active { animation: nui-toast-in 250ms cubic-bezier(0.4, 0, 0.2, 1) reverse; }
</style>
`
