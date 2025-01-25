<script setup lang="ts">
import type { ContextMenuSubTriggerProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-vue-next'
import {
  ContextMenuSubTrigger,

  useForwardProps,
} from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<ContextMenuSubTriggerProps & { class?: HTMLAttributes['class'], inset?: boolean }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <ContextMenuSubTrigger
    v-bind="forwardedProps"
    :class="cn(
      'flex cursor-default select-none items-center f-rounded-xs px-8 py-6 f-text-xs outline-none focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground',
      inset && 'pl-32',
      props.class,
    )"
  >
    <slot />
    <ChevronRight class="ml-auto h-16 w-16" />
  </ContextMenuSubTrigger>
</template>
