<script setup lang="ts">
import type { WithClassAsProps } from './interface'
import { cn } from '@/lib/utils'
import { ArrowLeft } from 'lucide-vue-next'
import { Button } from '../button'
import { useCarousel } from './useCarousel'

const props = defineProps<WithClassAsProps>()

const { orientation, canScrollPrev, scrollPrev } = useCarousel()
</script>

<template>
  <Button
    :disabled="!canScrollPrev"
    :class="cn(
      'touch-manipulation absolute h-32 w-32 rounded-full p-0',
      orientation === 'horizontal'
        ? '-left-48 top-1/2 -translate-y-1/2'
        : '-top-48 left-1/2 -translate-x-1/2 rotate-90',
      props.class,
    )"
    variant="outline"
    @click="scrollPrev"
  >
    <slot>
      <ArrowLeft class="h-16 w-16 text-current" />
    </slot>
  </Button>
</template>
