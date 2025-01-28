<script setup lang="ts">
import type { MenubarTriggerProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { MenubarTrigger, useForwardProps } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<MenubarTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <MenubarTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'flex cursor-default select-none items-center f-rounded-xs px-12 py-4 f-text-xs font-medium outline-none focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground',
        props.class,
      )
    "
  >
    <slot />
  </MenubarTrigger>
</template>
