<script setup lang="ts">
import type { MenubarRadioItemEmits, MenubarRadioItemProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import {
  MenubarItemIndicator,
  MenubarRadioItem,

  useForwardPropsEmits,
} from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<MenubarRadioItemProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<MenubarRadioItemEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <MenubarRadioItem
    v-bind="forwarded"
    :class="cn(
      'relative flex cursor-default select-none items-center f-rounded-xs py-6 pl-32 pr-8 f-text-xs outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      props.class,
    )"
  >
    <span class="absolute left-8 h-14 w-14 flex items-center justify-center">
      <MenubarItemIndicator>
        <Icon name="i-radix-icons-dot-filled" size-16 class="fill-current" />
      </MenubarItemIndicator>
    </span>
    <slot />
  </MenubarRadioItem>
</template>
