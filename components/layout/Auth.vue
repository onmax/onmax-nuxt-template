<script setup lang="ts">
defineProps<{
  reverse?: boolean
}>()
</script>

<template>
  <div
    class="relative flex items-center justify-center px-16 h-dvh lg:max-w-none lg:px-0"
    :class="{ 'flex-row-reverse': reverse }"
  >
    <div class="relative hidden h-full flex-1 flex-col bg-muted p-40 text-white lg:flex dark:border-r">
      <div class="absolute inset-0 bg-zinc-900" />
      <div class="relative z-20 flex items-center font-medium f-text-md">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="mr-8 h-24 w-24">
          <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
        </svg>
        Acme Inc
      </div>
      <div class="relative z-20 mt-auto">
        <blockquote class="space-y-8">
          <p class="f-text-md">
            &ldquo;This library has saved me countless hours of work and
            helped me deliver stunning designs to my clients faster than
            ever before.&rdquo;
          </p>
          <footer class="f-text-xs">
            Sofia Davis
          </footer>
        </blockquote>
      </div>
    </div>
    <div class="mx-auto flex-1 lg:p-32">
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>
