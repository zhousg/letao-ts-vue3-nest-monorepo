import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    Vue(),
  ],
  resolve: {
    alias: {
      '@letao/utils': resolve(__dirname, '../../libs/utils/index.ts'),
      '@letao/types': resolve(__dirname, '../../libs/types/index.ts'),
    },
  },
})
