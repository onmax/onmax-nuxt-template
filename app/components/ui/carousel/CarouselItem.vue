<script setup lang="ts">
import type { WithClassAsProps } from './interface'

import { useCarousel } from './useCarousel'

const props = defineProps<WithClassAsProps>()

const { orientation } = useCarousel()
</script>

<template>
  <div
    role="group"
    aria-roledescription="slide"
    :class="cn(
      'min-w-0 shrink-0 grow-0 basis-full',
      orientation === 'horizontal' ? 'pl-16' : 'pt-16',
      props.class,
    )"
  >
    <slot />
  </div>
</template>
