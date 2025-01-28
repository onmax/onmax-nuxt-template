<script setup lang="ts">
const stepsBasic = [{
  step: 1,
  title: 'Address',
  description: 'Add your address here',
  icon: 'i-lucide-book-user',
}, {
  step: 2,
  title: 'Shipping',
  description: 'Set your preferred shipping method',
  icon: 'i-lucide-truck',
}, {
  step: 3,
  title: 'Payment',
  description: 'Add any payment information you have',
  icon: 'i-lucide-credit-card',
}, {
  step: 4,
  title: 'Checkout',
  description: 'Confirm your order',
  icon: 'i-lucide-check',
}]

const steps = [
  {
    step: 1,
    title: 'Your details',
    description: 'Provide your name and email',
  },
  {
    step: 2,
    title: 'Company details',
    description: 'A few details about your company',
  },
  {
    step: 3,
    title: 'Invite your team',
    description: 'Start collaborating with your team',
  },
]
</script>

<template>
  <div class="flex flex-col gap-16">
    <div class="grid gap-8">
      <div>
        <h2 class="font-bold tracking-tight f-text-xl">
          Stepper
        </h2>
        <p class="text-muted-foreground">
          A set of steps that are used to indicate progress through a multi-step process.
        </p>
      </div>
      <div class="flex gap-8">
        <Button size="xs" variant="outline" class="f-text-2xs" as-child>
          <NuxtLink
            to="https://www.shadcn-vue.com/docs/components/stepper"
            external
            target="_blank"
          >
            <span class="i-radix-icons-code mr-8" />
            Component Source
          </NuxtLink>
        </Button>
        <Button size="xs" variant="outline" class="f-text-2xs" as-child>
          <NuxtLink
            to="https://www.radix-vue.com/components/stepper"
            external
            target="_blank"
          >
            Primitive API Reference
          </NuxtLink>
        </Button>
      </div>
    </div>
    <div class="grid gap-16 md:grid-cols-2">
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Basic</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="min-h-400px w-full flex items-center justify-center gap-16 md:min-h-800px">
            <Stepper>
              <StepperItem
                v-for="item in stepsBasic"
                :key="item.step"
                class="basis-1/4"
                :step="item.step"
              >
                <StepperTrigger>
                  <StepperIndicator>
                    <Icon :name="item.icon" size-16 class="" />
                  </StepperIndicator>
                  <div class="flex flex-col">
                    <StepperTitle>
                      {{ item.title }}
                    </StepperTitle>
                    <StepperDescription>
                      {{ item.description }}
                    </StepperDescription>
                  </div>
                </StepperTrigger>
                <StepperSeparator
                  v-if="item.step !== stepsBasic[stepsBasic.length - 1].step"
                  class="h-px w-full"
                />
              </StepperItem>
            </Stepper>
          </div>
        </CardContent>
      </Card>
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Horizontal</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="min-h-400px w-full flex items-center justify-center gap-16 md:min-h-800px">
            <Stepper class="w-full flex items-start gap-8">
              <StepperItem
                v-for="step in steps"
                :key="step.step"
                v-slot="{ state }"
                class="relative w-full flex flex-col items-center justify-center"
                :step="step.step"
              >
                <StepperSeparator
                  v-if="step.step !== steps[steps.length - 1].step"
                  class="absolute left-[calc(50%+20px)] right-[calc(-50%+10px)] top-20 block h-2 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary"
                />

                <StepperTrigger as-child>
                  <Button
                    :variant="state === 'completed' || state === 'active' ? 'default' : 'outline'"
                    size="icon"
                    class="z-10 shrink-0 rounded-full"
                    :class="[state === 'active' && 'ring-2 ring-ring ring-offset-2 ring-offset-background']"
                  >
                    <Icon v-if="state === 'completed'" name="i-lucide-check" class="size-20" />
                    <Icon v-if="state === 'active'" name="i-lucide-circle" />
                    <Icon v-if="state === 'inactive'" name="i-lucide-dot" />
                  </Button>
                </StepperTrigger>

                <div class="mt-20 flex flex-col items-center text-center">
                  <StepperTitle
                    :class="[state === 'active' && 'text-primary']"
                    class="font-semibold transition f-text-xs lg:text-base"
                  >
                    {{ step.title }}
                  </StepperTitle>
                  <StepperDescription
                    :class="[state === 'active' && 'text-primary']"
                    class="sr-only text-muted-foreground transition f-text-2xs lg:f-text-xs md:not-sr-only"
                  >
                    {{ step.description }}
                  </StepperDescription>
                </div>
              </StepperItem>
            </Stepper>
          </div>
        </CardContent>
      </Card>
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Vertical</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="min-h-400px w-full flex items-center justify-center gap-16 md:min-h-800px">
            <Stepper orientation="vertical" class="mx-auto max-w-448 w-full flex flex-col justify-start gap-40">
              <StepperItem
                v-for="step in steps"
                :key="step.step"
                v-slot="{ state }"
                class="relative w-full flex items-start gap-24"
                :step="step.step"
              >
                <StepperSeparator
                  v-if="step.step !== steps[steps.length - 1].step"
                  class="absolute left-18 top-38 block h-[105%] w-2 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary"
                />

                <StepperTrigger as-child>
                  <Button
                    :variant="state === 'completed' || state === 'active' ? 'default' : 'outline'"
                    size="icon"
                    class="z-10 shrink-0 rounded-full"
                    :class="[state === 'active' && 'ring-2 ring-ring ring-offset-2 ring-offset-background']"
                  >
                    <Icon v-if="state === 'completed'" name="i-lucide-check" class="size-20" />
                    <Icon v-if="state === 'active'" name="i-lucide-circle" />
                    <Icon v-if="state === 'inactive'" name="i-lucide-dot" />
                  </Button>
                </StepperTrigger>

                <div class="flex flex-col gap-4">
                  <StepperTitle
                    :class="[state === 'active' && 'text-primary']"
                    class="font-semibold transition f-text-xs lg:text-base"
                  >
                    {{ step.title }}
                  </StepperTitle>
                  <StepperDescription
                    :class="[state === 'active' && 'text-primary']"
                    class="sr-only text-muted-foreground transition f-text-2xs lg:f-text-xs md:not-sr-only"
                  >
                    {{ step.description }}
                  </StepperDescription>
                </div>
              </StepperItem>
            </Stepper>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
