// 未登录可访问 白名单
const WihteList = ['/login', '/', '/index']

// 静态路由
const ConstRoutes = [
  {
    path: '/user',
    name: 'user',
    meta: {
      hideInMenu: true,
      hideInBreadcrumb: true
    },
    component: {
      render: h => h('router-view')
    },
    children: [
      {
        path: 'login',
        name: 'userLogin',
        component: {
          render: h => h('404')
        }
      }
    ]
  }
]

// 通配路由，会添加到路由表最终的最后位置
const WildcardRoute = [
  // 通配404页面
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

export { WildcardRoute, WihteList, ConstRoutes }
