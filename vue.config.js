const path = require('path')

function resolve(url) {
  return path.join(__dirname, url)
}
const port = 3000
const title = 'fruit-vue-pro'

module.exports = {
  devServer: {
    port
  },
  configureWebpack: {
    name: title
  },
  chainWebpack(config) {
    // 排除自带svg处理
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icon'))
      .end()
    // 新增svg-sprite-loader处理
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icon'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' })
      .end()
  }
}
