import enLocale from 'element-ui/lib/locale/lang/en'

const components = {
  elementLang: enLocale
}
const locale = {
  test: 'test',
  // 侧边配置栏
  'drawer.title': 'Setting',
  'drawer.themeMode': 'Menu Theme Mode',
  'drawer.themeColor': 'Theme Color',
  // 侧边菜单
  'menu.dashboard': 'Dashboard',
  'menu.dashboard.index': 'Data Center',
  'menu.personal': 'Personal',
  'menu.personal.index': 'Personal Center'
}

export default {
  ...components,
  ...locale
}
