// 载入主题
const buildInKeys = ['name', 'key']

const loadTheme = require.context('./colorful', true, /\.js$/)

const themes = loadTheme.keys().map(t => loadTheme(t).default)

// 更新主题方法
function updateTheme(themeKey = 'light') {
  const theme = themes.find(t => t.key === themeKey)
  for (const key in theme) {
    if (buildInKeys.includes(key)) {
      continue
    }
    if (document.body) {
      // 动态设置css variable
      document.body.style.setProperty(key, theme[key])
    }
  }
}

export { themes, updateTheme }
