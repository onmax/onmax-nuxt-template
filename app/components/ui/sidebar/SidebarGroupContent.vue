<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-sidebar="group-content"
    :class="cn('w-full f-text-xs', props.class)"
  >
    <slot />
  </div>
</template>
