import { genThemeObject } from '@/theme'
let state = {
  routes: [],
  themeMode: 'light',
  theme: {
    ...genThemeObject('light')
  },
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
  },
  setTheme(state, theme) {
    return (state.theme = theme)
  },
  setMode(state, mode) {
    return (state.themeMode = mode)
  }
}

let actions = {
  setThemeMode({ commit }, mode) {
    let theme = genThemeObject(mode)
    commit('setMode', mode)
    commit('setTheme', theme)
  }
}

let getters = {
  routes: state => state.routes,
  theme: state => state.theme,
  themeMode: state => state.themeMode,
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
