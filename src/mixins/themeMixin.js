import { mapGetters } from 'vuex'

export default {
  install(Vue) {
    Vue.mixin({
      computed: {
        ...mapGetters('global', {
          $_themeMode_mixin: 'themeMode',
          $_theme_mixin: 'theme'
        })
      }
    })
  }
}
