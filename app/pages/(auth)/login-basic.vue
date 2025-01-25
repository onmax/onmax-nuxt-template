<script setup lang="ts">
definePageMeta({
  layout: 'blank',
})
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-24 bg-muted p-24 min-h-svh md:p-40">
    <div class="max-w-320 w-full flex flex-col gap-24">
      <NuxtLink to="#" class="flex items-center self-center gap-8 font-medium">
        <div class="h-24 w-24 flex items-center justify-center bg-primary text-primary-foreground f-rounded">
          <Icon name="i-lucide-gallery-vertical-end" class="size-16" />
        </div>
        Acme Inc.
      </NuxtLink>
      <div class="flex flex-col gap-24">
        <Card>
          <CardHeader class="text-center">
            <CardTitle class="f-text-lg">
              Welcome back
            </CardTitle>
            <CardDescription>
              Login with your Apple or Google account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AuthSignIn />
          </CardContent>
        </Card>
        <div class="text-center text-balance text-muted-foreground f-text-2xs [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary">
          By clicking continue, you agree to our <a href="#">Terms of Service</a>
          and <a href="#">Privacy Policy</a>.
        </div>
      </div>
    </div>
  </div>
</template>
