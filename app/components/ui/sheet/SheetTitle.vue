<script setup lang="ts">
import type { DialogTitleProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { DialogTitle } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<DialogTitleProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <DialogTitle
    :class="cn('f-text-md font-semibold text-foreground', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </DialogTitle>
</template>
