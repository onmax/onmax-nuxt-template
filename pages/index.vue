<script setup lang="ts">
import { Activity, ArrowUpRight, CreditCard, DollarSign, Users } from 'lucide-vue-next'
</script>

<template>
  <div class="w-full flex flex-col gap-16">
    <div class="flex flex-wrap items-center justify-between gap-8">
      <h2 class="f-text-xl font-bold tracking-tight">
        Dashboard
      </h2>
      <div class="flex items-center space-x-8">
        <BaseDateRangePicker />
        <Button>Download</Button>
      </div>
    </div>
    <main class="flex flex-1 flex-col gap-16 md:gap-32">
      <div class="grid gap-16 lg:grid-cols-4 md:grid-cols-2 md:gap-32">
        <Card>
          <CardHeader class="flex flex-row items-center justify-between pb-8 space-y-0">
            <CardTitle class="f-text-xs font-medium">
              Total Revenue
            </CardTitle>
            <DollarSign class="h-16 w-16 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div class="f-text-xl font-bold">
              $45,231.89
            </div>
            <p class="f-text-2xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader class="flex flex-row items-center justify-between pb-8 space-y-0">
            <CardTitle class="f-text-xs font-medium">
              Subscriptions
            </CardTitle>
            <Users class="h-16 w-16 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div class="f-text-xl font-bold">
              +2350
            </div>
            <p class="f-text-2xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader class="flex flex-row items-center justify-between pb-8 space-y-0">
            <CardTitle class="f-text-xs font-medium">
              Sales
            </CardTitle>
            <CreditCard class="h-16 w-16 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div class="f-text-xl font-bold">
              +12,234
            </div>
            <p class="f-text-2xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader class="flex flex-row items-center justify-between pb-8 space-y-0">
            <CardTitle class="f-text-xs font-medium">
              Active Now
            </CardTitle>
            <Activity class="h-16 w-16 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div class="f-text-xl font-bold">
              +573
            </div>
            <p class="f-text-2xs text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>
      <div class="grid gap-16 lg:grid-cols-2 xl:grid-cols-3 md:gap-32">
        <Card class="xl:col-span-2">
          <CardHeader class="flex flex-row items-center">
            <div class="grid gap-8">
              <CardTitle>Transactions</CardTitle>
              <CardDescription>
                Recent transactions from your store.
              </CardDescription>
            </div>
            <Button as-child size="sm" class="ml-auto gap-4">
              <a href="#">
                View All
                <ArrowUpRight class="h-16 w-16" />
              </a>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead class="hidden xl:table-column">
                    Type
                  </TableHead>
                  <TableHead class="hidden xl:table-column">
                    Status
                  </TableHead>
                  <TableHead class="hidden xl:table-column">
                    Date
                  </TableHead>
                  <TableHead class="text-right">
                    Amount
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div class="font-medium">
                      Liam Johnson
                    </div>
                    <div class="hidden f-text-xs text-muted-foreground md:inline">
                      liam@example.com
                    </div>
                  </TableCell>
                  <TableCell class="hidden xl:table-column">
                    Sale
                  </TableCell>
                  <TableCell class="hidden xl:table-column">
                    <Badge class="f-text-2xs" variant="outline">
                      Approved
                    </Badge>
                  </TableCell>
                  <TableCell class="hidden lg:hidden md:table-cell xl:table-column">
                    2023-06-23
                  </TableCell>
                  <TableCell class="text-right">
                    $250.00
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div class="font-medium">
                      Olivia Smith
                    </div>
                    <div class="hidden f-text-xs text-muted-foreground md:inline">
                      olivia@example.com
                    </div>
                  </TableCell>
                  <TableCell class="hidden xl:table-column">
                    Refund
                  </TableCell>
                  <TableCell class="hidden xl:table-column">
                    <Badge class="f-text-2xs" variant="outline">
                      Declined
                    </Badge>
                  </TableCell>
                  <TableCell class="hidden lg:hidden md:table-cell xl:table-column">
                    2023-06-24
                  </TableCell>
                  <TableCell class="text-right">
                    $150.00
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div class="font-medium">
                      Noah Williams
                    </div>
                    <div class="hidden f-text-xs text-muted-foreground md:inline">
                      noah@example.com
                    </div>
                  </TableCell>
                  <TableCell class="hidden xl:table-column">
                    Subscription
                  </TableCell>
                  <TableCell class="hidden xl:table-column">
                    <Badge class="f-text-2xs" variant="outline">
                      Approved
                    </Badge>
                  </TableCell>
                  <TableCell class="hidden lg:hidden md:table-cell xl:table-column">
                    2023-06-25
                  </TableCell>
                  <TableCell class="text-right">
                    $350.00
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div class="font-medium">
                      Emma Brown
                    </div>
                    <div class="hidden f-text-xs text-muted-foreground md:inline">
                      emma@example.com
                    </div>
                  </TableCell>
                  <TableCell class="hidden xl:table-column">
                    Sale
                  </TableCell>
                  <TableCell class="hidden xl:table-column">
                    <Badge class="f-text-2xs" variant="outline">
                      Approved
                    </Badge>
                  </TableCell>
                  <TableCell class="hidden lg:hidden md:table-cell xl:table-column">
                    2023-06-26
                  </TableCell>
                  <TableCell class="text-right">
                    $450.00
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div class="font-medium">
                      Liam Johnson
                    </div>
                    <div class="hidden f-text-xs text-muted-foreground md:inline">
                      liam@example.com
                    </div>
                  </TableCell>
                  <TableCell class="hidden xl:table-column">
                    Sale
                  </TableCell>
                  <TableCell class="hidden xl:table-column">
                    <Badge class="f-text-2xs" variant="outline">
                      Approved
                    </Badge>
                  </TableCell>
                  <TableCell class="hidden lg:hidden md:table-cell xl:table-column">
                    2023-06-27
                  </TableCell>
                  <TableCell class="text-right">
                    $550.00
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent class="grid gap-32">
            <div class="flex items-center gap-16">
              <Avatar class="hidden h-36 w-36 sm:flex">
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div class="grid gap-4">
                <p class="f-text-xs font-medium leading-none">
                  Olivia Martin
                </p>
                <p class="f-text-xs text-muted-foreground">
                  olivia.martin@email.com
                </p>
              </div>
              <div class="ml-auto font-medium">
                +$1,999.00
              </div>
            </div>
            <div class="flex items-center gap-16">
              <Avatar class="hidden h-36 w-36 sm:flex">
                <AvatarFallback>JL</AvatarFallback>
              </Avatar>
              <div class="grid gap-4">
                <p class="f-text-xs font-medium leading-none">
                  Jackson Lee
                </p>
                <p class="f-text-xs text-muted-foreground">
                  jackson.lee@email.com
                </p>
              </div>
              <div class="ml-auto font-medium">
                +$39.00
              </div>
            </div>
            <div class="flex items-center gap-16">
              <Avatar class="hidden h-36 w-36 sm:flex">
                <AvatarFallback>IN</AvatarFallback>
              </Avatar>
              <div class="grid gap-4">
                <p class="f-text-xs font-medium leading-none">
                  Isabella Nguyen
                </p>
                <p class="f-text-xs text-muted-foreground">
                  isabella.nguyen@email.com
                </p>
              </div>
              <div class="ml-auto font-medium">
                +$299.00
              </div>
            </div>
            <div class="flex items-center gap-16">
              <Avatar class="hidden h-36 w-36 sm:flex">
                <AvatarFallback>WK</AvatarFallback>
              </Avatar>
              <div class="grid gap-4">
                <p class="f-text-xs font-medium leading-none">
                  William Kim
                </p>
                <p class="f-text-xs text-muted-foreground">
                  will@email.com
                </p>
              </div>
              <div class="ml-auto font-medium">
                +$99.00
              </div>
            </div>
            <div class="flex items-center gap-16">
              <Avatar class="hidden h-36 w-36 sm:flex">
                <AvatarFallback>SD</AvatarFallback>
              </Avatar>
              <div class="grid gap-4">
                <p class="f-text-xs font-medium leading-none">
                  Sofia Davis
                </p>
                <p class="f-text-xs text-muted-foreground">
                  sofia.davis@email.com
                </p>
              </div>
              <div class="ml-auto font-medium">
                +$39.00
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  </div>
</template>
