<script setup lang="ts">
import type { AccordionTriggerProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { ChevronDown } from 'lucide-vue-next'
import {
  AccordionHeader,
  AccordionTrigger,

} from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<AccordionTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      v-bind="delegatedProps"
      :class="
        cn(
          'flex flex-1 items-center justify-between py-16 f-text-xs font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
          props.class,
        )
      "
    >
      <slot />
      <slot name="icon">
        <ChevronDown
          size-16 class="shrink-0 transition-transform duration-200"
        />
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>
