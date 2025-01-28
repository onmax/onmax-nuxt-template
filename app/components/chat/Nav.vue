<script lang="ts" setup>
import { isSameWeek, isToday, isYesterday } from 'date-fns'
import { buttonVariants } from '~/components/ui/button'

export interface ChatLinks {
  title: string
  variant: 'default' | 'ghost'
  href: string
  date: Date
}

const { links } = defineProps<{ links: ChatLinks[] }>()

const linksGroups = computed(() => {
  const today: ChatLinks[] = []
  const yesterday: ChatLinks[] = []
  const thisWeek: ChatLinks[] = []
  const previous: ChatLinks[] = []

  links.forEach((link) => {
    if (isToday(link.date))
      today.push(link)
    else if (isYesterday(link.date))
      yesterday.push(link)
    else if (isSameWeek(link.date, new Date(), { weekStartsOn: 1 }))
      thisWeek.push(link)
    else
      previous.push(link)
  })

  return [
    { label: 'Today', items: today },
    { label: 'Yesterday', items: yesterday },
    { label: 'This Week', items: thisWeek },
    { label: 'Previous', items: previous },
  ].filter(group => group.items.length > 0)
})
</script>

<template>
  <div class="group mt-12 h-full flex flex-col gap-16 py-8 data-[collapsed=true]:py-8">
    <nav class="grid gap-4 px-8 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-8">
      <div v-for="({ label, items }, groupIndex) in linksGroups" :key="groupIndex">
        <div class="mb-2 text-muted-foreground font-semibold f-text-2xs">
          {{ label }}
        </div>
        <div v-for="({ title, variant, href }, index) in items" :key="index">
          <NuxtLink
            :to="href"
            :class="cn(buttonVariants({ variant, size: 'sm' }), variant === 'default'
                         && 'dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white',
                       'justify-start mx--12 w-full')"
          >
            {{ title }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>
