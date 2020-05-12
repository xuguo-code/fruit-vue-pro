let comps = require.context('./', false, /\.vue$/)

export default {
  install(Vue) {
    comps
      .keys()
      .map(comps)
      .forEach(({ default: comp }) => {
        Vue.component(comp.name, comp)
      })
  }
}
