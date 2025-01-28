<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

import { useFormField } from './useFormField'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { formDescriptionId } = useFormField()
</script>

<template>
  <p
    :id="formDescriptionId"
    :class="cn('f-text-xs text-muted-foreground', props.class)"
  >
    <slot />
  </p>
</template>
