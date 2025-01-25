<script setup lang="ts">

</script>

<template>
  <div class="pb-64 space-y-24">
    <div class="space-y-2">
      <h2 class="font-bold tracking-tight f-text-xl">
        Settings
      </h2>
      <p class="text-muted-foreground">
        Manage your account settings and set e-mail preferences.
      </p>
    </div>
    <Separator class="my-24" />
    <div class="flex flex-col lg:flex-row space-y-24 lg:space-x-48 lg:space-y-0">
      <div class="w-full overflow-x-auto pb-8 lg:w-1/6 lg:pb-0">
        <SettingsSidebarNav />
      </div>
      <div class="flex-1 lg:max-w-672">
        <div class="space-y-24">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
