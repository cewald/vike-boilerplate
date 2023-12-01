import { renderToNodeStream } from '@vue/server-renderer'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import { renderSSRHead } from '@unhead/ssr'

import { createApp } from '@/main'
import { type PageContextServer } from '@/renderer/types'

async function render(pageContext: PageContextServer): Promise<any> {
  const { app, head } = createApp(pageContext)
  const stream = renderToNodeStream(app)

  const payload = await renderSSRHead(head)
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html${dangerouslySkipEscape(payload.htmlAttrs)}>
      <head>
        ${dangerouslySkipEscape(payload.headTags)}
      </head>
      <body${dangerouslySkipEscape(payload.bodyAttrs)}>
        ${dangerouslySkipEscape(payload.bodyTagsOpen)}
        <div id="app">${stream}</div>
        ${dangerouslySkipEscape(payload.bodyTags)}
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      enableEagerStreaming: true
    }
  }
}

const passToClient = ['pageProps', 'routeParams']

export { render, passToClient }
