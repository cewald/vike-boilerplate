<script setup lang="ts">
import { useHead } from 'unhead'
import Hello from '@/components/HelloWorld.vue'

useHead({
  title: 'About'
})
</script>

<template>
  <Hello msg="About" />
</template>
