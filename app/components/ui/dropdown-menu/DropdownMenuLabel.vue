<script setup lang="ts">
import type { DropdownMenuLabelProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { DropdownMenuLabel, useForwardProps } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<DropdownMenuLabelProps & { class?: HTMLAttributes['class'], inset?: boolean }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DropdownMenuLabel
    v-bind="forwardedProps"
    :class="cn('px-8 py-6 f-text-xs font-semibold', inset && 'pl-32', props.class)"
  >
    <slot />
  </DropdownMenuLabel>
</template>
