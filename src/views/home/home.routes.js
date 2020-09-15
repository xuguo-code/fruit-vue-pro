const Index = () => import(/* webpackChunkName: "home" */ './index')
const Index2 = () => import(/* webpackChunkName: "home" */ './index2')

export default {
  path: '/',
  name: 'Home',
  meta: {
    title: '首页',
    icon: 'home',
    showInMenu: true,
    isLeaf: false,
    vuex: 'user'
  },
  component: {
    render: h => h('router-view')
  },
  redirect: '/index',
  children: [
    {
      path: 'index',
      name: 'HomeIndex',
      meta: {
        title: '首页1',
        icon: 'index-home',
        showInMenu: true,
        isLeaf: true,
        hideInBreadcrumb: true
      },
      component: Index
    },
    {
      path: 'index2',
      name: 'HomeIndex2',
      meta: {
        title: '首页2',
        icon: 'index-home',
        showInMenu: true,
        isLeaf: true
      },
      component: Index2
    }
  ]
}
