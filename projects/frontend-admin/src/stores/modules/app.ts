import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('le-admin-app', () => {
  // 主题设置
  const def = {
    dark: false,
    themeColor: '',
  }
  const settings = ref<typeof def>({ ...def })
  const setSettingsProperty = (property: keyof typeof def, value: boolean | string) => {
    settings.value[property] = value as never
  }
  const resetSettings = () => {
    settings.value = { ...def }
  }

  // 语言设置
  const lang = ref('en')
  const setLang = (locale: string) => {
    lang.value = locale
  }

  return { settings, setSettingsProperty, resetSettings, lang, setLang }
}, {
  persist: true,
})
