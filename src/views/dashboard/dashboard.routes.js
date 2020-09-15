const Index = () => import(/* webpackChunkName: "dashboard" */ './index')

export default {
  path: '/dashboard',
  name: 'dashboard',
  meta: {
    title: '仪表盘',
    icon: 'dashboard',
    roles: ['admin', 'editor'],
    showInMenu: true,
    isLeaf: false
  },
  component: {
    render: h => h('router-view')
  },
  redirect: '/dashboard/index',
  children: [
    {
      path: 'index',
      name: 'DashboardIndex',
      meta: {
        title: '首页',
        icon: 'dashboard-index',
        showInMenu: true,
        isLeaf: true
      },
      component: Index
    }
  ]
}
