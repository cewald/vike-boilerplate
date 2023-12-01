<script setup lang="ts">
import { toRefs } from 'vue'
import { usePageContext } from '@/composables/usePageContext'
import { useHead } from 'unhead'

import Hello from '@/components/HelloWorld.vue'

const { routeParams, urlPathname } = toRefs(usePageContext<{ name: string }>())

useHead({
  title: `${routeParams?.value?.name} | Content`
})
</script>

<template>
  <Hello msg="Content" />
  <div>
    <div>{{ routeParams?.name }} | {{ urlPathname }}</div>
  </div>
</template>
