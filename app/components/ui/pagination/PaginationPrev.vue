<script setup lang="ts">
import type { PaginationPrevProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import {
  Button,
} from '@/components/ui/button'

import { PaginationPrev } from 'radix-vue'
import { computed } from 'vue'

const props = withDefaults(defineProps<PaginationPrevProps & { class?: HTMLAttributes['class'] }>(), {
  asChild: true,
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <PaginationPrev v-bind="delegatedProps">
    <Button :class="cn('w-36 h-36 p-0', props.class)" variant="outline">
      <slot>
        <Icon name="i-radix-icons-chevron-left" />
      </slot>
    </Button>
  </PaginationPrev>
</template>
