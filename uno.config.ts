import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetAnimations from 'unocss-preset-animations'
import { presetFluidSizing } from 'unocss-preset-fluid-sizing'
import { presetScalePx } from 'unocss-preset-scale-px'
import { builtinColors, presetShadcn } from 'unocss-preset-shadcn'

export default defineConfig({
  variants: [
    {
      // nth-[]:class
      name: ':nth-child()',
      match: (matcher: string) => {
        const match = matcher.match(/^nth-\[(.+?):/)
        if (!match)
          return matcher
        return {
          // slice `hover:` prefix and passed to the next variants and rules
          matcher: matcher.substring(match[0].length),
          selector: s => `${s}:nth-child(${match[1]})`,
        }
      },
      multiPass: true,
    },
    (matcher) => {
      const dataStates = ['open', 'closed', 'checked', 'active', 'hidden', 'unchecked', 'visible', 'on']
      for (const state of dataStates) {
        const prefix = `data-${state}:`
        if (matcher.startsWith(prefix)) {
          return {
            matcher: matcher.slice(prefix.length),
            // Ensures styles apply only to elements with data-state=${state} that don't contain nested data-state elements.  
            selector: s => `[data-state=${state}]:not(:has([data-state])) ${s}, [data-state=${state}]:not(:has([data-state]))${s}`,
          }
        }
      }
    },
  ],
  theme: {
    colors: {
      'sidebar': 'hsl(var(--sidebar-background))',
      'sidebar-foreground': 'hsl(var(--sidebar-foreground))',
      'sidebar-primary': 'hsl(var(--sidebar-primary))',
      'sidebar-primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
      'sidebar-accent': 'hsl(var(--sidebar-accent))',
      'sidebar-accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
      'sidebar-border': 'hsl(var(--sidebar-border))',
      'sidebar-ring': 'hsl(var(--sidebar-ring))',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Chivo',
        mono: 'Chivo Mono',
      },
    }),
    presetAnimations(),
    presetShadcn(builtinColors.map(c => ({ color: c }))),
    presetScalePx(),
    presetFluidSizing(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup({ separators: [':'] }),
  ],
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'app/components/ui/**/*.{js,ts}',
      ],
    },
  },
  preflights: [
    {
      getCSS: () => `
        :root {
          --vis-tooltip-background-color: none !important;
          --vis-tooltip-border-color: none !important;
          --vis-tooltip-text-color: none !important;
          --vis-tooltip-shadow-color: none !important;
          --vis-tooltip-backdrop-filter: none !important;
          --vis-tooltip-padding: none !important;
          
          --vis-primary-color: var(--primary);
          --vis-secondary-color: 160 81% 40%;
          --vis-text-color: var(--muted-foreground);
          
          --sidebar-background: 0 0% 98%;
          --sidebar-foreground: 240 5.3% 26.1%;
          --sidebar-primary: 240 5.9% 10%;
          --sidebar-primary-foreground: 0 0% 98%;
          --sidebar-accent: 240 4.8% 95.9%;
          --sidebar-accent-foreground: 240 5.9% 10%;
          --sidebar-border: 220 13% 91%;
          --sidebar-ring: 217.2 91.2% 59.8%;
        }
        
        .dark {
          --sidebar-background: 240 5.9% 10%;
          --sidebar-foreground: 240 4.8% 95.9%;
          --sidebar-primary: 224.3 76.3% 48%;
          --sidebar-primary-foreground: 0 0% 100%;
          --sidebar-accent: 240 3.7% 15.9%;
          --sidebar-accent-foreground: 240 4.8% 95.9%;
          --sidebar-border: 240 3.7% 15.9%;
          --sidebar-ring: 217.2 91.2% 59.8%;
        }
      `,
    },
  ],
})
