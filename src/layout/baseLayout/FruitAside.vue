<template>
  <aside class="aside-wrap">
    <!-- 侧边菜单 -->
    <div class="aside-menu-wrap">
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
    <!-- 收起按钮 -->
    <div :class="['main-header-collapse']" @click="menuCollapseChange">
      <svg-icon
        class="menu-btn"
        :fill="$_theme_mixin.activeTextColor"
        :icon-name="isCollapse ? 'menu-open' : 'menu-close'"
      />
    </div>
  </aside>
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
  mounted() {
    this.menus = this.getMemuData(this.routes)
  },
  methods: {
    // 标准化菜单数据
    getMemuData(routes, parentPath = '') {
      return routes.reduce((memo, route) => {
        // 需要在菜单中隐藏
        if (!route?.meta?.hideInMenu) {
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
          const addMenu = route?.meta?.skip ? menu?.children : [menu]
          return [...memo, ...addMenu]
        } else {
          return memo
        }
      }, [])
    },
    // 收起打开菜单
    menuCollapseChange() {
      this.$store.commit('global/setMenuCollapse')
    }
  }
}
</script>

<style lang="scss" scoped>
.aside-wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  border-right: 1px solid #e6e6e6;
  .aside-menu-wrap {
    flex: 1 1 0%;
    width: auto;
    overflow: hidden auto;
    .aside-menu {
      box-sizing: border-box;
      &:not(.el-menu--collapse) {
        width: 200px;
      }
      /deep/ .el-menu--collapse {
        width: 54px;
      }
      .svg-icon + span {
        margin: 0 0 0 10px;
      }
    }
    /deep/ .el-menu,
    .el-submenu__title {
      border: none;
    }
  }
  .main-header-collapse {
    flex: 0 0 50px;
    box-sizing: border-box;
    height: 16px;
    width: 100%;
    padding: 0 0 0 20px;
    line-height: 50px;
    cursor: pointer;
    border-top: 1px solid #e6e6e6;
  }
}
</style>
