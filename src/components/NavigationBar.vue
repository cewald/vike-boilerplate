<script setup lang="ts">
import { urls as contentUrls } from '@/pages/content/index.page.route'
import VikeLink from '@/components/VikeLink.vue'
</script>

<template>
  <nav>
        <VikeLink href="/">
          Index
        </VikeLink>
        <span>|</span>
        <VikeLink href="/about">
          About
        </VikeLink>
        <template
          v-for="(href) in contentUrls"
          :key="href"
        >
          <span>|</span>
          <VikeLink :href="'/content/' + href">
            {{ href }}
          </VikeLink>
        </template>
      </nav>
</template>