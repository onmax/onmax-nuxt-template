<script setup lang="ts">
import type { DropdownMenuItemProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { DropdownMenuItem, useForwardProps } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<DropdownMenuItemProps & { class?: HTMLAttributes['class'], inset?: boolean }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DropdownMenuItem
    v-bind="forwardedProps"
    :class="cn(
      'relative flex cursor-pointer select-none gap-8 items-center f-rounded-xs px-8 py-6 f-text-xs outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-32',
      props.class,
    )"
  >
    <slot />
  </DropdownMenuItem>
</template>
