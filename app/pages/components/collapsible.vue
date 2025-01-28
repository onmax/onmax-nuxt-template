<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col gap-16">
    <div class="grid gap-8">
      <div>
        <h2 class="font-bold tracking-tight f-text-xl">
          Collapsible
        </h2>
        <p class="text-muted-foreground">
          An interactive component which expands/collapses a panel.
        </p>
      </div>
      <div class="flex gap-8">
        <Button size="xs" variant="outline" class="f-text-2xs" as-child>
          <NuxtLink
            to="https://www.shadcn-vue.com/docs/components/collapsible"
            external
            target="_blank"
          >
            <span class="i-radix-icons-code mr-8" />
            Component Source
          </NuxtLink>
        </Button>
        <Button size="xs" variant="outline" class="f-text-2xs" as-child>
          <NuxtLink
            to="https://www.radix-vue.com/components/collapsible"
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
            <Collapsible
              class="w-full md:w-350 space-y-8"
            >
              <CollapsibleTrigger as-child>
                <div class="flex cursor-pointer items-center justify-between px-16 space-x-80">
                  <h4 class="font-semibold f-text-xs">
                    @peduarte starred 3 repositories
                  </h4>
                  <Button variant="ghost" size="sm" class="w-36 p-0">
                    <Icon name="radix-icons:caret-sort" size-16 class="" />
                    <span class="sr-only">Toggle</span>
                  </Button>
                </div>
              </CollapsibleTrigger>
              <div class="border px-16 py-12 font-mono f-text-xs f-rounded-xs">
                @radix-ui/primitives
              </div>
              <CollapsibleContent class="space-y-8">
                <div class="border px-16 py-12 font-mono f-text-xs f-rounded-xs">
                  @radix-ui/colors
                </div>
                <div class="border px-16 py-12 font-mono f-text-xs f-rounded-xs">
                  @stitches/react
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
