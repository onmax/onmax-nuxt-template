<script setup lang="ts">
import type { MenubarLabelProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { MenubarLabel } from 'radix-vue'

const props = defineProps<MenubarLabelProps & { class?: HTMLAttributes['class'], inset?: boolean }>()
</script>

<template>
  <MenubarLabel :class="cn('px-8 py-6 f-text-xs font-semibold', inset && 'pl-32', props.class)">
    <slot />
  </MenubarLabel>
</template>
