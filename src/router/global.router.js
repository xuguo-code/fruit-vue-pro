import Vue from 'vue'
import VueRouter from 'vue-router'
import { ConstRoutes } from './config.routes'

Vue.use(VueRouter)

// 根路由承载 模块
const RootRoute = {
  path: '/',
  name: 'root',
  meta: {
    skip: true
  },
  redirect: '/dashboard',
  component: {
    render: h => h('baisc-layout')
  },
  children: []
}

// 收集分散的模块路由
const routes = require.context('../views', true, /\.routes\.js$/)

let dynamicRoutes = routes.keys().map(f => routes(f).default)

RootRoute.children = dynamicRoutes

// 创建路由实例
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: ConstRoutes
})

export { router, RootRoute }
