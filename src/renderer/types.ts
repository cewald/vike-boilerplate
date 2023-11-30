import type { ComponentPublicInstance } from 'vue'

export type {
  // When using Client Routing
  // @src https://vike.dev/clientRouting
  PageContextServer,
  PageContextClient,
  PageContext,
  // When using Server Routing
  // PageContextClientWithServerRouting as PageContextClient,
  // PageContextWithServerRouting as PageContext
} from 'vike/types'

// https://vike.dev/pageContext#typescript
declare global {
  namespace Vike {
    interface PageContext {
      Page: Page
      pageProps?: PageProps
      urlPathname: string
      exports: {
        documentProps?: {
          title?: string
          description?: string
        }
      }
    }
  }
}

// eslint-disable-next-line max-len
/** @src https://stackoverflow.com/questions/63985658/how-to-type-vue-instance-out-of-definecomponent-in-vue-3/63986086#63986086 */
export type Component = ComponentPublicInstance
export type Page = Component
export type PageProps = {}
