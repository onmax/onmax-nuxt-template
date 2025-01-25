<script setup lang="ts">
import { accounts, mails } from '@/components/mail/data/mails'
</script>

<template>
  <div class="-m-16 lg:-m-24">
    <MailLayout
      :accounts="accounts"
      :mails="mails"
      :nav-collapsed-size="4"
    />
  </div>
</template>
