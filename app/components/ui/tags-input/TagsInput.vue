<script setup lang="ts">
import type { TagsInputRootEmits, TagsInputRootProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { TagsInputRoot, useForwardPropsEmits } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<TagsInputRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<TagsInputRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <TagsInputRoot v-bind="forwarded" :class="cn('flex flex-wrap gap-8 items-center f-rounded-xs border border-input bg-background px-12 py-6 f-text-xs', props.class)">
    <slot />
  </TagsInputRoot>
</template>
