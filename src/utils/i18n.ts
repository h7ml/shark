import i18n from 'i18next'

import enUS from '@/assets/locales/en-US.json'
import zhCN from '@/assets/locales/zh-CN.json'
import { defaultSetting } from '@/default-setting'

i18n.init({
  resources: {
    en: {
      translation: enUS,
    },
    zh: {
      translation: zhCN,
    },
  },
  lng: defaultSetting.defaultLang || 'zh',
  fallbackLng: defaultSetting.defaultLang || 'zh',
  interpolation: {
    escapeValue: false,
  },
})

export function t(key: string) {
  return i18n.t(key) || key
}

export { i18n }
