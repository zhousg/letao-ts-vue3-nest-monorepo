import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { LeUser } from '@letao/shared'

export const useUserStore = defineStore(
  'le-admin-user',
  () => {
    const user = ref<LeUser>()
    return { user }
  },
  {
    persist: true,
  }
)
