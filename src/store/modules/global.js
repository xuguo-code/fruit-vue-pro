let state = {
  routes: [],
  theme: {
    mode: 'light'
  },
  menuIsCollapse: false
}

let mutations = {
  setRoutes(state, r) {
    return (state.routes = r)
  },
  setThemeMode(state, mode) {
    return (state.theme.mode = mode)
  },
  setMenuCollapse(state) {
    return (state.menuIsCollapse = !state.menuIsCollapse)
  }
}

let getters = {
  routes: state => state.routes,
  theme: state => state.theme,
  menuIsCollapse: state => state.menuIsCollapse
}

export default {
  state,
  mutations,
  getters
}
