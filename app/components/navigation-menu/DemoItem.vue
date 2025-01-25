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
        <div class="font-medium leading-none f-text-xs">{{ title }}</div>
        <p class="line-clamp-8 text-muted-foreground leading-snug f-text-xs">
          <slot />
        </p>
      </a>
    </NavigationMenuLink>
  </li>
</template>
