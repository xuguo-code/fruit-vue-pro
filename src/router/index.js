import { genratePipeFunc } from '@/utils/common'
import {
  permissionRoutes,
  addProgressToRouter,
  dynamicVuexRegisterInRouter
} from './handleOfRouter'
import { router, asnycRoutes } from './global.router'
import { WildcardRoute, WihteList } from './config.routes'

// 生成流程处理路由的函数
const HandlerOfRouterPipeFunc = genratePipeFunc(
  // 过滤权限
  permissionRoutes(asnycRoutes, WihteList, WildcardRoute),
  // 添加进度条
  addProgressToRouter(),
  // 添加动态注册vuex模块的能力
  dynamicVuexRegisterInRouter()
)

// 将当前router经过流程函数处理返回新router
const withPipeRouter = HandlerOfRouterPipeFunc(router)

export default withPipeRouter
