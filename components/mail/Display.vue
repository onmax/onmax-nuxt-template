<script lang="ts" setup>
import type { Mail } from './data/mails'
import { addDays, addHours, format, nextSaturday } from 'date-fns'
import { Archive, ArchiveX, ArrowLeft, Clock, Forward, MoreVertical, Reply, ReplyAll, Trash2 } from 'lucide-vue-next'
import { computed } from 'vue'

interface MailDisplayProps {
  mail: Mail | undefined
}

const props = defineProps<MailDisplayProps>()

const emit = defineEmits(['close'])

const mailFallbackName = computed(() => {
  return props.mail?.name
    .split(' ')
    .map(chunk => chunk[0])
    .join('')
})

const today = new Date()
</script>

<template>
  <div class="h-full flex flex-col">
    <div class="flex items-center p-8">
      <div class="flex items-center gap-8">
        <Tooltip>
          <TooltipTrigger as-child>
            <Button variant="ghost" size="icon" :disabled="!mail" @click="emit('close')">
              <ArrowLeft class="size-16" />
              <span class="sr-only">Back</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Back</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button variant="ghost" size="icon" :disabled="!mail">
              <Archive class="size-16" />
              <span class="sr-only">Archive</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Archive</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button variant="ghost" size="icon" :disabled="!mail">
              <ArchiveX class="size-16" />
              <span class="sr-only">Move to junk</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Move to junk</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button variant="ghost" size="icon" :disabled="!mail">
              <Trash2 class="size-16" />
              <span class="sr-only">Move to trash</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Move to trash</TooltipContent>
        </Tooltip>
        <Separator orientation="vertical" class="mx-4 h-24" />
        <Tooltip>
          <Popover>
            <PopoverTrigger as-child>
              <TooltipTrigger as-child>
                <Button variant="ghost" size="icon" :disabled="!mail">
                  <Clock class="size-16" />
                  <span class="sr-only">Snooze</span>
                </Button>
              </TooltipTrigger>
            </PopoverTrigger>
            <PopoverContent class="w-full flex p-0">
              <div class="flex flex-col gap-8 border-r px-8 py-16">
                <div class="px-16 font-medium f-text-xs">
                  Snooze until
                </div>
                <div class="grid min-w-[250px] gap-4">
                  <Button
                    variant="ghost"
                    class="justify-start font-normal"
                  >
                    Later today
                    <span class="ml-auto text-muted-foreground">
                      {{ format(addHours(today, 4), "E, h:m b") }}
                    </span>
                  </Button>
                  <Button
                    variant="ghost"
                    class="justify-start font-normal"
                  >
                    Tomorrow
                    <span class="ml-auto text-muted-foreground">
                      {{ format(addDays(today, 1), "E, h:m b") }}
                    </span>
                  </Button>
                  <Button
                    variant="ghost"
                    class="justify-start font-normal"
                  >
                    This weekend
                    <span class="ml-auto text-muted-foreground">
                      {{ format(nextSaturday(today), "E, h:m b") }}
                    </span>
                  </Button>
                  <Button
                    variant="ghost"
                    class="justify-start font-normal"
                  >
                    Next week
                    <span class="ml-auto text-muted-foreground">
                      {{ format(addDays(today, 7), "E, h:m b") }}
                    </span>
                  </Button>
                </div>
              </div>
              <div class="p-8">
                <Calendar />
              </div>
            </PopoverContent>
          </Popover>
          <TooltipContent>Snooze</TooltipContent>
        </Tooltip>
      </div>
      <div class="ml-auto flex items-center gap-8">
        <Tooltip>
          <TooltipTrigger as-child>
            <Button variant="ghost" size="icon" :disabled="!mail">
              <Reply class="size-16" />
              <span class="sr-only">Reply</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Reply</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button variant="ghost" size="icon" :disabled="!mail">
              <ReplyAll class="size-16" />
              <span class="sr-only">Reply all</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Reply all</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button variant="ghost" size="icon" :disabled="!mail">
              <Forward class="size-16" />
              <span class="sr-only">Forward</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Forward</TooltipContent>
        </Tooltip>
      </div>
      <Separator orientation="vertical" class="mx-8 h-24" />
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="ghost" size="icon" :disabled="!mail">
            <MoreVertical class="size-16" />
            <span class="sr-only">More</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Mark as unread</DropdownMenuItem>
          <DropdownMenuItem>Star thread</DropdownMenuItem>
          <DropdownMenuItem>Add label</DropdownMenuItem>
          <DropdownMenuItem>Mute thread</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
    <Separator />
    <div v-if="mail" class="flex flex-1 flex-col">
      <div class="flex items-start p-16">
        <div class="flex items-start gap-16 f-text-xs">
          <Avatar>
            <AvatarFallback>
              {{ mailFallbackName }}
            </AvatarFallback>
          </Avatar>
          <div class="grid gap-4">
            <div class="font-semibold">
              {{ mail.name }}
            </div>
            <div class="line-clamp-4 f-text-2xs">
              {{ mail.subject }}
            </div>
            <div class="line-clamp-4 f-text-2xs">
              <span class="font-medium">Reply-To:</span> {{ mail.email }}
            </div>
          </div>
        </div>
        <div v-if="mail.date" class="ml-auto text-muted-foreground f-text-2xs">
          {{ format(new Date(mail.date), "PPpp") }}
        </div>
      </div>
      <Separator />
      <div class="flex-1 whitespace-pre-wrap p-16 f-text-xs">
        {{ mail.text }}
      </div>
      <Separator class="mt-auto" />
      <div class="p-16">
        <form>
          <div class="grid gap-16">
            <Textarea
              class="p-16"
              :placeholder="`Reply ${mail.name}...`"
            />
            <div class="flex items-center">
              <Label
                html-for="mute"
                class="flex items-center gap-8 font-normal f-text-2xs"
              >
                <Switch id="mute" aria-label="Mute thread" /> Mute this
                thread
              </Label>
              <Button
                type="button"
                size="sm"
                class="ml-auto"
              >
                Send
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div v-else class="p-32 text-center text-muted-foreground">
      No message selected
    </div>
  </div>
</template>
