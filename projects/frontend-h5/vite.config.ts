import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    Vue(),
    Components({
      dts: false,
      resolvers: [VantResolver({ importStyle: false })],
    }),
  ],
  resolve: {
    alias: {
      '@letao/utils': resolve(__dirname, '../../libs/utils/index.ts'),
      '@letao/types': resolve(__dirname, '../../libs/types/index.ts'),
    },
  },
})
