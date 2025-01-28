<script setup lang="ts">
import type { PaginationNextProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import {
  Button,
} from '@/components/ui/button'

import { PaginationNext } from 'radix-vue'
import { computed } from 'vue'

const props = withDefaults(defineProps<PaginationNextProps & { class?: HTMLAttributes['class'] }>(), {
  asChild: true,
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <PaginationNext v-bind="delegatedProps">
    <Button :class="cn('w-36 h-36 p-0', props.class)" variant="outline">
      <slot>
        <Icon name="i-radix-icons-chevron-right" />
      </slot>
    </Button>
  </PaginationNext>
</template>
