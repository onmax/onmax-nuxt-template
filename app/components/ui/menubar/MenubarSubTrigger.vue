<script setup lang="ts">
import type { MenubarSubTriggerProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { MenubarSubTrigger, useForwardProps } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<MenubarSubTriggerProps & { class?: HTMLAttributes['class'], inset?: boolean }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <MenubarSubTrigger
    v-bind="forwardedProps"
    :class="cn(
      'flex cursor-default select-none items-center f-rounded px-8 py-6 f-text-xs outline-none focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground',
      inset && 'pl-32',
      props.class,
    )"
  >
    <slot />
    <Icon name="i-radix-icons-chevron-right" class="ml-auto h-16 w-16" />
  </MenubarSubTrigger>
</template>
