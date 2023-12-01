import { createApp } from '@/main'
import type { PageContextClient } from '@/renderer/types'

let appInstance: ReturnType<typeof createApp>
async function render(pageContext: PageContextClient) {
  if (!appInstance) {
    appInstance = createApp(pageContext)
    appInstance.app.mount('#app')
  } else {
    appInstance.app.changePage(pageContext)
  }
}

export { render }
export const clientRouting = true
