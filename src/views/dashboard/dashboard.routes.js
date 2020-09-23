const Index = () => import(/* webpackChunkName: "dashboard" */ './Index')

export default {
  path: 'dashboard',
  name: 'dashboard',
  meta: {
    title: 'menu.dashboard',
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
        title: 'menu.dashboard.index'
      },
      component: Index
    }
  ]
}
