<script lang="ts" setup>
import type { DrawerDescriptionProps } from 'vaul-vue'
import type { HtmlHTMLAttributes } from 'vue'

import { DrawerDescription } from 'vaul-vue'
import { computed } from 'vue'

const props = defineProps<DrawerDescriptionProps & { class?: HtmlHTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <DrawerDescription v-bind="delegatedProps" :class="cn('f-text-xs text-muted-foreground', props.class)">
    <slot />
  </DrawerDescription>
</template>
