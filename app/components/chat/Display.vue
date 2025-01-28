<script setup lang="ts">
import type { Chat } from './data/chats'
import { useChat } from '@ai-sdk/vue'

const { chat } = defineProps<{ chat?: Chat }>()

const { messages, input, handleSubmit, isLoading, stop } = useChat({ initialMessages: chat?.messages })
</script>

<template>
  <div flex="~ col gap-16" h-full f-p-md>
    <ul v-if="messages.length > 0" flex="~ col">
      <li
        v-for="({ content, id, role }) in messages" :key="id" :data-role="role"
        :class="{
          'self-center': role === 'system',
          'self-end': role === 'user',
        }"
      >
        <div
          max-w-512 f-text-sm f-px-sm f-py-2xs f-rounded
          :class="{
            'bg-foreground text-background': role === 'user',
            'text-foreground': role === 'assistant',
            'text-muted-foreground text-center font-italic': role === 'system',
          }"
        >
          <span v-if="role === 'system'" mr-4 font-bold uppercase f-text-xs>
            System
          </span>
          {{ content }}
        </div>
      </li>
    </ul>
    <div v-else flex="~ col gap-12 items-center justify-center" flex-1>
      <h2 text-foreground font-bold f-text-3xl>
        How can I help you?
      </h2>

      <p max-w-520 text-center text-muted-foreground>
        I can answer questions, provide information, and help you with tasks. Just ask me anything!
      </p>
    </div>

    <form mt-auto w-full @submit="handleSubmit">
      <div relative>
        <Textarea v-model="input" placeholder="Send a message..." w-full resize-none bg-secondary f-text-sm f-p-xs />
        <Button v-if="!isLoading" absolute bottom-4 right-4 aspect-1 class="h-[calc(1lh+8px)] p-0" type="submit">
          <Icon name="i-lucide-send" size-14 />
        </Button>
        <Button v-else absolute bottom-4 right-4 aspect-1 class="h-[calc(1lh+8px)] p-0" @click="stop">
          <Icon name="i-lucide:circle-stop" size-14 />
        </Button>
      </div>
    </form>
  </div>
</template>

<style scoped>
[data-role] {
  --uno: 'f-mt-sm';
}

[data-role='assistant'] + [data-role='assistant'] {
  --uno: 'mt-0';
}
</style>
