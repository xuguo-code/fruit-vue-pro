// 未登录可访问 白名单
const WihteList = ['/login', '/', '/index']

const WildcardRoute = [
  // 通配404页面，会添加到路由表最终的最后位置
  {
    path: '*',
    name: '404',
    meta: {
      title: '404',
      hideInMenu: true,
      hideInBreadcrumb: true
    },
    component: () => import(/* webpackChunkName: "notFound" */ '@/layout/404')
  }
]

export { WildcardRoute, WihteList }
