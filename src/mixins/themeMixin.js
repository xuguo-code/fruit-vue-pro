import { mapGetters } from 'vuex'
import { themes } from '@/theme'

export default {
  install(Vue) {
    Vue.mixin({
      name: 'ThemeMixin',
      computed: {
        ...mapGetters('app', {
          $_mixin_themeMode: 'themeMode',
          $_mixin_themeColor: 'themeColor'
        }),
        $_mixin_theme: vm => ({
          ...themes.find(t => t.key === vm.$_mixin_themeMode),
          ...themes.find(t => t.key === vm.$_mixin_themeColor)
        })
      }
    })
  }
}
