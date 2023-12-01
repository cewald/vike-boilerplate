import type { ComponentPublicInstance } from 'vue'
import type { PageContextServer, PageContext } from 'vike/types'
import type { Unhead } from '@unhead/schema'

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

export type {
  PageContextServer,
  PageContextClient,
  PageContext,
} from 'vike/types'

export type PageContextWithRouteParams<T = Record<string, string>> = PageContextServer & {
  routeParams: Record<string, string> & T
} | PageContext

// eslint-disable-next-line max-len
/** @src https://stackoverflow.com/questions/63985658/how-to-type-vue-instance-out-of-definecomponent-in-vue-3/63986086#63986086 */
export type Component<T = { Page: any, pageProps: PageProps }> = ComponentPublicInstance<T>
export type Page = Component
export type PageProps = {
  head: Unhead
} | {}
