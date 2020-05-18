function install(Vue) {
  Vue.mixin({
    computed: {
      $_theme_mixin: vm => vm.$store.getters['global/theme']
    }
  })
}

export default { install }
