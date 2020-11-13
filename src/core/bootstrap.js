import storage from 'store'
import store from '@/store'
import defaultConfig from './app.config'
import { APP_LANG, APP_THEME_COLOR, APP_THEME_MODE, APP_IS_TAB, APP_IS_TOP_MENU } from './buildKey'

export default function() {
  store.dispatch('app/setThemeMode', storage.get(APP_THEME_MODE, defaultConfig.themeMode))
  store.dispatch('app/setThemeColor', storage.get(APP_THEME_COLOR, defaultConfig.themeColor))
  store.dispatch('app/setLanguage', storage.get(APP_LANG, defaultConfig.lang))
  store.commit('app/setTab', storage.get(APP_IS_TAB, defaultConfig.isTab))
  store.commit('app/setTopMenu', storage.get(APP_IS_TOP_MENU, defaultConfig.isTopMenu))
}
