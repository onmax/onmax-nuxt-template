<script setup lang="ts">
definePageMeta({
  layout: 'blank',
})
</script>

<template>
  <LayoutAuth reverse>
    <div class="grid mx-auto max-w-320 gap-24">
      <div class="grid gap-8 text-center">
        <h1 class="f-text-xl font-semibold tracking-tight">
          Welcome back
        </h1>
        <p class="text-balance f-text-xs text-muted-foreground">
          Login with your Apple or Google account
        </p>
      </div>
      <AuthSignIn />
    </div>
  </LayoutAuth>
</template>
