<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next'
import PasswordInput from '~/components/PasswordInput.vue'

const { signIn } = useAuth()
const { toast } = useToast()

const email = ref('')
const password = ref('')
const isLoading = ref(false)

async function onSubmit() {
  if (isLoading.value)
    return
  isLoading.value = true
  const { error } = await signIn.email({ email: email.value, password: password.value })
  isLoading.value = false
  if (error) {
    toast({ title: error.message || 'Something went wrong' })
    return
  }

  toast({ title: `You have been signed up!` })
  await navigateTo('/')
}
</script>

<template>
  <div class="grid gap-24">
    <div class="flex flex-col gap-16">
      <Button variant="outline" class="w-full gap-8" @click="signIn.social({ provider: 'github', callbackURL: '/' })">
        <Icon name="i-lucide:github" size-16 />
        Login with GitHub
      </Button>
    </div>
    <Separator label="Or continue with" />
    <form class="grid gap-24" @submit.prevent="onSubmit">
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
        <Button type="submit" class="w-full" :disabled="isLoading">
          <Loader2 v-if="isLoading" class="mr-8 h-16 w-16 animate-spin" />
          Login
        </Button>
      </div>
    </form>

    <div class="mt-16 text-center text-muted-foreground f-text-xs">
      Don't have an account?
      <NuxtLink to="/register" class="underline">
        Sign up
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>
