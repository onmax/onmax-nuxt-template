<script setup lang="ts">
const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt.js', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]

const open = ref(false)
const value = ref('')
</script>

<template>
  <div class="flex flex-col gap-16">
    <div class="grid gap-8">
      <div>
        <h2 class="font-bold tracking-tight f-text-xl">
          Combobox
        </h2>
        <p class="text-muted-foreground">
          Autocomplete input and command palette with a list of suggestions.
        </p>
      </div>
      <div class="flex gap-8">
        <Button size="xs" variant="outline" class="f-text-2xs" as-child>
          <NuxtLink
            to="https://www.shadcn-vue.com/docs/components/combobox"
            external
            target="_blank"
          >
            <span class="i-radix-icons-code mr-8" />
            Component Source
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
            <Popover v-model:open="open">
              <PopoverTrigger as-child>
                <Button
                  variant="outline"
                  role="combobox"
                  :aria-expanded="open"
                  class="w-200 justify-between"
                >
                  {{ value
                    ? frameworks.find((framework) => framework.value === value)?.label
                    : "Select framework..." }}
                  <Icon name="radix-icons:caret-sort" class="ml-8 h-16 w-16 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent class="w-200 p-0">
                <Command>
                  <CommandInput class="h-36" placeholder="Search framework..." />
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandList>
                    <CommandGroup>
                      <CommandItem
                        v-for="framework in frameworks"
                        :key="framework.value"
                        :value="framework.value"
                        @select="(ev: any) => {
                          if (typeof ev.detail.value === 'string') {
                            value = ev.detail.value
                          }
                          open = false
                        }"
                      >
                        {{ framework.label }}
                        <Icon
                          name="radix-icons:check"
                          :class="cn(
                            'ml-auto h-16 w-16',
                            value === framework.value ? 'opacity-100' : 'opacity-0',
                          )"
                        />
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
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
