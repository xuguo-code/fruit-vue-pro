const Index = () => import(/* webpackChunkName: "home" */ './Index')
const Index2 = () => import(/* webpackChunkName: "home" */ './Index2')

export default {
  path: 'home',
  name: 'home',
  meta: {
    title: 'Home',
    icon: 'home',
    vuex: 'home'
  },
  component: {
    render: h => h('router-view')
  },
  redirect: 'home/index',
  children: [
    {
      path: 'index',
      name: 'homeIndex',
      meta: {
        title: '首页1',
        icon: 'index-home',
        hideInBreadcrumb: true
      },
      component: Index
    },
    {
      path: 'index2',
      name: 'homeIndex2',
      meta: {
        title: '首页2',
        icon: 'index-home'
      },
      component: Index2
    }
  ]
}
