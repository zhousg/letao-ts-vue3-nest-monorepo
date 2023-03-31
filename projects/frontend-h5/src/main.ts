import { createApp } from 'vue'
import { add } from '@letao/utils'
import App from './App.vue'

add(100, 200)
createApp(App).mount('#app')
