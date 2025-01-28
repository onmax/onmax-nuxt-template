<script lang="ts" setup>
import type { RangeCalendarHeadCellProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { RangeCalendarHeadCell, useForwardProps } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<RangeCalendarHeadCellProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarHeadCell :class="cn('w-32 f-rounded-xs f-text-2xs font-normal text-muted-foreground', props.class)" v-bind="forwardedProps">
    <slot />
  </RangeCalendarHeadCell>
</template>
