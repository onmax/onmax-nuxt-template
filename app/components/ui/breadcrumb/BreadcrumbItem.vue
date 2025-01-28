<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <li
    :class="cn('inline-flex items-center gap-6', props.class)"
  >
    <slot />
  </li>
</template>
