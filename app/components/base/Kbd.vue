<script setup lang="ts">
import { cva } from 'class-variance-authority'
import { computed } from 'vue'

interface KbdProps {
  as?: string
  size?: 'xs' | 'sm' | 'md'
}

const props = withDefaults(defineProps<KbdProps>(), {
  as: 'kbd',
  size: 'sm',
})

const kbdClass = computed(() => {
  return cva(
    'inline-flex items-center pointer-events-none min-w-20 h-20 select-none justify-center items-center gap-4 rounded border border-border bg-muted font-sans font-medium',
    {
      variants: {
        size: {
          xs: 'min-h-16 text-10 h-16 px-4',
          sm: 'min-h-20 text-11 h-20 px-4',
          md: 'min-h-24 text-12 h-24 px-6',
        },
      },
    },
  )({
    size: props.size,
  })
})
</script>

<template>
  <component :is="props.as" :class="kbdClass">
    <slot />
  </component>
</template>
