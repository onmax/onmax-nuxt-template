<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col gap-16">
    <div class="grid gap-8">
      <div>
        <h2 class="font-bold tracking-tight f-text-xl">
          Select
        </h2>
        <p class="text-muted-foreground">
          Displays a list of options for the user to pick from—triggered by a button.
        </p>
      </div>
      <div class="flex gap-8">
        <Button size="xs" variant="outline" class="f-text-2xs" as-child>
          <NuxtLink
            to="https://www.shadcn-vue.com/docs/components/select"
            external
            target="_blank"
          >
            <span class="i-radix-icons-code mr-8" />
            Component Source
          </NuxtLink>
        </Button>
        <Button size="xs" variant="outline" class="f-text-2xs" as-child>
          <NuxtLink
            to="https://www.radix-vue.com/components/select"
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
            <Select>
              <SelectTrigger class="w-180">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">
                    Apple
                  </SelectItem>
                  <SelectItem value="banana">
                    Banana
                  </SelectItem>
                  <SelectItem value="blueberry">
                    Blueberry
                  </SelectItem>
                  <SelectItem value="grapes">
                    Grapes
                  </SelectItem>
                  <SelectItem value="pineapple">
                    Pineapple
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
