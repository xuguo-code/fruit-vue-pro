import storage from 'store'
import {
  APP_LANG,
  APP_THEME_COLOR,
  APP_THEME_MODE,
  APP_IS_TAB,
  APP_IS_TOP_MENU
} from '@/core/buildKey'
import { updateTheme } from '@/theme'
import { ConstRoutes } from '@/router/config.routes'
import { loadLangAsync } from '@/locales'

let state = {
  routes: ConstRoutes,
  topMenuRoutes: [],
  themeMode: 'light',
  themeColor: 'blue',
  menuIsCollapse: false,
  lang: 'zh-CN',
  isTab: false,
  isTopMenu: false
}

let mutations = {
  setRoutes(state, r) {
    return (state.routes = ConstRoutes.concat(r))
  },
  setMenuCollapse(state) {
    return (state.menuIsCollapse = !state.menuIsCollapse)
  },
  setLang(state, lang) {
    storage.set(APP_LANG, lang)
    return (state.lang = lang)
  },
  setMode(state, mode) {
    storage.set(APP_THEME_MODE, mode)
    return (state.themeMode = mode)
  },
  setColor(state, color) {
    storage.set(APP_THEME_COLOR, color)
    return (state.themeColor = color)
  },
  setTab(state, mode) {
    storage.set(APP_IS_TAB, mode)
    return (state.isTab = mode)
  },
  setTopMenu(state, is) {
    storage.set(APP_IS_TOP_MENU, is)
    return (state.isTopMenu = is)
  },
  setTopMenuRoutes(state, routes) {
    return (state.topMenuRoutes = routes)
  }
}

let actions = {
  setThemeColor({ commit }, mode) {
    updateTheme(mode).then(() => {
      commit('setColor', mode)
    })
  },
  setThemeMode({ commit }, mode) {
    updateTheme(mode).then(() => {
      commit('setMode', mode)
    })
  },
  setLanguage({ commit }, lang) {
    commit('setLang', lang)
    return new Promise((resolve, reject) => {
      loadLangAsync(lang)
        .then(() => {
          resolve()
        })
        .catch(e => {
          reject(e)
        })
    })
  }
}

let getters = {
  routes: state => state.routes,
  themeMode: state => state.themeMode,
  themeColor: state => state.themeColor,
  menuIsCollapse: state => state.menuIsCollapse,
  locale: state => state.locale,
  lang: state => state.lang,
  isTab: state => state.isTab,
  isTopMenu: state => state.isTopMenu,
  topMenuRoutes: state => state.topMenuRoutes
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
