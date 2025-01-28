<script setup lang="ts">
import type { WithClassAsProps } from './interface'

import { ArrowRight } from 'lucide-vue-next'
import { Button } from '../button'
import { useCarousel } from './useCarousel'

const props = defineProps<WithClassAsProps>()

const { orientation, canScrollNext, scrollNext } = useCarousel()
</script>

<template>
  <Button
    :disabled="!canScrollNext"
    :class="cn(
      'touch-manipulation absolute h-32 w-32 rounded-full p-0',
      orientation === 'horizontal'
        ? '-right-48 top-1/2 -translate-y-1/2'
        : '-bottom-48 left-1/2 -translate-x-1/2 rotate-90',
      props.class,
    )"
    variant="outline"
    @click="scrollNext"
  >
    <slot>
      <ArrowRight size-16 class="text-current" />
    </slot>
  </Button>
</template>
