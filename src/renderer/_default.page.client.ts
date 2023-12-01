export { render }

import { createApp } from '@/main'
import type { PageContextClient } from '@/renderer/types'

let appInstance: ReturnType<typeof createApp>
async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext
  if (!appInstance) {
    appInstance = createApp(pageContext)
    appInstance.app.mount('#app')
  } else {
    appInstance.app.changePage(pageContext)
  }
}

export const clientRouting = true
