<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import Skeleton from '@/components/ui/skeleton/Skeleton.vue'

import { computed } from 'vue'

const props = defineProps<{
  showIcon?: boolean
  class?: HTMLAttributes['class']
}>()

const width = computed(() => {
  return `${Math.floor(Math.random() * 40) + 50}%`
})
</script>

<template>
  <div
    data-sidebar="menu-skeleton"
    :class="cn('f-rounded-xs h-32 flex gap-8 px-8 items-center', props.class)"
  >
    <Skeleton
      v-if="showIcon"
      class="size-16 f-rounded-xs"
      data-sidebar="menu-skeleton-icon"
    />

    <Skeleton
      class="h-16 max-w-[--skeleton-width] flex-1"
      data-sidebar="menu-skeleton-text"
      :style="{ '--skeleton-width': width }"
    />
  </div>
</template>
