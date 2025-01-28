<script setup lang="ts">
const route = useRoute()
const pageName = useState<string>('page-name')

const links = computed(() => {
  if (route.fullPath === '/')
    return [{ title: 'Home', href: '/' }]

  const parts = route.fullPath.split('/')
  return parts.map((item, index) => {
    const str = item.replace(/-/g, ' ')

    let title = ''

    if (index === parts.length - 1 && pageName.value) {
      title = pageName.value!
    }
    else {
      title = str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')
    }

    return {
      title: index > 0 ? title : 'Home',
      href: index > 0 ? `/${item}` : '/',
    }
  })
})
</script>

<template>
  <header class="sticky top-0 z-10 h-53 flex items-center gap-16 border-b bg-background px-16 md:px-24">
    <div w-full flex="~ items-center gap-16">
      <SidebarTrigger />
      <Separator orientation="vertical" h-16 />
      <BaseBreadcrumbCustom :links />
    </div>
    <div ml-auto>
      <slot />
    </div>
  </header>
</template>

<style scoped>

</style>
