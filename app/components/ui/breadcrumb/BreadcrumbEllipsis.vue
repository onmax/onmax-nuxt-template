<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

import { MoreHorizontal } from 'lucide-vue-next'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span
    role="presentation"
    aria-hidden="true"
    :class="cn('flex h-36 w-36 items-center justify-center', props.class)"
  >
    <slot>
      <MoreHorizontal size-16 class="" />
    </slot>
    <span class="sr-only">More</span>
  </span>
</template>
