import '@/assets/main.scss'

import { createSSRApp, defineComponent, reactive, h, markRaw } from 'vue'
import { createPinia } from 'pinia'
import { createHead, CapoPlugin } from 'unhead'
import App from '@/App.vue'

import { setPageContext } from '@/composables/usePageContext'
import type { Component, PageContext } from '@/renderer/types'

export function createApp(pageContext: PageContext) {
  const { Page } = pageContext

  let rootComponent: Component
  const PageWithWrapper = defineComponent({
    data: () => ({
      Page: markRaw(Page),
      pageProps: markRaw(pageContext.pageProps || {})
    }),
    created() {
      rootComponent = this as any
    },
    render() {
      return h(
        App, {}, { default: () => h(this.Page, this.pageProps) }
      )
    }
  })

  const app = createSSRApp(PageWithWrapper)
  const pageContextReactive = reactive(pageContext)
  
  objectAssign(app, {
    changePage: (pageContext: PageContext) => {
      console.error('changePage', pageContext.urlPathname)
      Object.assign(pageContextReactive, pageContext)
      rootComponent.Page = markRaw(pageContext.Page)
      rootComponent.pageProps = markRaw(pageContext.pageProps || {})
    }
  })

  app.use(createPinia())

  const head = createHead()
  head.use(CapoPlugin({}))

  setPageContext(app, pageContextReactive as any)

  return { app, head }
}

// // Same as `Object.assign()` but with type inference
function objectAssign<Obj extends object, ObjAddendum>(
  obj: Obj,
  objAddendum: ObjAddendum
): asserts obj is Obj & ObjAddendum {
  Object.assign(obj, objAddendum)
}
