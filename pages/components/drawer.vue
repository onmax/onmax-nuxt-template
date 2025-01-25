<script setup lang="ts">
import { VisStackedBar, VisXYContainer } from '@unovis/vue'

const goal = ref(350)

type Data = typeof data[number]
const data = [
  { goal: 400 },
  { goal: 300 },
  { goal: 200 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 239 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 349 },
]
</script>

<template>
  <div class="flex flex-col gap-16">
    <div class="grid gap-8">
      <div>
        <h2 class="font-bold tracking-tight f-text-xl">
          Dialog
        </h2>
        <p class="text-muted-foreground">
          A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
        </p>
      </div>
      <div class="flex gap-8">
        <Button size="xs" variant="outline" class="f-text-2xs" as-child>
          <NuxtLink
            to="https://www.shadcn-vue.com/docs/components/drawer"
            external
            target="_blank"
          >
            <span class="i-radix-icons-code mr-8" />
            Component Source
          </NuxtLink>
        </Button>
        <Button size="xs" variant="outline" class="f-text-2xs" as-child>
          <NuxtLink
            to="https://github.com/radix-vue/vaul-vue"
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
            <Drawer>
              <DrawerTrigger as-child>
                <Button variant="outline">
                  Open Drawer
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div class="mx-auto max-w-320 w-full">
                  <DrawerHeader>
                    <DrawerTitle>Move Goal</DrawerTitle>
                    <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                  </DrawerHeader>
                  <div class="p-16 pb-0">
                    <div class="flex items-center justify-center space-x-8">
                      <Button
                        variant="outline"
                        size="icon"
                        class="h-32 w-32 shrink-0 rounded-full"
                        :disabled="goal <= 200"
                        @click="goal -= 10"
                      >
                        <Icon name="radix-icons:minus" class="h-16 w-16" />
                        <span class="sr-only">Decrease</span>
                      </Button>
                      <div class="flex-1 text-center">
                        <div class="text-7xl font-bold tracking-tighter">
                          {{ goal }}
                        </div>
                        <div class="text-[0.70rem] text-muted-foreground uppercase">
                          Calories/day
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        class="h-32 w-32 shrink-0 rounded-full"
                        :disabled="goal >= 400"
                        @click="goal += 10"
                      >
                        <Icon name="radix-icons:plus" class="h-16 w-16" />
                        <span class="sr-only">Increase</span>
                      </Button>
                    </div>
                    <div class="my-12 h-[120px] px-12">
                      <VisXYContainer
                        :data="data"
                        class="h-[120px]"
                        :style="{
                          'opacity': 0.9,
                          '--theme-primary': `hsl(var(--foreground))`,
                        }"
                      >
                        <VisStackedBar
                          :x="(d: Data, i :number) => i"
                          :y="(d: Data) => d.goal"
                          color="var(--theme-primary)"
                          :bar-padding="0.1"
                          :rounded-corners="0"
                        />
                      </VisXYContainer>
                    </div>
                  </div>
                  <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose as-child>
                      <Button variant="outline">
                        Cancel
                      </Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
