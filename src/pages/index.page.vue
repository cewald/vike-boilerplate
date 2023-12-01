<script setup lang="ts">
import { useHead } from 'unhead'
import Hello from '@/components/HelloWorld.vue'

useHead({
  title: 'Home'
})
</script>

<template>
  <Hello msg="Home" />
</template>
