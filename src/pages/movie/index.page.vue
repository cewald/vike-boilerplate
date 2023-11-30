<script setup lang="ts">
import { usePageContext } from '@/renderer/usePageContext'
import Hello from '@/components/HelloWorld.vue'

const { routeParams, urlPathname } = usePageContext()
</script>

<template>
  <Hello msg="Movie" />
  <div>
    <div>{{ routeParams?.movieId || null }} | {{ urlPathname || null }}</div>
  </div>
</template>
