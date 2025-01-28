<script setup lang="ts">
import type { AccordionContentProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { AccordionContent } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<AccordionContentProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <AccordionContent
    v-bind="delegatedProps"
    class="overflow-hidden transition-all f-text-xs data-open:animate-accordion-down data-closed:animate-accordion-up"
  >
    <div :class="cn('pb-16 pt-0', props.class)">
      <slot />
    </div>
  </AccordionContent>
</template>
