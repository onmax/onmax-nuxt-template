<script lang="ts" setup>
import type { CalendarHeadCellProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { CalendarHeadCell, useForwardProps } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<CalendarHeadCellProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarHeadCell :class="cn('w-32 f-rounded-xs f-text-2xs font-normal text-muted-foreground', props.class)" v-bind="forwardedProps">
    <slot />
  </CalendarHeadCell>
</template>
