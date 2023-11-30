<script setup lang="ts">
import { navigate } from 'vike/client/router'

defineProps<{
  href: string
}>()
</script>

<template>
  <a
    :href="href"
    @click.prevent="navigate(href)"
  >
    <slot />
  </a>
</template>
