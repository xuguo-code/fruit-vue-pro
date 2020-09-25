import zhCNLocale from 'element-ui/lib/locale/lang/zh-CN'

const components = {
  elementLang: zhCNLocale
}

// 动态载入分散的 lang 配置
const langs = require.context('../../views', true, /zh-CN\.js$/)
const locales = langs
  .keys()
  .map(l => langs(l).default)
  .reduce((memo, lang) => ({ ...memo, ...lang }), {})

const locale = {
  test: '测试',
  // 侧边配置栏
  'drawer.title': '配置',
  'drawer.themeMode': '菜单栏模式',
  'drawer.themeColor': '主题色',
  'drawer.isTab': 'Tab模式',
  ...locales
}

export default {
  ...components,
  ...locale
}
