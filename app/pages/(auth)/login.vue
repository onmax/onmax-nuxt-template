<script setup lang="ts">
definePageMeta({
  layout: 'blank',
})
</script>

<template>
  <LayoutAuth reverse>
    <div class="grid mx-auto max-w-320 gap-24">
      <div class="grid gap-8 text-center">
        <h1 class="font-semibold tracking-tight f-text-xl">
          Welcome back
        </h1>
        <p class="text-balance text-muted-foreground f-text-xs">
          Login with your Apple or Google account
        </p>
      </div>
      <AuthSignIn />
    </div>
  </LayoutAuth>
</template>
