<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col gap-16">
    <div class="grid gap-8">
      <div>
        <h2 class="f-text-xl font-bold tracking-tight">
          Hover Card
        </h2>
        <p class="text-muted-foreground">
          For sighted users to preview content available behind a link.
        </p>
      </div>
      <div class="flex gap-8">
        <Button size="xs" variant="outline" class="f-text-2xs" as-child>
          <NuxtLink
            to="https://www.shadcn-vue.com/docs/components/hover-card"
            external
            target="_blank"
          >
            <span class="i-radix-icons-code mr-8" />
            Component Source
          </NuxtLink>
        </Button>
        <Button size="xs" variant="outline" class="f-text-2xs" as-child>
          <NuxtLink
            to="https://www.radix-vue.com/components/hover-card"
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
            <HoverCard>
              <HoverCardTrigger as-child>
                <Button variant="link">
                  @vuejs
                </Button>
              </HoverCardTrigger>
              <HoverCardContent class="w-320">
                <div class="flex justify-between space-x-80">
                  <Avatar>
                    <AvatarImage src="https://github.com/vuejs.png" />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <div class="space-y-4">
                    <h4 class="f-text-xs font-semibold">
                      @vuejs
                    </h4>
                    <p class="f-text-xs">
                      Progressive JavaScript framework for building modern web interfaces.
                    </p>
                    <div class="flex items-center pt-8">
                      <Icon name="radix-icons:calendar" class="mr-8 h-16 w-16 opacity-70" />
                      <span class="f-text-2xs text-muted-foreground">
                        Joined January 2014
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
