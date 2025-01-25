<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next'
import PasswordInput from '~/components/PasswordInput.vue'

const email = ref('demo@gmail.com')
const password = ref('password')
const isLoading = ref(false)

function onSubmit(event: Event) {
  event.preventDefault()
  if (!email.value || !password.value)
    return

  isLoading.value = true

  setTimeout(() => {
    if (email.value === 'demo@gmail.com' && password.value === 'password')
      navigateTo('/')

    isLoading.value = false
  }, 3000)
}
</script>

<template>
  <form class="grid gap-24" @submit="onSubmit">
    <div class="flex flex-col gap-16">
      <Button variant="outline" class="w-full gap-8">
        <Icon name="i-lucide:github" size-16 />
        Login with GitHub
      </Button>
    </div>
    <Separator label="Or continue with" />
    <div class="grid gap-8">
      <Label for="email">
        Email
      </Label>
      <Input
        id="email"
        v-model="email"
        type="email"
        placeholder="name@example.com"
        :disabled="isLoading"
        auto-capitalize="none"
        autocomplete="email"
        auto-correct="off"
      />
    </div>
    <div class="grid gap-8">
      <div class="flex items-center">
        <Label for="password">
          Password
        </Label>
        <NuxtLink
          to="/forgot-password"
          class="ml-auto inline-block underline f-text-xs"
        >
          Forgot your password?
        </NuxtLink>
      </div>
      <PasswordInput id="password" v-model="password" />
    </div>
    <Button type="submit" class="w-full" :disabled="isLoading">
      <Loader2 v-if="isLoading" class="mr-8 h-16 w-16 animate-spin" />
      Login
    </Button>
  </form>
  <div class="mt-16 text-center text-muted-foreground f-text-xs">
    Don't have an account?
    <NuxtLink to="/register" class="underline">
      Sign up
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>
