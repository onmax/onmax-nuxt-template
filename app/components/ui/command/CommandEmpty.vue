<script setup lang="ts">
import type { ComboboxEmptyProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { ComboboxEmpty } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<ComboboxEmptyProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ComboboxEmpty v-bind="delegatedProps" :class="cn('py-24 text-center f-text-xs', props.class)">
    <slot />
  </ComboboxEmpty>
</template>
