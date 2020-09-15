let directives = require.context('./', false, /\.js$/)

export default {
  install(Vue) {
    directives
      .keys()
      .map(directives)
      .forEach(({ default: directives }) => {
        Vue.directive(directives.name, directives)
      })
  }
}
