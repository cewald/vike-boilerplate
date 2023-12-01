import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vike from 'vike/plugin'
import svgLoader from 'vite-svg-loader'
import UnheadVite from '@unhead/addons/vite'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      vue(),
      vueJsx(),
      svgLoader(),
      UnheadVite(),
      vike({
        prerender: true
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      port: 3000,
      host: '0.0.0.0'
    },
    preview: {
      port: 3001,
      host: '0.0.0.0'
    }
  }
})
