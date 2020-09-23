const Index = () => import(/* webpackChunkName: "user" */ './Index')

export default {
  path: 'personal',
  name: 'personal',
  meta: {
    title: 'menu.personal',
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
        title: 'menu.personal.index'
      },
      component: Index
    }
  ]
}
