export { render }

import { createApp } from '@/main'
import type { PageContextClient } from '@/renderer/types'

// This render() hook only supports SSR, see https://vike.dev/render-modes for how to modify render() to support SPA
async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext
  if (!Page) throw new Error('Client-side render() hook expects pageContext.Page to be defined')
  const { app } = createApp(Page, pageProps, pageContext)
  app.mount('#app')
}

export const clientRouting = true
