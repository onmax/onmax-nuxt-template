<script setup lang="ts">
import type { Column } from '@tanstack/vue-table'
import type { Task } from '../data/schema'

interface DataTableColumnHeaderProps {
  column: Column<Task, any>
  title: string
}

defineProps<DataTableColumnHeaderProps>()
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <div v-if="column.getCanSort()" :class="cn('flex items-center space-x-8', $attrs.class ?? '')">
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button
          variant="ghost"
          size="sm"
          class="h-32 -ml-12 data-open:bg-accent"
        >
          <span>{{ title }}</span>
          <Icon v-if="column.getIsSorted() === 'desc'" name="i-radix-icons-arrow-down" class="ml-8 h-16 w-16" />
          <Icon v-else-if=" column.getIsSorted() === 'asc'" name="i-radix-icons-arrow-up" class="ml-8 h-16 w-16" />
          <Icon v-else name="i-radix-icons-caret-sort" class="ml-8 h-16 w-16" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem @click="column.toggleSorting(false)">
          <Icon name="i-radix-icons-arrow-up" class="mr-8 h-14 w-14 text-muted-foreground/70" />
          Asc
        </DropdownMenuItem>
        <DropdownMenuItem @click="column.toggleSorting(true)">
          <Icon name="i-radix-icons-arrow-down" class="mr-8 h-14 w-14 text-muted-foreground/70" />
          Desc
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem @click="column.toggleVisibility(false)">
          <Icon name="i-radix-icons-eye-none" class="mr-8 h-14 w-14 text-muted-foreground/70" />
          Hide
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>

  <div v-else :class="$attrs.class">
    {{ title }}
  </div>
</template>
