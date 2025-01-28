<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { h } from 'vue'
import * as z from 'zod'
import { buttonVariants } from '~/components/ui/button'
import { toast } from '~/components/ui/toast'

const appearanceFormSchema = toTypedSchema(z.object({
  theme: z.enum(['light', 'dark'], {
    required_error: 'Please select a theme.',
  }),
  font: z.enum(['inter', 'manrope', 'system'], {
    invalid_type_error: 'Select a font',
    required_error: 'Please select a font.',
  }),
}))

const { handleSubmit } = useForm({
  validationSchema: appearanceFormSchema,
  initialValues: {
    theme: 'light',
    font: 'inter',
  },
})

const color = useColorMode()

const onSubmit = handleSubmit((values) => {
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-8 w-340 f-rounded-xs bg-slate-950 p-16' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  })
  if (values.theme === 'dark') {
    color.preference = 'dark'
  }
  else {
    color.preference = 'light'
  }
})
</script>

<template>
  <div>
    <h3 class="font-medium f-text-md">
      Appearance
    </h3>
    <p class="text-muted-foreground f-text-xs">
      Customize the appearance of the app. Automatically switch between day and night themes.
    </p>
  </div>
  <Separator />
  <form class="space-y-422" @submit.prevent="onSubmit">
    <FormField v-slot="{ field }" name="font">
      <FormItem>
        <FormLabel>Font</FormLabel>
        <div class="relative w-200">
          <FormControl>
            <select
              :class="cn(
                buttonVariants({ variant: 'outline' }),
                'w-200 appearance-none font-normal',
              )"
              v-bind="field"
            >
              <option value="inter">
                Inter
              </option>
              <option value="manrope">
                Manrope
              </option>
              <option value="system">
                System
              </option>
            </select>
          </FormControl>
          <Icon name="i-radix-icons-chevron-down" class="pointer-events-none absolute right-12 top-10 h-16 w-16 opacity-50" />
        </div>
        <FormDescription>
          Set the font you want to use in the dashboard.
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" type="radio" name="theme">
      <FormItem class="space-y-4">
        <FormLabel>Theme</FormLabel>
        <FormDescription>
          Select the theme for the dashboard.
        </FormDescription>
        <FormMessage />

        <RadioGroup
          class="grid grid-cols-2 max-w-448 gap-32 pt-8"
          v-bind="componentField"
        >
          <FormItem>
            <FormLabel class="[&:has([data-state=checked])>div]:border-primary">
              <FormControl>
                <RadioGroupItem value="light" class="sr-only" />
              </FormControl>
              <div class="items-center border-2 border-muted p-4 f-rounded-xs hover:border-accent">
                <div class="bg-[#ecedef] p-8 f-rounded-xs space-y-8">
                  <div class="bg-white p-8 shadow-sm f-rounded-xs space-y-8">
                    <div class="h-8 w-80 bg-[#ecedef] f-rounded-xs" />
                    <div class="h-8 w-100 bg-[#ecedef] f-rounded-xs" />
                  </div>
                  <div class="flex items-center bg-white p-8 shadow-sm f-rounded-xs space-x-8">
                    <div size-16 class="rounded-full bg-[#ecedef]" />
                    <div class="h-8 w-100 bg-[#ecedef] f-rounded-xs" />
                  </div>
                  <div class="flex items-center bg-white p-8 shadow-sm f-rounded-xs space-x-8">
                    <div size-16 class="rounded-full bg-[#ecedef]" />
                    <div class="h-8 w-100 bg-[#ecedef] f-rounded-xs" />
                  </div>
                </div>
              </div>
              <span class="block w-full p-8 text-center font-normal">
                Light
              </span>
            </FormLabel>
          </FormItem>
          <FormItem>
            <FormLabel class="[&:has([data-state=checked])>div]:border-primary">
              <FormControl>
                <RadioGroupItem value="dark" class="sr-only" />
              </FormControl>
              <div class="items-center border-2 border-muted bg-popover p-4 f-rounded-xs hover:bg-accent hover:text-accent-foreground">
                <div class="bg-slate-950 p-8 f-rounded-xs space-y-8">
                  <div class="bg-slate-800 p-8 shadow-sm f-rounded-xs space-y-8">
                    <div class="h-8 w-80 bg-slate-400 f-rounded-xs" />
                    <div class="h-8 w-100 bg-slate-400 f-rounded-xs" />
                  </div>
                  <div class="flex items-center bg-slate-800 p-8 shadow-sm f-rounded-xs space-x-8">
                    <div size-16 class="rounded-full bg-slate-400" />
                    <div class="h-8 w-100 bg-slate-400 f-rounded-xs" />
                  </div>
                  <div class="flex items-center bg-slate-800 p-8 shadow-sm f-rounded-xs space-x-8">
                    <div size-16 class="rounded-full bg-slate-400" />
                    <div class="h-8 w-100 bg-slate-400 f-rounded-xs" />
                  </div>
                </div>
              </div>
              <span class="block w-full p-8 text-center font-normal">
                Dark
              </span>
            </FormLabel>
          </FormItem>
        </RadioGroup>
      </FormItem>
    </FormField>

    <div class="flex justify-start">
      <Button type="submit">
        Update preferences
      </Button>
    </div>
  </form>
</template>
