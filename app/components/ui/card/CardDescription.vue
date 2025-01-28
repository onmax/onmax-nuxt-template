<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <p :class="cn('f-text-xs text-muted-foreground', props.class)">
    <slot />
  </p>
</template>
