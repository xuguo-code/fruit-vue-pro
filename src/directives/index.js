let directives = require.context('./', false, /\.js$/)

export default {
  install(Vue) {
    directives
      .keys()
      .map(directives)
      .forEach(({ default: directive }) => {
        Vue.directive(directive.name, directive)
      })
  }
}
