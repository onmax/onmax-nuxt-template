<script setup lang="ts">
import { useToast } from '~/components/ui/toast'

const { toast } = useToast()
</script>

<template>
  <div class="flex flex-col gap-16">
    <div class="grid gap-8">
      <div>
        <h2 class="font-bold tracking-tight f-text-xl">
          Toast
        </h2>
        <p class="text-muted-foreground">
          A succinct message that is displayed temporarily.
        </p>
      </div>
      <div class="flex gap-8">
        <Button size="xs" variant="outline" class="f-text-2xs" as-child>
          <NuxtLink
            to="https://www.shadcn-vue.com/docs/components/toast"
            external
            target="_blank"
          >
            <span class="i-radix-icons-code mr-8" />
            Component Source
          </NuxtLink>
        </Button>
        <Button size="xs" variant="outline" class="f-text-2xs" as-child>
          <NuxtLink
            to="https://www.radix-vue.com/components/toast"
            external
            target="_blank"
          >
            Primitive API Reference
          </NuxtLink>
        </Button>
      </div>
    </div>
    <div class="grid gap-16 md:grid-cols-2">
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Basic</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="min-h-400px w-full flex items-center justify-center gap-16 md:min-h-800px">
            <Button
              variant="outline" @click="() => {
                toast({
                  title: 'Scheduled: Catch up',
                  description: 'Friday, February 10, 2023 at 5:57 PM',
                });
              }"
            >
              Add to calendar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
