<script lang="ts" setup>
import { useAttrs, computed } from 'vue'
import { usePageContext } from '@/composables/usePageContext'

const pageContext = usePageContext()
const { href } = useAttrs()

const isActive = computed(() => {
  const { urlPathname: path } = pageContext
  return href === '/' ? path === href : path.startsWith(href as string)
})
</script>

<template>
  <a
    class="hover:underline"
    :class="{ 'font-bold': isActive }"
  >
    <slot />
  </a>
</template>
