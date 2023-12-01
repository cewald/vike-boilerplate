<script setup lang="ts">
import { useHead } from 'unhead'

import HelloWorld from '@/components/HelloWorld.vue'
import TheWelcome from '@/components/TheWelcome.vue'
import NavigationBar from '@/components/NavigationBar.vue'
import Logo from '@/assets/logo.svg'

useHead({
  titleTemplate: '%s %separator %siteName',
  templateParams: { separator: '|', siteName: 'Vue3 SSR App' },
  htmlAttrs: { lang: 'en' },
  link: [
    { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
  ],
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width' },
    { name: 'description', content: 'App using Vue3, Vite + Vike' },
  ],
})
</script>

<template>
  <header>
    <Logo
      class="logo max-w-[125px]"
    />
    <div class="wrapper">
      <NavigationBar />
      <slot>
        <HelloWorld msg="Fallback" />
      </slot>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style lang="scss">
header {
  line-height: 1.5;

  nav{
    margin: 0 0 2rem 0;

    a {
      color: var(--color-text);

      &:hover {
        color: var(--vt-c-indigo);
      }
    }

    span {
      color: var(--color-border);
      margin: 0 1rem;
    }
  }
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (max-width: 1024px) {
  header {
    nav {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
  }
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>