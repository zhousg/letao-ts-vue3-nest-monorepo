import { createI18n as _createI18n } from 'vue-i18n'

import en from './en.json'
import zh from './zh.json'
import { useAppStore } from '@/stores'

export function createI18n() {
  const appStore = useAppStore()
  return _createI18n({
    legacy: false,
    globalInjection: true,
    locale: appStore.lang,
    fallbackLocale: 'zh',
    messages: { en, zh },
  })
}
