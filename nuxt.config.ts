// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@unocss/nuxt',
    'shadcn-nuxt',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxthub/core',
  ],

  hub: {
    database: true,
    kv: true,
    ai: true,
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  colorMode: {
    classSuffix: '',
  },

  features: {
    // For UnoCSS
    inlineStyles: false,
  },

  runtimeConfig: {
    github: {
      clientId: '',
      clientSecret: '',
    },
    public: {
      auth: {
        redirectUserTo: '/',
        redirectGuestTo: '/login',
      },
    },
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  routeRules: {
    '/components': { redirect: '/components/accordion' },
    '/settings': { redirect: '/settings/profile' },
  },

  imports: {
    dirs: [
      './lib',
    ],
  },

  future: { compatibilityVersion: 4 },

  compatibilityDate: '2024-12-14',

  shadcn: {
    componentDir: './app/components/ui',
  },
})
