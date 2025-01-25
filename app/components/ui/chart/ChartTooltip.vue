<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '../card'

defineProps<{
  title?: string
  data: {
    name: string
    color: string
    value: any
  }[]
}>()
</script>

<template>
  <Card class="f-text-xs">
    <CardHeader v-if="title" class="border-b p-12">
      <CardTitle>
        {{ title }}
      </CardTitle>
    </CardHeader>
    <CardContent class="min-w-180 flex flex-col gap-4 p-12">
      <div v-for="(item, key) in data" :key="key" class="flex justify-between">
        <div class="flex items-center">
          <span class="mr-8 h-10 w-10">
            <svg width="100%" height="100%" viewBox="0 0 30 30">
              <path
                d=" M 15 15 m -14, 0 a 14,14 0 1,1 28,0 a 14,14 0 1,1 -28,0"
                :stroke="item.color"
                :fill="item.color"
                stroke-width="1"
              />
            </svg>
          </span>
          <span>{{ item.name }}</span>
        </div>
        <span class="ml-16 font-semibold">{{ item.value }}</span>
      </div>
    </CardContent>
  </Card>
</template>
