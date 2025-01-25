<script setup lang="ts">
import type { NumberFieldIncrementProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Plus } from 'lucide-vue-next'
import { NumberFieldIncrement, useForwardProps } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<NumberFieldIncrementProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <NumberFieldIncrement v-bind="forwarded" :class="cn('absolute top-1/2 -translate-y-1/2 right-0 disabled:cursor-not-allowed disabled:opacity-20 p-12', props.class)">
    <slot>
      <Plus class="h-16 w-16" />
    </slot>
  </NumberFieldIncrement>
</template>
