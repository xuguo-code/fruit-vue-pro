const Index = () => import(/* webpackChunkName: "home" */ './Index')
const Index2 = () => import(/* webpackChunkName: "home" */ './Index2')

export default {
  path: '/',
  name: 'Home',
  meta: {
    title: '首页',
    icon: 'home',
    isLeaf: false,
    vuex: 'home'
  },
  component: {
    render: h => h('baisc-layout')
  },
  redirect: '/index',
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
