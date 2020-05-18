let state = {
  routes: [],
  theme: 'light',
  menuIsCollapse: false,
  locale: 'zhCN'
}

let mutations = {
  setRoutes(state, r) {
    return (state.routes = r)
  },
  setMenuCollapse(state) {
    return (state.menuIsCollapse = !state.menuIsCollapse)
  },
  setLocale(state, lang) {
    return (state.locale = lang)
  }
}

let actions = {}

let getters = {
  routes: state => state.routes,
  theme: state => state.theme,
  menuIsCollapse: state => state.menuIsCollapse,
  locale: state => state.locale
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
