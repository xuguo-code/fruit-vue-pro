import enLocale from 'element-ui/lib/locale/lang/en'

const components = {
  elementLang: enLocale
}

// 动态载入分散的 lang 配置
const langs = require.context('../../views', true, /en-US\.js$/)
const locales = langs
  .keys()
  .map(l => langs(l).default)
  .reduce((memo, lang) => ({ ...memo, ...lang }), {})

const locale = {
  test: 'test',
  // 侧边配置栏
  'drawer.title': 'Setting',
  'drawer.themeMode': 'Menu Theme Mode',
  'drawer.themeColor': 'Theme Color',
  'drawer.isTab': 'Tab Mode',
  ...locales
}

export default {
  ...components,
  ...locale
}
