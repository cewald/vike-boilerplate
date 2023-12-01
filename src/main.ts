import '@/assets/main.scss'

import { createSSRApp, defineComponent, h } from 'vue'
import { createPinia } from 'pinia'
import { createHead, CapoPlugin } from 'unhead'
import App from '@/App.vue'

import { setPageContext } from '@/composables/usePageContext'
import type { Component, PageContext, PageProps } from '@/renderer/types'

export function createApp(Page: Component, pageProps: PageProps | undefined, pageContext: PageContext) {
  const PageComponent = defineComponent({
    render: () => h(
      App, {}, { default: () => h(Page, pageProps) }
    )
  })

  const app = createSSRApp(PageComponent)
  app.use(createPinia())

  const head = createHead()
  head.use(CapoPlugin({}))

  // Make pageContext available from any Vue component
  setPageContext(app, pageContext)

  return { app, head }
}
