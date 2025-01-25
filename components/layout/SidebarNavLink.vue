<script setup lang="ts">
import type { NavLink } from '~/types/nav'
import { type SidebarMenuButtonVariants, useSidebar } from '~/components/ui/sidebar'

withDefaults(defineProps<{
  item: NavLink
  size?: SidebarMenuButtonVariants['size']
}>(), {
  size: 'default',
})

const { setOpenMobile } = useSidebar()
</script>

<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <SidebarMenuButton as-child :tooltip="item.title" :size="size">
        <NuxtLink :to="item.link" @click="setOpenMobile(false)">
          <Icon :name="item.icon || ''" mode="svg" />
          <span>{{ item.title }}</span>
          <span v-if="item.new" class="bg-#adfa1d px-6 py-2 text-black leading-none no-underline f-text-2xs f-rounded group-hover:no-underline">
            New
          </span>
        </NuxtLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
</template>

<style scoped>

</style>
