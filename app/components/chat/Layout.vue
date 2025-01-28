<script lang="ts" setup>
import type { Chat } from './data/chats'
import type { ChatLinks } from './Nav.vue'
import { useMediaQuery } from '@vueuse/core'
import { ConfigProvider } from 'radix-vue'

const { defaultCollapsed = false, defaultLayout = [26, 74], chats, chatId } = defineProps<{
  chats: Chat[]
  chatId?: string
  defaultLayout?: number[]
  defaultCollapsed?: boolean
  navCollapsedSize: number
}>()

const isCollapsed = ref(defaultCollapsed)
const defaultCollapse = useMediaQuery('(max-width: 768px)')
watch(() => defaultCollapse.value, () => isCollapsed.value = defaultCollapse.value)

const route = useRoute()

const chatLinks = computed<ChatLinks[]>(() => chats.map(({ title, id, date }) =>
  ({ title, href: `/chat/${id}`, variant: chatId === route.params.chatId ? 'default' : 'ghost', date: new Date(date) })))

const selectedChat = computed(() => chats.find(item => item.id === chatId))
</script>

<template>
  <ConfigProvider :use-id>
    <TooltipProvider :delay-duration="0">
      <ResizablePanelGroup
        id="resize-panel-group-4"
        direction="horizontal"
        class="h-full max-h-[calc(100dvh-53px-3rem)] items-stretch"
      >
        <ResizablePanel
          id="resize-panel-1"
          :default-size="defaultLayout[0]"
          :collapsed-size="navCollapsedSize"
          collapsible
          :min-size="15"
          :max-size="20"
          :class="cn(isCollapsed && 'min-w-50 transition-all duration-300 ease-in-out')"
          p-8
          @expand="isCollapsed = false"
          @collapse="isCollapsed = true"
        >
          <Button variant="outline" class="w-full gap-8" href="/chat">
            <Icon name="i-lucide:square-pen" size-16 />
            New Chat
          </Button>
          <ChatNav :links="chatLinks" />
        </ResizablePanel>
        <ResizableHandle id="resize-handle-1" with-handle />
        <ResizablePanel id="resize-panel-2" :default-size="defaultLayout[1]" :min-size="30">
          <ChatDisplay :chat="selectedChat" />
        <!-- <MailDisplay v-if="selectedMailData" :mail="selectedMailData" @close="selectedMail = ''" />
          <Tabs v-else default-value="all">
            <div class="flex items-center px-16 py-8">
              <h1 class="font-bold f-text-lg">
                Inbox
              </h1>
              <TabsList class="ml-auto">
                <TabsTrigger value="all" class="text-zinc-600 dark:text-zinc-200">
                  All mail
                </TabsTrigger>
                <TabsTrigger value="unread" class="text-zinc-600 dark:text-zinc-200">
                  Unread
                </TabsTrigger>
              </TabsList>
            </div>
            <Separator />
            <div class="bg-background/95 p-16 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <form>
                <div class="relative">
                  <Search class="absolute left-8 top-10 size-16 text-muted-foreground" />
                  <Input v-model="searchValue" placeholder="Search" class="pl-32" />
                </div>
              </form>
            </div>
            <TabsContent value="all" class="m-0">
              <MailList v-model:selected-mail="selectedMail" :items="filteredMailList" />
            </TabsContent>
            <TabsContent value="unread" class="m-0">
              <MailList v-model:selected-mail="selectedMail" :items="unreadMailList" />
            </TabsContent>
          </Tabs>
        </ResizablePanel> -->
        </resizablepanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  </ConfigProvider>
</template>
