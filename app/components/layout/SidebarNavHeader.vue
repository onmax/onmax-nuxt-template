<script setup lang="ts">
import { useSidebar } from '~/components/ui/sidebar'

const props = defineProps<{
  teams: {
    name: string
    logo: string
    plan: string
  }[]
}>()

const { isMobile } = useSidebar()

const activeTeam = ref(props.teams[0])
</script>

<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <SidebarMenuButton
            size="lg"
            class="data-open:bg-sidebar-accent data-open:text-sidebar-accent-foreground"
          >
            <div class="aspect-square size-32 flex items-center justify-center bg-sidebar-primary text-sidebar-primary-foreground f-rounded-xs">
              <Icon :name="activeTeam.logo" class="size-16" />
            </div>
            <div class="grid flex-1 text-left leading-tight f-text-xs">
              <span class="truncate font-semibold">
                {{ activeTeam.name }}
              </span>
              <span class="truncate f-text-2xs">{{ activeTeam.plan }}</span>
            </div>
            <Icon name="i-lucide-chevrons-up-down" class="ml-auto" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          class="min-w-224 w-[--radix-dropdown-menu-trigger-width] f-rounded-xs"
          align="start"
          :side="isMobile ? 'bottom' : 'right'"
        >
          <DropdownMenuLabel class="text-muted-foreground f-text-2xs">
            Teams
          </DropdownMenuLabel>
          <DropdownMenuItem
            v-for="(team, index) in teams"
            :key="team.name"
            class="gap-8 p-8"
            @click="activeTeam = team"
          >
            <div class="size-24 flex items-center justify-center border f-rounded-xs">
              <Icon :name="team.logo" class="size-16 shrink-0" />
            </div>
            {{ team.name }}
            <DropdownMenuShortcut>⌘{{ index + 1 }}</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem class="gap-8 p-8">
            <div class="size-24 flex items-center justify-center border bg-background f-rounded-xs">
              <Icon name="i-lucide-plus" class="size-16" />
            </div>
            <div class="text-muted-foreground font-medium">
              Add team
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>
</template>

<style scoped>

</style>
