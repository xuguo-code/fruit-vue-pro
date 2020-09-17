import { getToken } from '@/utils/auth'
import store from '../store'
import NProgress from 'nprogress'
/**
 * @param {路由表} routes 路由配置表
 */
export const addRoutes = (routes = []) => {
  return router => {
    router.addRoutes(routes)
    return router
  }
}
/**
 * @desc 给router添加 动态权限路由表
 * @param {需要角色的路由表} rolesRoutes
 * @param {非登录也可查看的白名单路由表} wihteList
 */
export const permissionRoutes = (rolesRoutes = [], wihteList = [], WildcardRoute = []) => {
  return router => {
    router.beforeEach((to, from, next) => {
      // 获取token
      let hasToken = getToken() || true

      if (hasToken) {
        // 1. 已登录
        // 获取角色
        if (to.path === '/login') {
          // 1.1 已登录重定向到首页
          next('/')
        } else {
          // 1.2 获取用户角色
          const hasRoles = store.getters['user/hasRole']
          if (hasRoles) {
            // 1.2.1 存在且有角色 说明已经生成过角色路由了
            next()
          } else {
            try {
              // 1.2.2 获取用户角色
              // 请求获取
              const roles = ['admin']
              // 存储角色信息
              store.commit('user/setRoles', roles)
              // 生成动态路由
              const asyncRoutes = genrateAsnycRoutes(rolesRoutes, roles)
              // 存储权限路由
              store.commit('app/setRoutes', asyncRoutes)
              // 添加过滤权限后的路由表
              router.addRoutes([...asyncRoutes, ...WildcardRoute])
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
        if (wihteList.includes(to.path)) {
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
  // 存在当前角色 合并再去重后必然会小于 两者角色个数之和
  const needRolesNum = needRoles.length
  const curRolesNum = curRoles.length
  return [...new Set([...needRoles, ...curRoles])].length < needRolesNum + curRolesNum
}
/**
 * @desc 为路由添加进度条
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
 * @desc 为每个模块动态注册 vuex
 */
export const dynamicVuexRegisterInRouter = () => {
  let cacheMap = new Map()
  return router => {
    router.beforeEach((to, from, next) => {
      // 查找最先匹配的含有的vuex模块名
      let vuexModuleName = null
      for (let i = 0; i < to.matched.length; i++) {
        if ((vuexModuleName = to.matched[i]?.meta?.vuex)) {
          break
        }
      }
      if (vuexModuleName && !cacheMap.get(vuexModuleName)) {
        let vuex = null
        try {
          vuex = require(`@/store/modules/${vuexModuleName}.js`)
          // 动态注册vuex
          store.registerModule(vuexModuleName, vuex)
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
/**
 * @desc 根据路由表生成菜单数据
 */
export const getMemuDataFromRoutes = (routes, parentPath = '') => {
  return routes.reduce((memo, route) => {
    // 需要在菜单中隐藏
    if (!route?.meta?.hideInMenu) {
      let menu = {
        name: route.name,
        path: `${parentPath}${parentPath === '/' || route.path.includes('/') ? '' : '/'}${
          route.path
        }`,
        meta: route.meta
      }
      if (!route?.meta?.isLeaf && route?.children) {
        menu.children = getMemuDataFromRoutes(route.children, menu.path)
      }
      const addMenu = route?.meta?.skip ? menu?.children : [menu]
      return [...memo, ...addMenu]
    } else {
      return memo
    }
  }, [])
}
