<script setup lang="ts">
import type { TagsInputInputProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { TagsInputInput, useForwardProps } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<TagsInputInputProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TagsInputInput v-bind="forwardedProps" :class="cn('f-text-xs min-h-20 focus:outline-none flex-1 bg-transparent px-4', props.class)" />
</template>
