<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import TheWelcome from '@/components/TheWelcome.vue'
import VikeLink from '@/components/VikeLink.vue'
import Logo from '@/assets/logo.svg'
import { urls as contentUrls } from '@/pages/content/index.page.route'
</script>

<template>
  <header>
    <Logo
      class="logo max-w-[125px]"
    />
    <div class="wrapper">
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
      <slot>
        <HelloWorld msg="Fallback" />
      </slot>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped lang="scss">
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
@/pages/content/index.page.route