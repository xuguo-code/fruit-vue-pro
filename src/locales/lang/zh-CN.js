import zhCNLocale from 'element-ui/lib/locale/lang/zh-CN'

const components = {
  elementLang: zhCNLocale
}
const locale = {
  test: '测试',
  // 侧边配置栏
  'drawer.title': '配置',
  'drawer.themeMode': '菜单栏模式',
  'drawer.themeColor': '主题色',
  // 侧边菜单
  'menu.dashboard': '仪表盘',
  'menu.dashboard.index': '数据中心',
  'menu.personal': '个人页',
  'menu.personal.index': '个人中心'
}

export default {
  ...components,
  ...locale
}
