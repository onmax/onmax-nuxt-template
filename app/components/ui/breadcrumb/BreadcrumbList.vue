<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <ol
    :class="cn('flex flex-wrap items-center gap-6 break-words f-text-xs text-muted-foreground sm:gap-10', props.class)"
  >
    <slot />
  </ol>
</template>
