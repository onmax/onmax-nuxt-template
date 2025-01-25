<script setup>
definePageMeta({
  layout: 'blank',
})

const router = useRouter()
</script>

<template>
  <div class="h-svh">
    <div class="m-auto h-full w-full flex flex-col items-center justify-center gap-8">
      <h1 class="font-bold leading-tight f-text-2xl">
        404
      </h1>
      <span class="font-medium">Oops! Page Not Found!</span>
      <p class="text-center text-muted-foreground">
        It seems like the page you're looking for <br>
        does not exist or might have been removed.
      </p>
      <div class="mt-24 flex gap-16">
        <Button variant="outline" @click="router.back()">
          Go Back
        </Button>
        <Button @click="router.push('/')">
          Back to Home
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
