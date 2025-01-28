<script setup lang="ts">
import type { PaginationEllipsisProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { PaginationEllipsis } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<PaginationEllipsisProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <PaginationEllipsis v-bind="delegatedProps" :class="cn('w-36 h-36 flex items-center justify-center', props.class)">
    <slot>
      <Icon name="i-radix-icons-dots-horizontal" />
    </slot>
  </PaginationEllipsis>
</template>
