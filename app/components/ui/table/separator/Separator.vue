<script setup lang="ts">
import type { SeparatorProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { Separator } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<
  SeparatorProps & { class?: HTMLAttributes['class'], label?: string }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <Separator
    v-bind="delegatedProps"
    :class="
      cn(
        'shrink-0 bg-border relative',
        props.orientation === 'vertical' ? 'w-px h-full' : 'h-px w-full',
        props.class,
      )
    "
  >
    <span
      v-if="props.label"
      :class="
        cn(
          'f-text-2xs text-muted-foreground bg-background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center',
          props.orientation === 'vertical' ? 'w-1 px-4 py-8' : 'h-1 py-4 px-8',
        )
      "
    >{{ props.label }}</span>
  </Separator>
</template>
