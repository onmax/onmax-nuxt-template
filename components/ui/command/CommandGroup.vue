<script setup lang="ts">
import type { ComboboxGroupProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { ComboboxGroup, ComboboxLabel } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<ComboboxGroupProps & {
  class?: HTMLAttributes['class']
  heading?: string
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ComboboxGroup
    v-bind="delegatedProps"
    :class="cn('overflow-hidden p-4 text-foreground [&_[cmdk-group-heading]]:px-8 [&_[cmdk-group-heading]]:py-6 [&_[cmdk-group-heading]]:f-text-2xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground', props.class)"
  >
    <ComboboxLabel v-if="heading" class="px-8 py-6 f-text-2xs text-muted-foreground font-medium">
      {{ heading }}
    </ComboboxLabel>
    <slot />
  </ComboboxGroup>
</template>
