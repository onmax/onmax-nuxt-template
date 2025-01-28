<script setup lang="ts">
import { chats } from '@/components/chat/data/chats'

const route = useRoute()
const chatId = computed(() => route.params.chatId?.at(0) as string | undefined)
const chatTitle = computed(() => chats.find(item => item.id === route.params.chatId)?.title || '')
const pageName = useState<string>('page-name')
watch(chatTitle, () => pageName.value = chatTitle.value, { immediate: true })
</script>

<template>
  <div m="-16 lg:-24" h-full>
    <ChatLayout :chats :chat-id :nav-collapsed-size="4" />
  </div>
</template>
