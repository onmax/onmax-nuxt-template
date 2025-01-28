<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
const model = defineModel<string>('model')
</script>

<template>
  <input v-model="model" :class="cn('flex h-40 w-full f-rounded-xs border border-input bg-background px-12 py-8 f-text-xs ring-offset-background file:border-0 file:bg-transparent file:f-text-xs file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50', props.class)">
</template>
