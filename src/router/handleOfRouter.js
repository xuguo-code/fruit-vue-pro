import { getToken } from '@/utils/auth'
import store from '../store'
import NProgress from 'nprogress'
/**
 * @param {路由表} routes 路由配置表
 */
export const addRoutes = (routes = []) => {
  const cacheRoutes = routes
  return router => {
    router.addRoutes(cacheRoutes)
    return router
  }
}
/**
 * @desc 给router添加 动态权限路由表
 * @param {需要角色的路由表} rolesRoutes
 * @param {非登录也可查看的白名单路由表} wihteList
 */
export const permissionRoutes = (rolesRoutes = [], wihteList = [], finalRoutes = []) => {
  // 权限路由
  const cacheRoutes = rolesRoutes
  // 白名单（未登录可访问）
  const cacheWihtList = wihteList
  // 最后位置的通配路由
  const cacheFinalRoutes = finalRoutes
  return router => {
    router.beforeEach((to, from, next) => {
      // 获取token
      let hasToken = getToken() || true

      if (hasToken) {
        // 已登录
        // 获取角色
        if (to.path === '/login') {
          // 已登录重定向到首页
          next('/')
        } else {
          // 获取用户角色
          const hasRoles = store.getters['user/hasRole']
          if (hasRoles && hasRoles.length > 0) {
            // 存在且有角色 说明已经生成过角色路由了
            next()
          } else {
            try {
              // 获取用户角色
              const roles = ['admin']
              // 生成动态路由
              const asyncRoutes = genrateAsnycRoutes(cacheRoutes, roles)
              // 存储权限路由
              store.commit('global/setRoutes', asyncRoutes)
              // 添加过滤权限后的路由表
              router.addRoutes([...asyncRoutes, ...cacheFinalRoutes])
              // 设置角色
              store.commit('user/setHasRole')
              // 跳转
              next({ ...to, replace: true })
            } catch (e) {
              // 清除用户信息
              // 提醒
              console.log(e)
              // 回退到 登录
              next({
                path: '/login',
                query: { redirect: to.fullPath }
              })
            }
          }
        }
      } else {
        // 未登录
        if (cacheWihtList.includes(to.path)) {
          next()
        } else {
          next({
            path: '/login',
            query: { redirect: to.fullPath }
          })
        }
      }
    })
    return router
  }
}
/**
 * @desc 过滤当前可访问路由表
 * @param {权限路由表} routes
 * @param {当前角色} roles
 */
function genrateAsnycRoutes(routes, roles) {
  return routes.reduce((memo, route) => {
    // 不需要角色或者有角色
    if (!route?.meta?.roles || hasRoles(route.meta.roles, roles)) {
      // 递归查询过滤子路由权限
      route?.children ? (route.children = genrateAsnycRoutes(route.children, roles)) : ''
      return [...memo, route]
    } else {
      // 无权查看
      return memo
    }
  }, [])
}
/**
 * @desc 判断是否有权限
 * @param {需要的角色} needRoles
 * @param {当前的角色} curRoles
 */
function hasRoles(needRoles, curRoles) {
  const needRolesNum = needRoles.length
  const curRolesNum = curRoles.length
  return [...new Set([...needRoles, ...curRoles])].length < needRolesNum + curRolesNum
}
/**
 * 为路由添加进度条
 */
export const addProgressToRouter = () => router => {
  router.beforeEach((to, from, next) => {
    if (to.path !== from.path) {
      NProgress.start()
    }
    next()
  })
  router.afterEach(() => {
    NProgress.done()
  })
  return router
}
/**
 * 为每个模块动态注册 vuex
 */
export const dynamicVuexRegisterInRouter = () => {
  let cacheMap = new Map()
  return router => {
    router.beforeEach((to, from, next) => {
      const moduleRouteMeta = to.matched[0].meta
      const vuexModuleName = moduleRouteMeta.vuex
      if (vuexModuleName && !cacheMap.get(vuexModuleName)) {
        let vuex = null
        try {
          vuex = require(`@/store/modules/${vuexModuleName}.js`)
        } catch (error) {
          console.log(`require error ${error}`)
        }
        cacheMap.set(vuexModuleName, vuex ? true : 'require error')
      }
      next()
    })
    return router
  }
}
