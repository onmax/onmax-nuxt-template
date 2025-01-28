<script setup lang="ts">
import type { PrimitiveProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import type { ButtonVariants } from '.'

import { NuxtLink } from '#components'
import { Primitive } from 'radix-vue'
import { buttonVariants } from '.'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  href?: string
}

const props = defineProps<Props>()
const resolvedAs = computed(() => {
  if (props.as)
    return props.as
  if (props.href)
    return NuxtLink
  return 'button'
})
</script>

<template>
  <Primitive :as="resolvedAs" :as-child :class="cn(buttonVariants({ variant, size }), props.class)" :to="props.href">
    <slot />
  </Primitive>
</template>
