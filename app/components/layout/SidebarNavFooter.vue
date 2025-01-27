<script setup lang="ts">
import { useSidebar } from '~/components/ui/sidebar'

defineProps<{
  user: {
    name: string
    email: string
    avatar: string
  }
}>()

const { isMobile, setOpenMobile } = useSidebar()

const { signOut } = useAuth()

const showModalTheme = ref(false)
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
            <Avatar class="h-32 w-32 f-rounded-xs">
              <AvatarImage :src="user.avatar" :alt="user.name" />
              <AvatarFallback class="f-rounded-xs">
                CN
              </AvatarFallback>
            </Avatar>
            <div class="grid flex-1 text-left leading-tight f-text-xs">
              <span class="truncate font-semibold">{{ user.name }}</span>
              <span class="truncate f-text-2xs">{{ user.email }}</span>
            </div>
            <Icon name="i-lucide-chevrons-up-down" class="ml-auto size-16" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          class="min-w-224 w-[--radix-dropdown-menu-trigger-width] f-rounded-xs"
          :side="isMobile ? 'bottom' : 'right'"
          align="end"
        >
          <DropdownMenuLabel class="p-0 font-normal">
            <div class="flex items-center gap-8 px-4 py-6 text-left f-text-xs">
              <Avatar class="h-32 w-32 f-rounded-xs">
                <AvatarImage :src="user.avatar" :alt="user.name" />
                <AvatarFallback class="f-rounded-xs">
                  CN
                </AvatarFallback>
              </Avatar>
              <div class="grid flex-1 text-left leading-tight f-text-xs">
                <span class="truncate font-semibold">{{ user.name }}</span>
                <span class="truncate f-text-2xs">{{ user.email }}</span>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Icon name="i-lucide-sparkles" />
              Upgrade to Pro
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Icon name="i-lucide-badge-check" />
              Account
            </DropdownMenuItem>
            <DropdownMenuItem as-child>
              <NuxtLink to="/settings" @click="setOpenMobile(false)">
                <Icon name="i-lucide-settings" />
                Settings
              </NuxtLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icon name="i-lucide-bell" />
              Notifications
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem as-child>
              <NuxtLink to="https://github.com/dianprata/nuxt-shadcn-dashboard" external target="_blank">
                <Icon name="i-lucide-github" />
                Github Repository
              </NuxtLink>
            </DropdownMenuItem>
            <DropdownMenuItem @click="showModalTheme = true">
              <Icon name="i-lucide-paintbrush" />
              Theme
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem @click="signOut">
            <Icon name="i-lucide-log-out" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>

  <Dialog v-model:open="showModalTheme">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Customize</DialogTitle>
        <DialogDescription class="text-muted-foreground f-text-2xs">
          Pick a style and color for your components.
        </DialogDescription>
      </DialogHeader>
      <ThemeCustomize />
    </DialogContent>
  </Dialog>
</template>

<style scoped>

</style>
