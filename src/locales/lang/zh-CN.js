import zhCNLocale from 'element-ui/lib/locale/lang/zh-CN'

const components = {
  elementLang: zhCNLocale
}
const locale = {
  test: '测试',
  // 侧边配置栏
  'drawer.title': '配置',
  'drawer.themeMode': '菜单栏模式',
  'drawer.themeColor': '主题色'
}

export default {
  ...components,
  ...locale
}
