<script setup lang="ts">
import type { DropdownMenuSeparatorProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import {
  DropdownMenuSeparator,

} from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<DropdownMenuSeparatorProps & {
  class?: HTMLAttributes['class']
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <DropdownMenuSeparator v-bind="delegatedProps" :class="cn('-mx-4 my-4 h-px bg-muted', props.class)" />
</template>
