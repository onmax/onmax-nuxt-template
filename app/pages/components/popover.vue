<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col gap-16">
    <div class="grid gap-8">
      <div>
        <h2 class="font-bold tracking-tight f-text-xl">
          Popover
        </h2>
        <p class="text-muted-foreground">
          Displays rich content in a portal, triggered by a button.
        </p>
      </div>
      <div class="flex gap-8">
        <Button size="xs" variant="outline" class="f-text-2xs" as-child>
          <NuxtLink
            to="https://www.shadcn-vue.com/docs/components/popover"
            external
            target="_blank"
          >
            <span class="i-radix-icons-code mr-8" />
            Component Source
          </NuxtLink>
        </Button>
        <Button size="xs" variant="outline" class="f-text-2xs" as-child>
          <NuxtLink
            to="https://www.radix-vue.com/components/popover"
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
            <Popover>
              <PopoverTrigger as-child>
                <Button variant="outline">
                  Open popover
                </Button>
              </PopoverTrigger>
              <PopoverContent class="w-320">
                <div class="grid gap-16">
                  <div class="space-y-8">
                    <h4 class="font-medium leading-none">
                      Dimensions
                    </h4>
                    <p class="text-muted-foreground f-text-xs">
                      Set the dimensions for the layer.
                    </p>
                  </div>
                  <div class="grid gap-8">
                    <div class="grid grid-cols-3 items-center gap-16">
                      <Label for="width">Width</Label>
                      <Input
                        id="width"
                        type="text"
                        default-value="100%"
                        class="col-span-2 h-32"
                      />
                    </div>
                    <div class="grid grid-cols-3 items-center gap-16">
                      <Label for="maxWidth">Max. width</Label>
                      <Input
                        id="maxWidth"
                        type="text"
                        default-value="300px"
                        class="col-span-2 h-32"
                      />
                    </div>
                    <div class="grid grid-cols-3 items-center gap-16">
                      <Label for="height">Height</Label>
                      <Input
                        id="height"
                        type="text"
                        default-value="25px"
                        class="col-span-2 h-32"
                      />
                    </div>
                    <div class="grid grid-cols-3 items-center gap-16">
                      <Label for="maxHeight">Max. height</Label>
                      <Input
                        id="maxHeight"
                        type="text"
                        default-value="none"
                        class="col-span-2 h-32"
                      />
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
