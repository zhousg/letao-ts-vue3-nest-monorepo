import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig(({ command }) => ({
  server: {
    proxy: {
      '/mock': {
        target: '/',
        changeOrigin: true,
        rewrite: (path) => {
          console.log(path)
          return path.replace(/^\/mock/, '')
        },
      },
    },
  },
  plugins: [
    Vue(),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: false })],
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(__dirname, 'src/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
    viteMockServe({
      mockPath: 'src/mock',
      localEnabled: command === 'serve',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
    },
  },
}))
