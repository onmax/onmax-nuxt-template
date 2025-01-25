<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col gap-16">
    <div class="grid gap-8">
      <div>
        <h2 class="font-bold tracking-tight f-text-xl">
          Card
        </h2>
        <p class="text-muted-foreground">
          Displays a card with header, content, and footer.
        </p>
      </div>
      <div class="flex gap-8">
        <Button size="xs" variant="outline" class="f-text-2xs" as-child>
          <NuxtLink
            to="https://www.shadcn-vue.com/docs/components/card"
            external
            target="_blank"
          >
            <span class="i-radix-icons-code mr-8" />
            Component Source
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
            <Card class="w-full md:w-[350px]">
              <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div class="grid w-full items-center gap-16">
                    <div class="flex flex-col space-y-6">
                      <Label for="name">Name</Label>
                      <Input id="name" placeholder="Name of your project" />
                    </div>
                    <div class="flex flex-col space-y-6">
                      <Label for="framework">Framework</Label>
                      <Select>
                        <SelectTrigger id="framework">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="nuxt">
                            Nuxt.js
                          </SelectItem>
                          <SelectItem value="next">
                            Next.js
                          </SelectItem>
                          <SelectItem value="sveltekit">
                            SvelteKit
                          </SelectItem>
                          <SelectItem value="astro">
                            Astro
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter class="flex justify-between px-24 pb-24">
                <Button variant="outline">
                  Cancel
                </Button>
                <Button>Deploy</Button>
              </CardFooter>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
