import Vue from 'vue'
import VueI18n from 'vue-i18n'
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
      loadedLanguages.push(lang)
      return setI18nLang(lang)
    })
  }
  return setI18nLang(lang)
}

export default i18n
