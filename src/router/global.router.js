import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 通配404页面，会添加到路由表最终的最后位置
const FinalRoute = [
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "notFound" */ '@/layout/404')
  }
]
// 未登录可访问 白名单
const WihteList = ['/login', '/', '/index']

// 收集分散的模块路由
const routes = require.context('../views', true, /\.routes\.js$/)

let dynamicRoutes = routes.keys().map(f => routes(f).default)
// 无权限路由
let constRoutes = [],
  asnycRoutes = []
// 权限路由

dynamicRoutes.forEach(route => {
  if (route?.meta?.roles) {
    asnycRoutes.push(route)
  } else {
    constRoutes.push(route)
  }
})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constRoutes
})

export { router, FinalRoute, asnycRoutes, WihteList }
