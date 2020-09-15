import { genratePipeFunc } from '@/utils/common'
import {
  permissionRoutes,
  addProgressToRouter,
  dynamicVuexRegisterInRouter
} from './handleOfRouter'
import { router, FinalRoute, asnycRoutes, WihteList } from './global.router'

// 生成流程处理路由的函数
const HandlerOfRouterPipeFunc = genratePipeFunc(
  // 过滤权限
  permissionRoutes(asnycRoutes, WihteList, FinalRoute),
  addProgressToRouter(),
  dynamicVuexRegisterInRouter()
)

// 将当前router经过流程函数处理返回新router
const withPipeRouter = HandlerOfRouterPipeFunc(router)

export default withPipeRouter
