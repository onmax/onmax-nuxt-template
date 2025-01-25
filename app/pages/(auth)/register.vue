<script setup lang="ts">
definePageMeta({
  layout: 'blank',
  auth: false,
})
</script>

<template>
  <LayoutAuth>
    <div class="grid mx-auto max-w-320 gap-24">
      <div class="flex flex-col text-center space-y-8">
        <h1 class="font-semibold tracking-tight f-text-xl">
          Create an account
        </h1>
        <p class="text-muted-foreground f-text-xs">
          Enter your email below to create your account
        </p>
      </div>
      <AuthSignUp />
      <p class="text-center text-muted-foreground f-text-xs">
        Already have an account?
        <NuxtLink
          to="/login"
          class="underline underline-offset-4 hover:text-primary"
        >
          Login
        </NuxtLink>
      </p>
      <p class="px-32 text-center text-muted-foreground f-text-xs">
        By clicking continue, you agree to our
        <a
          href="/terms"
          class="underline underline-offset-4 hover:text-primary"
        >
          Terms of Service
        </a>
        and
        <a
          href="/privacy"
          class="underline underline-offset-4 hover:text-primary"
        >
          Privacy Policy
        </a>
        .
      </p>
    </div>
  </LayoutAuth>
</template>

<style scoped>

</style>
