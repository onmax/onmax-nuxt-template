<script setup lang="ts">
import type { ToastActionProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { ToastAction } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<ToastActionProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ToastAction v-bind="delegatedProps" :class="cn('inline-flex h-32 shrink-0 items-center justify-center f-rounded border bg-transparent px-12 f-text-xs font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-4 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive', props.class)">
    <slot />
  </ToastAction>
</template>
