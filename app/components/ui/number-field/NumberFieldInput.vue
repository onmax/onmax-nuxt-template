<script setup lang="ts">
import { NumberFieldInput } from 'radix-vue'
</script>

<template>
  <NumberFieldInput :class="cn('flex h-36 w-full f-rounded-xs border border-input bg-transparent px-40 py-4 f-text-xs text-center shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50')" />
</template>
