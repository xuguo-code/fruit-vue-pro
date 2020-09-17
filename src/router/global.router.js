import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 收集分散的模块路由
const routes = require.context('../views', true, /\.routes\.js$/)

let dynamicRoutes = routes.keys().map(f => routes(f).default)
// 无权限路由
let constRoutes = [],
  // 权限路由
  asnycRoutes = []

// 分离无权限路由
dynamicRoutes.forEach(route => {
  if (route?.meta?.roles) {
    asnycRoutes.push(route)
  } else {
    constRoutes.push(route)
  }
})

// 创建路由实例
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constRoutes
})

export { router, asnycRoutes }
