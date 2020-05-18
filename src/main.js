import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 进度条样式
import 'nprogress/nprogress.css'
// svg
import './assets/icon'
// 扩展
import { composeVueUse } from './utils/common'
// fragment
import Fragment from 'vue-fragment'
// 全局组件
import AllComps from './components'
// 全局layout
import AllLayout from './layout'
// 组件
import Plugins from './plugins/element-ui'
composeVueUse(Vue)(Fragment.Plugin, AllComps, AllLayout, Plugins)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
