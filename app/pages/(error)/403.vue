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
        403
      </h1>
      <span class="font-medium">Access Forbidden</span>
      <p class="text-center text-muted-foreground">
        You don't have necessary permission <br>
        to view this resource.
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
