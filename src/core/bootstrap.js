import storage from 'store'
import store from '@/store'
import defaultConfig from './app.config'
import { APP_LANG, APP_THEME_COLOR, APP_THEME_MODE } from './buildKey'

export default function() {
  store.dispatch('app/setThemeMode', storage.get(APP_THEME_MODE, defaultConfig.themeMode))
  store.dispatch('app/setThemeColor', storage.get(APP_THEME_COLOR, defaultConfig.themeColor))
  store.dispatch('app/setLanguage', storage.get(APP_LANG, defaultConfig.lang))
}
