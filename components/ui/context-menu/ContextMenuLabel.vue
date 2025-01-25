<script setup lang="ts">
import { cn } from '@/lib/utils'
import { ContextMenuLabel, type ContextMenuLabelProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<ContextMenuLabelProps & { class?: HTMLAttributes['class'], inset?: boolean }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ContextMenuLabel
    v-bind="delegatedProps"
    :class="
      cn('px-8 py-6 f-text-xs font-semibold text-foreground',
         inset && 'pl-32', props.class,
      )"
  >
    <slot />
  </ContextMenuLabel>
</template>
