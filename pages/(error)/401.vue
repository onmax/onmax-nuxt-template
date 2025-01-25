<script setup>
definePageMeta({
  layout: 'blank',
})

const router = useRouter()
</script>

<template>
  <div class="h-svh">
    <div class="m-auto h-full w-full flex flex-col items-center justify-center gap-8">
      <h1 class="text-[7rem] font-bold leading-tight">
        401
      </h1>
      <span class="font-medium">Unauthorized Access</span>
      <p class="text-center text-muted-foreground">
        Please log in with the appropriate credentials <br> to access this resource.
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
