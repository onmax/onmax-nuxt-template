<script setup lang="ts">
import type { NavigationMenuIndicatorProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { NavigationMenuIndicator, useForwardProps } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<NavigationMenuIndicatorProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <NavigationMenuIndicator
    v-bind="forwardedProps"
    :class="cn('top-full z-[1] flex h-6 items-end justify-center overflow-hidden data-visible:animate-in data-hidden:animate-out data-hidden:fade-out data-visible:fade-in', props.class)"
  >
    <div class="shadow-448 relative top-[60%] h-8 w-8 rotate-45 rounded-tl-sm bg-border" />
  </NavigationMenuIndicator>
</template>
