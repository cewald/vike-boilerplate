// `usePageContext` allows us to access `pageContext` in any Vue component.
// See https://vike.dev/pageContext-anywhere

import { inject } from 'vue'
import type { App, InjectionKey } from 'vue'
import type { PageContext, PageContextWithRouteParams } from '@/renderer/types'

const key: InjectionKey<PageContextWithRouteParams> = Symbol('pageContext')

function usePageContext<T>(): PageContextWithRouteParams<T> {
  const pageContext = inject(key)
  if (!pageContext) throw new Error('setPageContext() not called in parent')
  return pageContext
}

function setPageContext(app: App, pageContext: PageContext) {
  app.provide(key, pageContext)
}

export { usePageContext, setPageContext }
