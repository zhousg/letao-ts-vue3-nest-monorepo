import { createApp } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from '@/App.vue'
import router from '@/router'

import 'element-plus/dist/index.css'
import '@/styles/main.scss'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue))
  app.component(key, component)

createApp(App).use(router).mount('#app')
