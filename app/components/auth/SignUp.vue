<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next'
import { useToast } from '../ui/toast'

const { signUp, signIn } = useAuth()
const { toast } = useToast()

const email = ref('')
const password = ref('')
const name = ref('')
const isLoading = ref(false)

async function onSubmit() {
  if (isLoading.value)
    return
  isLoading.value = true
  const { error } = await signUp.email({ email: email.value, password: password.value, name: name.value })
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
  <div :class="cn('grid gap-24', $attrs.class ?? '')">
    <form @submit.prevent="onSubmit">
      <div class="grid gap-16">
        <div class="grid gap-8">
          <Label for="name">
            Name
          </Label>
          <Input
            id="name"
            placeholder="Enter your name"
            type="text"
            auto-capitalize="none"
            autocomplete="name"
            auto-correct="off"
            :disabled="isLoading"
          />
        </div>
        <div class="grid gap-8">
          <Label for="email">
            Email
          </Label>
          <Input
            id="email"
            placeholder="name@example.com"
            type="email"
            auto-capitalize="none"
            autocomplete="email"
            auto-correct="off"
            :disabled="isLoading"
          />
        </div>
        <div class="grid gap-8">
          <Label for="password">
            Password
          </Label>
          <PasswordInput id="password" autocomplete="new-password" />
        </div>
        <div class="grid gap-8">
          <Label for="confirm-password">
            Confirm Password
          </Label>
          <PasswordInput id="confirm-password" autocomplete="new-password" />
        </div>
        <Button :disabled="isLoading">
          <Loader2 v-if="isLoading" class="mr-8 h-16 w-16 animate-spin" />
          Sign In with Email
        </Button>
      </div>
    </form>
    <Separator label="Or continue with" />
    <div class="flex items-center gap-16">
      <Button variant="outline" class="w-full gap-8" @click="signIn.social({ provider: 'github', callbackURL: '/' })">
        <Icon name="i-lucide:github" size-16 />
        GitHub
      </Button>
    </div>
  </div>
</template>
