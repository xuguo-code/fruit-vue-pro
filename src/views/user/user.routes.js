const Index = () => import(/* webpackChunkName: "user" */ './Index')

export default {
  path: '/user',
  name: 'user',
  meta: {
    title: 'user',
    icon: 'user'
    // vuex: 'user'
  },
  component: {
    render: h => h('baisc-layout')
  },
  redirect: '/user/index',
  children: [
    {
      path: 'index',
      name: 'userIndex',
      meta: {
        title: '首页',
        icon: 'user-home'
      },
      component: Index
    }
  ]
}
