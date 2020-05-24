<template>
  <div class="aside-wrap">
    <el-menu
      class="aside-menu"
      :default-active="activePath"
      :collapse="isCollapse"
      :background-color="$_theme_mixin.backgroundColor"
      :text-color="$_theme_mixin.textColor"
      :active-text-color="$_theme_mixin.activeTextColor"
    >
      <fruit-sub-menu v-for="menu in menus" :key="menu.path" :menu-info="menu" />
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FruitSubMenu from './FruitSubMenu'

export default {
  name: 'FruitAside',
  components: {
    FruitSubMenu
  },
  data() {
    return {
      menus: []
    }
  },
  computed: {
    ...mapGetters('global', {
      isCollapse: 'menuIsCollapse',
      authRoutes: 'routes'
    }),
    routes: vm => (vm.$router?.options?.routes || []).concat(vm.authRoutes || []),
    activePath: vm => vm.$route.fullPath
  },
  methods: {
    getMemuData(routes, parentPath = '') {
      return routes.reduce((memo, route) => {
        if (route?.meta?.showInMenu) {
          let menu = {
            name: route.name,
            path: `${parentPath}${parentPath === '/' || route.path.includes('/') ? '' : '/'}${
              route.path
            }`,
            meta: route.meta
          }
          if (!route?.meta?.isLeaf && route?.children) {
            menu.children = this.getMemuData(route.children, menu.path)
          }
          return [...memo, menu]
        } else {
          return memo
        }
      }, [])
    }
  },
  mounted() {
    this.menus = this.getMemuData(this.routes)
  }
}
</script>

<style lang="scss" scoped>
.aside-wrap {
  height: 100%;
  text-align: left;
  overflow: hidden;
  .aside-menu {
    height: 100%;
    &:not(.el-menu--collapse) {
      width: 200px;
    }
  }
  /deep/ .el-menu--collapse {
    width: 54px;
  }
  .svg-icon + span {
    margin: 0 0 0 10px;
  }
}
</style>
