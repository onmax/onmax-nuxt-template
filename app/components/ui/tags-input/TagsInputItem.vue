<script setup lang="ts">
import type { TagsInputItemProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

import { TagsInputItem, useForwardProps } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<TagsInputItemProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TagsInputItem v-bind="forwardedProps" :class="cn('flex h-20 items-center f-rounded bg-secondary data-active:ring-ring data-active:ring-2 data-active:ring-offset-2 ring-offset-background', props.class)">
    <slot />
  </TagsInputItem>
</template>
