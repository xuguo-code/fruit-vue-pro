import { updateTheme } from '@/theme'
import { ConstRoutes } from '@/router/config.routes'

let state = {
  routes: ConstRoutes,
  themeMode: 'light',
  themeColor: 'blue',
  menuIsCollapse: false,
  Lang: 'zhCN'
}

let mutations = {
  setRoutes(state, r) {
    return (state.routes = ConstRoutes.concat(r))
  },
  setMenuCollapse(state) {
    return (state.menuIsCollapse = !state.menuIsCollapse)
  },
  setLang(state, lang) {
    return (state.lang = lang)
  },
  setMode(state, mode) {
    return (state.themeMode = mode)
  },
  setColor(state, color) {
    return (state.themeColor = color)
  }
}

let actions = {
  setThemeColor({ commit }, mode) {
    updateTheme(mode)
    commit('setColor', mode)
  },
  setThemeMode({ commit }, mode) {
    updateTheme(mode)
    commit('setMode', mode)
  }
}

let getters = {
  routes: state => state.routes,
  themeMode: state => state.themeMode,
  themeColor: state => state.themeColor,
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
