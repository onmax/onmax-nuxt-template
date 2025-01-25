<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col gap-16">
    <div class="grid gap-8">
      <div>
        <h2 class="font-bold tracking-tight f-text-xl">
          Sheet
        </h2>
        <p class="text-muted-foreground">
          Extends the Dialog component to display content that complements the main content of the screen.
        </p>
      </div>
      <div class="flex gap-8">
        <Button size="xs" variant="outline" class="f-text-2xs" as-child>
          <NuxtLink
            to="https://www.shadcn-vue.com/docs/components/sheet"
            external
            target="_blank"
          >
            <span class="i-radix-icons-code mr-8" />
            Component Source
          </NuxtLink>
        </Button>
        <Button size="xs" variant="outline" class="f-text-2xs" as-child>
          <NuxtLink
            to="https://www.radix-vue.com/components/sheet"
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
            <Sheet>
              <SheetTrigger as-child>
                <Button variant="outline">
                  Open
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when you're done.
                  </SheetDescription>
                </SheetHeader>
                <div class="grid gap-16 py-16">
                  <div class="grid grid-cols-4 items-center gap-16">
                    <Label for="name" class="text-right">
                      Name
                    </Label>
                    <Input id="name" value="Pedro Duarte" class="col-span-3" />
                  </div>
                  <div class="grid grid-cols-4 items-center gap-16">
                    <Label for="username" class="text-right">
                      Username
                    </Label>
                    <Input id="username" value="@peduarte" class="col-span-3" />
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose as-child>
                    <Button type="submit">
                      Save changes
                    </Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
