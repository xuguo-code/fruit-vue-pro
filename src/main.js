import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入公共样式
import './styles/index.scss'
// 扩展
// svg
import './assets/icon'
// 全局组件
import AllComps from './components'
Vue.use(AllComps)
// 组件
import Plugins from './plugins/element-ui'
Vue.use(Plugins)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
