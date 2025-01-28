<script setup lang="ts">
import type { NavigationMenuViewportProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import {
  NavigationMenuViewport,

  useForwardProps,
} from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<NavigationMenuViewportProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <div class="absolute left-0 top-full flex justify-center">
    <NavigationMenuViewport
      v-bind="forwardedProps"
      :class="
        cn(
          'origin-top-center relative mt-6 h-[--radix-navigation-menu-viewport-height] w-full overflow-hidden f-rounded-xs border bg-popover text-popover-foreground shadow data-open:animate-in data-closed:animate-out data-closed:zoom-out-95 data-open:zoom-in-90 md:w-[--radix-navigation-menu-viewport-width]',
          props.class,
        )
      "
    />
  </div>
</template>
