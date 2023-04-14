import type { LeUser } from '@letao/shared'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('le-admin-user', () => {
  const user = ref<LeUser>()
  return { user }
}, {
  persist: true,
})
