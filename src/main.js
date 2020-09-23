import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './locales'
import './setup'
Vue.config.productionTip = false

// eslint-disable-next-line vue/require-name-property
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
