<script setup lang="ts">
import type { PaginationFirstProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import {
  Button,
} from '@/components/ui/button'

import { PaginationFirst } from 'radix-vue'
import { computed } from 'vue'

const props = withDefaults(defineProps<PaginationFirstProps & { class?: HTMLAttributes['class'] }>(), {
  asChild: true,
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <PaginationFirst v-bind="delegatedProps">
    <Button :class="cn('w-36 h-36 p-0', props.class)" variant="outline">
      <slot>
        <Icon name="i-radix-icons-double-arrow-left" />
      </slot>
    </Button>
  </PaginationFirst>
</template>
