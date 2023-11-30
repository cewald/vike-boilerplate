<script setup lang="ts">
import { usePageContext } from '@/composables/usePageContext'
import Hello from '@/components/HelloWorld.vue'

const { routeParams, urlPathname } = usePageContext<{ name: string }>()
</script>

<template>
  <Hello msg="Content" />
  <div>
    <div>{{ routeParams?.name }} | {{ urlPathname }}</div>
  </div>
</template>
