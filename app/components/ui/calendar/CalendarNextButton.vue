<script lang="ts" setup>
import type { CalendarNextProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { CalendarNext, useForwardProps } from 'radix-vue'
import { computed } from 'vue'
import { buttonVariants } from '../button'

const props = defineProps<CalendarNextProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarNext
    :class="cn(
      buttonVariants({ variant: 'outline' }),
      'h-28 w-28 bg-transparent p-0 opacity-50 hover:opacity-100',
      props.class,
    )"
    v-bind="forwardedProps"
  >
    <slot>
      <Icon name="radix-icons:chevron-right" size-16 class="" />
    </slot>
  </CalendarNext>
</template>
