<script setup lang="ts">
import type { ToastCloseProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { ToastClose } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<ToastCloseProps & {
  class?: HTMLAttributes['class']
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ToastClose v-bind="delegatedProps" :class="cn('absolute right-4 top-4 f-rounded-xs p-4 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-4 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600', props.class)">
    <Icon name="radix-icons:cross-2" size-16 class="" />
  </ToastClose>
</template>
