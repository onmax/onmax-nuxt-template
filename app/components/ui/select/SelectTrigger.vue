<script setup lang="ts">
import type { SelectTriggerProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { SelectIcon, SelectTrigger, useForwardProps } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<SelectTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectTrigger
    v-bind="forwardedProps"
    :class="cn(
      'flex h-36 w-full items-center justify-between whitespace-nowrap f-rounded-xs border border-input bg-transparent px-12 py-8 f-text-xs shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-4',
      props.class,
    )"
  >
    <slot />
    <SelectIcon as-child>
      <Icon name="i-radix-icons-caret-sort" size-16 class="opacity-50" />
    </SelectIcon>
  </SelectTrigger>
</template>
