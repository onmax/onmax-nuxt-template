<script setup lang="ts">
import type { NavigationMenuTriggerProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import {
  NavigationMenuTrigger,

  useForwardProps,
} from 'radix-vue'
import { computed } from 'vue'
import { navigationMenuTriggerStyle } from '.'

const props = defineProps<NavigationMenuTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <NavigationMenuTrigger
    v-bind="forwardedProps"
    :class="cn(navigationMenuTriggerStyle(), 'group', props.class)"
  >
    <slot />
    <Icon
      name="i-radix-icons-chevron-down"
      class="group-data-open:rotate-180 relative top-px ml-4 h-12 w-12 transition duration-300"
      aria-hidden="true"
    />
  </NavigationMenuTrigger>
</template>
