<script lang="ts" setup>
import type { HtmlHTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HtmlHTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('grid gap-6 p-16 text-center sm:text-left', props.class)">
    <slot />
  </div>
</template>
