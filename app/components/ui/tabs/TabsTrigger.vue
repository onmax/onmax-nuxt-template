<script setup lang="ts">
import type { TabsTriggerProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { TabsTrigger, useForwardProps } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<TabsTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TabsTrigger
    v-bind="forwardedProps"
    :class="cn(
      'inline-flex items-center justify-center whitespace-nowrap f-rounded-xs px-12 py-6 f-text-xs font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-active:bg-background data-active:text-foreground data-active:shadow-sm',
      props.class,
    )"
  >
    <slot />
  </TabsTrigger>
</template>
