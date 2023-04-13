import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const persist = createPersistedState()
const pinia = createPinia().use(persist)

export default pinia

export * from './modules/app'
export * from './modules/user'
