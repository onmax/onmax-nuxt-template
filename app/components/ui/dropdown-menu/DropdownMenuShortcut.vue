<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span :class="cn('ml-auto f-text-2xs tracking-widest opacity-60', props.class)">
    <slot />
  </span>
</template>
