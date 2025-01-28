<script setup lang="ts">
import type { ToastTitleProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { ToastTitle } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<ToastTitleProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ToastTitle v-bind="delegatedProps" :class="cn('f-text-xs font-semibold [&+div]:f-text-2xs', props.class)">
    <slot />
  </ToastTitle>
</template>
