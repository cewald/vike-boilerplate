import { urls } from './index.page.route'

async function prerender() {
  return urls
    .map(t => '/movie/' + t)
}

export { prerender }
