import { mapGetters } from 'vuex'

export default {
  install(Vue) {
    Vue.mixin({
      name: 'AppMixin',
      computed: {
        ...mapGetters('app', {
          $_mixin_currentLang: 'lang',
          $_mixin_menuIsCollapse: 'menuIsCollapse'
        })
      }
    })
  }
}
