<script setup lang="ts">
import { usePageContext } from '@/composables/usePageContext'
import Hello from '@/components/HelloWorld.vue'

const { routeParams, urlPathname } = usePageContext()
</script>

<template>
  <Hello msg="Content" />
  <div>
    <div>{{ routeParams?.name || null }} | {{ urlPathname || null }}</div>
  </div>
</template>
