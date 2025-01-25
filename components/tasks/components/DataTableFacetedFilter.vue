<script setup lang="ts">
import type { Column } from '@tanstack/vue-table'
import type { Component } from 'vue'
import type { Task } from '../data/schema'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

interface DataTableFacetedFilter {
  column?: Column<Task, any>
  title?: string
  options: {
    label: string
    value: string
    icon?: Component
  }[]
}

const props = defineProps<DataTableFacetedFilter>()

const facets = computed(() => props.column?.getFacetedUniqueValues())
const selectedValues = computed(() => new Set(props.column?.getFilterValue() as string[]))
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button variant="outline" size="sm" class="h-32 border-dashed">
        <Icon name="i-radix-icons-plus-circled" class="mr-8 h-16 w-16" />
        {{ title }}
        <template v-if="selectedValues.size > 0">
          <Separator orientation="vertical" class="mx-8 h-16" />
          <Badge
            variant="secondary"
            class="px-4 font-normal f-rounded lg:hidden"
          >
            {{ selectedValues.size }}
          </Badge>
          <div class="hidden lg:flex space-x-4">
            <Badge
              v-if="selectedValues.size > 2"
              variant="secondary"
              class="px-4 font-normal f-rounded"
            >
              {{ selectedValues.size }} selected
            </Badge>

            <template v-else>
              <Badge
                v-for="item in options
                  .filter((option: any) => selectedValues.has(option.value))"
                :key="item.value"
                variant="secondary"
                class="px-4 font-normal f-rounded"
              >
                {{ item.label }}
              </Badge>
            </template>
          </div>
        </template>
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-[200px] p-0" align="start">
      <Command
        :filter-function="(list: DataTableFacetedFilter['options'], term: any) => list.filter(i => i.label.toLowerCase()?.includes(term))"
      >
        <CommandInput :placeholder="title" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <CommandItem
              v-for="option in options"
              :key="option.value"
              :value="option"
              @select="(e: any) => {
                console.log(e.detail.value)
                const isSelected = selectedValues.has(option.value)
                if (isSelected) {
                  selectedValues.delete(option.value)
                }
                else {
                  selectedValues.add(option.value)
                }
                const filterValues = Array.from(selectedValues)
                column?.setFilterValue(
                  filterValues.length ? filterValues : undefined,
                )
              }"
            >
              <div
                :class="cn(
                  'mr-8 flex h-16 w-16 items-center justify-center f-rounded border border-primary',
                  selectedValues.has(option.value)
                    ? 'bg-primary text-primary-foreground'
                    : 'opacity-50 [&_svg]:invisible',
                )"
              >
                <Icon name="i-radix-icons-check" :class="cn('h-16 w-16')" />
              </div>
              <component :is="option.icon" v-if="option.icon" class="mr-8 h-16 w-16 text-muted-foreground" />
              <span>{{ option.label }}</span>
              <span v-if="facets?.get(option.value)" class="ml-auto h-16 w-16 flex items-center justify-center font-mono f-text-2xs">
                {{ facets.get(option.value) }}
              </span>
            </CommandItem>
          </CommandGroup>

          <template v-if="selectedValues.size > 0">
            <CommandSeparator />
            <CommandGroup>
              <CommandItem
                :value="{ label: 'Clear filters' }"
                class="justify-center text-center"
                @select="column?.setFilterValue(undefined)"
              >
                Clear filters
              </CommandItem>
            </CommandGroup>
          </template>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
