<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col gap-16">
    <div class="grid gap-8">
      <div>
        <h2 class="font-bold tracking-tight f-text-xl">
          Resizable
        </h2>
        <p class="text-muted-foreground">
          Accessible resizable panel groups and layouts with keyboard support.
        </p>
      </div>
      <div class="flex gap-8">
        <Button size="xs" variant="outline" class="f-text-2xs" as-child>
          <NuxtLink
            to="https://www.shadcn-vue.com/docs/components/resizable"
            external
            target="_blank"
          >
            <span class="i-radix-icons-code mr-8" />
            Component Source
          </NuxtLink>
        </Button>
        <Button size="xs" variant="outline" class="f-text-2xs" as-child>
          <NuxtLink
            to="https://www.radix-vue.com/components/resizable"
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
            <ResizablePanelGroup
              id="demo-group-4"
              direction="horizontal"
              class="max-w-448 border f-rounded"
            >
              <ResizablePanel id="demo-panel-1" :default-size="50">
                <div class="h-[200px] flex items-center justify-center p-24">
                  <span class="font-semibold">One</span>
                </div>
              </ResizablePanel>
              <ResizableHandle id="demo-handle-1" />
              <ResizablePanel id="demo-panel-2" :default-size="50">
                <ResizablePanelGroup id="demo-group-8" direction="vertical">
                  <ResizablePanel id="demo-panel-3" :default-size="25">
                    <div class="h-full flex items-center justify-center p-24">
                      <span class="font-semibold">Two</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle id="demo-handle-2" />
                  <ResizablePanel id="demo-panel-4" :default-size="75">
                    <div class="h-full flex items-center justify-center p-24">
                      <span class="font-semibold">Three</span>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </CardContent>
      </Card>
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Vertical</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="min-h-400px w-full flex items-center justify-center gap-16 md:min-h-800px">
            <ResizablePanelGroup
              id="vertical-demo-group-4"
              direction="vertical"
              class="max-w-448 min-h-[200px] border f-rounded"
            >
              <ResizablePanel id="vertical-demo-panel-1" :default-size="25">
                <div class="h-full flex items-center justify-center p-24">
                  <span class="font-semibold">Header</span>
                </div>
              </ResizablePanel>
              <ResizableHandle id="vertical-demo-handle-1" />
              <ResizablePanel id="vertical-demo-panel-2" :default-size="75">
                <div class="h-full flex items-center justify-center p-24">
                  <span class="font-semibold">Content</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
