import { mapGetters } from 'vuex'

export default {
  install(Vue) {
    Vue.mixin({
      name: 'AppMixin',
      computed: {
        ...mapGetters('app', {
          $_mixin_currentLang: 'Lang',
          $_mixin_menuIsCollapse: 'menuIsCollapse'
        })
      }
    })
  }
}
