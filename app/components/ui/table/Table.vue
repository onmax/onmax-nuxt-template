<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div class="relative w-full overflow-x-auto">
    <table :class="cn('min-w-full table-fixed caption-bottom f-text-xs', props.class)">
      <slot />
    </table>
  </div>
</template>
