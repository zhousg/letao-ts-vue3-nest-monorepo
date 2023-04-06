import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { createI18n } from '@/locales'
import pinia from '@/stores'

import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/dist/index.css'
import '@/styles/main.scss'

import 'virtual:svg-icons-register'

createApp(App).use(pinia).use(createI18n()).use(router).mount('#app')
