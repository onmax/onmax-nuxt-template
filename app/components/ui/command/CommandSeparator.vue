<script setup lang="ts">
import type { ComboboxSeparatorProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { ComboboxSeparator } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<ComboboxSeparatorProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ComboboxSeparator
    v-bind="delegatedProps"
    :class="cn('-mx-4 h-px bg-border', props.class)"
  >
    <slot />
  </ComboboxSeparator>
</template>
