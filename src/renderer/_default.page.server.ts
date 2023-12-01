import type { App } from 'vue'
import { renderToString as renderToString_ } from '@vue/server-renderer'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import { renderSSRHead } from '@unhead/ssr'

import { createApp } from '@/main'
import { type PageContextServer } from '@/renderer/types'

async function render(pageContext: PageContextServer): Promise<any> {
  const { Page } = pageContext
  if (!Page) throw new Error('My render() hook expects pageContext.Page to be defined')
  const { app, head } = createApp(pageContext)

  const appHtml = await renderToString(app)

  const payload = await renderSSRHead(head)
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html${dangerouslySkipEscape(payload.htmlAttrs)}>
      <head>
        ${dangerouslySkipEscape(payload.headTags)}
      </head>
      <body${dangerouslySkipEscape(payload.bodyAttrs)}>
        ${dangerouslySkipEscape(payload.bodyTagsOpen)}
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
        ${dangerouslySkipEscape(payload.bodyTags)}
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {}
  }
}

async function renderToString(app: App) {
  let err: unknown
  // Workaround: renderToString_() swallows errors in production, see https://github.com/vuejs/core/issues/7876
  app.config.errorHandler = err_ => {
    err = err_
  }
  const appHtml = await renderToString_(app)
  if (err) throw err
  return appHtml
}

// See https://vike.dev/data-fetching
const passToClient = ['pageProps', 'routeParams']

export { render, passToClient }
