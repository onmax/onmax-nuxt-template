<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <caption :class="cn('mt-16 f-text-xs text-muted-foreground', props.class)">
    <slot />
  </caption>
</template>
