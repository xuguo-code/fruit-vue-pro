import { mapGetters } from 'vuex'

export default {
  install(Vue) {
    Vue.mixin({
      name: 'ThemeMixin',
      computed: {
        ...mapGetters('app', {
          $_themeMode_mixin: 'themeMode',
          $_theme_mixin: 'theme'
        })
      }
    })
  }
}
