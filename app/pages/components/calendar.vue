<script setup lang="ts">
import type { DateValue } from '@internationalized/date'
import type { Ref } from 'vue'
import { getLocalTimeZone, today } from '@internationalized/date'

const value = ref(today(getLocalTimeZone())) as Ref<DateValue>
</script>

<template>
  <div class="flex flex-col gap-16">
    <div class="grid gap-8">
      <div>
        <h2 class="font-bold tracking-tight f-text-xl">
          Calendar
        </h2>
        <p class="text-muted-foreground">
          A date field component that allows users to enter and edit date.
        </p>
      </div>
      <div class="flex gap-8">
        <Button size="xs" variant="outline" class="f-text-2xs" as-child>
          <NuxtLink
            to="https://www.shadcn-vue.com/docs/components/calendar"
            external
            target="_blank"
          >
            <span class="i-radix-icons-code mr-8" />
            Component Source
          </NuxtLink>
        </Button>
        <Button size="xs" variant="outline" class="f-text-2xs" as-child>
          <NuxtLink
            to="https://www.radix-vue.com/components/calendar"
            external
            target="_blank"
          >
            Primitive API Reference
          </NuxtLink>
        </Button>
      </div>
    </div>
    <div class="flex flex-col gap-16 md:flex-row">
      <Card class="w-full md:w-1/2">
        <CardHeader>
          <CardTitle>Basic</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="w-full flex items-center justify-center gap-16 overflow-hidden">
            <Calendar v-model="value" weekday-format="short" class="border f-rounded-xs" />
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
