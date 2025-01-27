<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next'

const isLoading = ref(false)
async function onSubmit(event: Event) {
  event.preventDefault()
  isLoading.value = true

  setTimeout(() => {
    isLoading.value = false
  }, 3000)
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="grid gap-16">
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
      <Button :disabled="isLoading">
        <Loader2 v-if="isLoading" class="mr-8 h-16 w-16 animate-spin" />
        Submit
      </Button>
    </div>
  </form>
</template>

<style scoped>

</style>
