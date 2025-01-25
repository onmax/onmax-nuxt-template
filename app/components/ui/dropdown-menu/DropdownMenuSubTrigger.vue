<script setup lang="ts">
import type { DropdownMenuSubTriggerProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-vue-next'
import {
  DropdownMenuSubTrigger,

  useForwardProps,
} from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<DropdownMenuSubTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DropdownMenuSubTrigger
    v-bind="forwardedProps"
    :class="cn(
      'flex gap-8 cursor-default select-none items-center f-rounded px-8 py-6 f-text-xs outline-none focus:bg-accent data-open:bg-accent',
      props.class,
    )"
  >
    <slot />
    <ChevronRight class="ml-auto h-16 w-16" />
  </DropdownMenuSubTrigger>
</template>
