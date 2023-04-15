/// <reference types="vite/client" />

declare module '*.json'

declare module 'element-plus/dist/locale/en.mjs'

declare module 'element-plus/dist/locale/zh-cn.mjs'

interface Window {
  _AMapSecurityConfig: {
    securityJsCode: string
  }
}
