<script setup>
definePageMeta({
  layout: 'blank',
  auth: false,
})

const router = useRouter()
</script>

<template>
  <div class="h-svh">
    <div class="m-auto h-full w-full flex flex-col items-center justify-center gap-8">
      <h1 class="text-[7rem] font-bold leading-tight">
        503
      </h1>
      <span class="font-medium">Website is under maintenance!</span>
      <p class="text-center text-muted-foreground">
        The site is not available at the moment. <br>
        We'll be back online shortly.
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
