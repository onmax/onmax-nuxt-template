<script lang="ts" setup>
import type { Mail } from './data/mails'
import { cn } from '@/lib/utils'
import { formatDistanceToNow } from 'date-fns'

interface MailListProps {
  items: Mail[]
}

defineProps<MailListProps>()
const selectedMail = defineModel<string>('selectedMail', { required: false })

function getBadgeVariantFromLabel(label: string) {
  if (['work'].includes(label.toLowerCase()))
    return 'default'

  if (['personal'].includes(label.toLowerCase()))
    return 'outline'

  return 'secondary'
}
</script>

<template>
  <ScrollArea class="h-[calc(100dvh-282px-206px-3rem-53px)] flex">
    <div class="flex flex-1 flex-col gap-8 p-16 pt-0">
      <TransitionGroup name="list" appear>
        <button
          v-for="item of items"
          :key="item.id"
          :class="cn(
            'flex flex-col items-start gap-8 f-rounded border p-12 text-left f-text-xs transition-all hover:bg-accent',
            selectedMail === item.id && 'bg-muted',
          )"
          @click="selectedMail = item.id"
        >
          <div class="w-full flex flex-col gap-4">
            <div class="flex items-center">
              <div class="flex items-center gap-8">
                <div class="font-semibold">
                  {{ item.name }}
                </div>
                <span v-if="!item.read" class="h-8 w-8 flex rounded-full bg-blue-600" />
              </div>
              <div
                :class="cn(
                  'ml-auto f-text-2xs',
                  selectedMail === item.id
                    ? 'text-foreground'
                    : 'text-muted-foreground',
                )"
              >
                {{ formatDistanceToNow(new Date(item.date), { addSuffix: true }) }}
              </div>
            </div>

            <div class="f-text-2xs font-medium">
              {{ item.subject }}
            </div>
          </div>
          <div class="line-clamp-8 f-text-2xs text-muted-foreground">
            {{ item.text.substring(0, 300) }}
          </div>
          <div class="flex items-center gap-8">
            <Badge v-for="label of item.labels" :key="label" :variant="getBadgeVariantFromLabel(label)">
              {{ label }}
            </Badge>
          </div>
        </button>
      </TransitionGroup>
    </div>
  </ScrollArea>
</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(15px);
}

.list-leave-active {
  position: absolute;
}
</style>
