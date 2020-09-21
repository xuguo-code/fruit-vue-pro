const Index = () => import(/* webpackChunkName: "user" */ './Index')

export default {
  path: 'personal',
  name: 'personal',
  meta: {
    title: '个人页',
    icon: 'personal',
    vuex: 'personal'
  },
  component: {
    render: h => h('router-view')
  },
  redirect: 'personal/index',
  children: [
    {
      path: 'index',
      name: 'personalIndex',
      meta: {
        title: '个人中心'
      },
      component: Index
    }
  ]
}
