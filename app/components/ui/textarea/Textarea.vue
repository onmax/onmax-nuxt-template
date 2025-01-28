<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
const model = defineModel<string>('model')
</script>

<template>
  <textarea v-model="model" :class="cn('flex min-h-1lh w-full f-rounded-xs border border-input bg-background px-12 py-8 f-text-xs ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [field-sizing:content] max-h-7xl', props.class)" />
</template>
