const Index = () => import(/* webpackChunkName: "user" */ './Index')

export default {
  path: '/user',
  name: 'user',
  meta: {
    title: 'user',
    icon: 'user',
    showInMenu: true,
    isLeaf: false
    // vuex: 'user'
  },
  component: {
    render: h => h('router-view')
  },
  redirect: '/user/index',
  children: [
    {
      path: 'index',
      name: 'userIndex',
      meta: {
        title: '首页',
        icon: 'user-home',
        showInMenu: true,
        isLeaf: true
      },
      component: Index
    }
  ]
}
