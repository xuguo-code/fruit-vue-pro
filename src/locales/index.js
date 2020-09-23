import storage from 'store'
import { APP_LANG } from '@/core/buildKey'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementLocale from 'element-ui/lib/locale'
import zhCN from './lang/zh-CN'

export const defaultLang = 'zh-CN'

Vue.use(VueI18n)

const messages = {
  'zh-CN': {
    ...zhCN
  }
}

const loadedLanguages = [defaultLang]

const i18n = new VueI18n({
  locale: defaultLang,
  messages
})

function setI18nLang(lang) {
  i18n.locale = lang
  return lang
}

export function loadLangAsync(lang) {
  if (!loadedLanguages.includes(lang)) {
    return import(/* webpackChunkName: "load-lang" */ `./lang/${lang}.js`).then(lang => {
      const locale = lang.default
      i18n.setLocaleMessage(lang, locale)
      elementLocale.use(locale.elementLang)
      loadedLanguages.push(lang)
      storage.set(APP_LANG, lang)
      return setI18nLang(lang)
    })
  }
  return setI18nLang(lang)
}

export default i18n
