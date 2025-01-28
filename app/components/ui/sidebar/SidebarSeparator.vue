<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import Separator from '@/components/ui/separator/Separator.vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <Separator
    data-sidebar="separator"
    :class="cn('mx-8 w-auto bg-sidebar-border', props.class)"
  >
    <slot />
  </Separator>
</template>
