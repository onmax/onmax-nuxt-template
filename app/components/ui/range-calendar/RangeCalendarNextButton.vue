<script lang="ts" setup>
import type { RangeCalendarNextProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { ChevronRight } from 'lucide-vue-next'
import { RangeCalendarNext, useForwardProps } from 'radix-vue'
import { computed } from 'vue'
import { buttonVariants } from '../button'

const props = defineProps<RangeCalendarNextProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarNext
    :class="cn(
      buttonVariants({ variant: 'outline' }),
      'h-28 w-28 bg-transparent p-0 opacity-50 hover:opacity-100',
      props.class,
    )"
    v-bind="forwardedProps"
  >
    <slot>
      <ChevronRight size-16 class="" />
    </slot>
  </RangeCalendarNext>
</template>
