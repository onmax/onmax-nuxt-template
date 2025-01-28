<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <h5 :class="cn('mb-4 font-medium leading-none tracking-tight', props.class)">
    <slot />
  </h5>
</template>
