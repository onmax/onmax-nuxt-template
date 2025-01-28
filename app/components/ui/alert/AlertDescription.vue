<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('f-text-xs [&_p]:leading-relaxed', props.class)">
    <slot />
  </div>
</template>
