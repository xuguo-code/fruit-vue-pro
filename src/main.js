import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 进度条样式
import 'nprogress/nprogress.css'
// 扩展
// svg
import './assets/icon'
// fragment
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)
// 全局组件
import AllComps from './components'
Vue.use(AllComps)
// 全局layout
import AllLayout from './layout'
Vue.use(AllLayout)
// 组件
import Plugins from './plugins/element-ui'
Vue.use(Plugins)
// 主题混入
import ThemeMixin from './mixins/themeMixin'
Vue.use(ThemeMixin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
