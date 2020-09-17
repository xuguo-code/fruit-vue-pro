const Index = () => import(/* webpackChunkName: "dashboard" */ './Index')

export default {
  path: 'dashboard',
  name: 'dashboard',
  meta: {
    title: '仪表盘',
    icon: 'dashboard',
    roles: ['admin', 'editor']
  },
  component: {
    render: h => h('router-view')
  },
  redirect: 'dashboard/index',
  children: [
    {
      path: 'index',
      name: 'dashboardIndex',
      meta: {
        title: '首页',
        icon: 'dashboard-index'
      },
      component: Index
    }
  ]
}
