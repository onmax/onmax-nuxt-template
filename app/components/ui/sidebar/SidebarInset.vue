<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <main
    :class="cn(
      'overflow-x-auto relative flex min-h-svh flex-1 flex-col bg-background',
      'peer-data-[variant=inset]:min-h-[calc(100svh-1rem)] md:peer-data-[variant=inset]:m-8 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-8 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:f-rounded-xs md:peer-data-[variant=inset][&>header]:rounded-t-xl md:peer-data-[variant=inset]:shadow',
      props.class,
    )"
  >
    <slot />
  </main>
</template>
