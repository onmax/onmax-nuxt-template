<script setup lang="ts">
import type { PinInputInputProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { PinInputInput, useForwardProps } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<PinInputInputProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PinInputInput v-bind="forwardedProps" :class="cn('relative text-center focus:outline-none focus:ring-2 focus:ring-ring focus:relative focus:z-10 flex h-40 w-40 items-center justify-center border-y border-r border-input f-text-xs transition-all first:rounded-l-md first:border-l last:rounded-r-md', props.class)" />
</template>
