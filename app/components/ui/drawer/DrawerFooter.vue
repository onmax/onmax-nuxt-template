<script lang="ts" setup>
import type { HtmlHTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HtmlHTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('mt-auto flex flex-col gap-8 p-16', props.class)">
    <slot />
  </div>
</template>
