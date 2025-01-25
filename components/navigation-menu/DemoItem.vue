<script setup lang="ts">
defineProps<{
  title?: string
  href?: string
}>()
</script>

<template>
  <li>
    <NavigationMenuLink as-child>
      <a
        :href="href"
        :class="cn(
          'block select-none space-y-4 f-rounded p-12 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
          $attrs.class ?? '',
        )"
      >
        <div class="f-text-xs font-medium leading-none">{{ title }}</div>
        <p class="line-clamp-8 f-text-xs text-muted-foreground leading-snug">
          <slot />
        </p>
      </a>
    </NavigationMenuLink>
  </li>
</template>
