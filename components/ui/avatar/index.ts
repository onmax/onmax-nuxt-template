import { cva, type VariantProps } from 'class-variance-authority'

export { default as Avatar } from './Avatar.vue'
export { default as AvatarFallback } from './AvatarFallback.vue'
export { default as AvatarImage } from './AvatarImage.vue'

export const avatarVariant = cva(
  'inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-secondary overflow-hidden',
  {
    variants: {
      size: {
        sm: 'h-40 w-40 f-text-2xs',
        base: 'h-64 w-64 f-text-xl',
        lg: 'h-128 w-128 text-5xl',
      },
      shape: {
        circle: 'rounded-full',
        square: 'f-rounded',
      },
    },
  },
)

export type AvatarVariants = VariantProps<typeof avatarVariant>
