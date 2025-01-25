<script setup lang="ts">
definePageMeta({
  layout: 'blank',
})
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-24 bg-muted p-24 min-h-svh md:p-40">
    <div class="max-w-320 w-full flex flex-col gap-24">
      <NuxtLink to="#" class="flex items-center self-center gap-8 font-medium">
        <div class="h-24 w-24 flex items-center justify-center f-rounded bg-primary text-primary-foreground">
          <Icon name="i-lucide-gallery-vertical-end" class-name="size-16" />
        </div>
        Acme Inc.
      </NuxtLink>
      <Card>
        <CardHeader class="text-center">
          <CardTitle class="f-text-lg">
            Forgot Password
          </CardTitle>
          <CardDescription>
            Enter your email below to reset your password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div class="grid mx-auto max-w-320 gap-24">
            <AuthForgotPassword />
            <p class="text-center f-text-xs text-muted-foreground">
              Already have an account?
              <NuxtLink
                to="/login"
                class="underline underline-offset-4 hover:text-primary"
              >
                Login
              </NuxtLink>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
