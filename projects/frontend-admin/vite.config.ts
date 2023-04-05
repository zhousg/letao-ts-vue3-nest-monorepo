import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    Vue(),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: false })],
    }),
  ],
  resolve: {
    alias: {
      '@letao/utils': resolve(__dirname, '../../libs/utils/index.ts'),
      '@letao/types': resolve(__dirname, '../../libs/types/index.ts'),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

})
