<template>
  <div :class="['aside-wrap', isCollapse ? '' : 'const-width']">
    <el-menu class="aside-menu" :default-active="activePath" :collapse="isCollapse">
      <template v-for="menu in menus">
        <el-menu-item
          v-if="menu.meta.isLeaf"
          :key="menu.path"
          :index="menu.path"
          @click="jumpTo(menu.path)"
        >
          <svg-icon :icon-name="menu.meta.icon" />
          <span>{{ menu.meta.title }}</span>
        </el-menu-item>
        <fruit-sub-menu :key="menu.path" :menu-info="menu" />
      </template>
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
    },
    jumpTo(path) {
      this.$router.push(path)
    }
  },
  mounted() {
    this.menus = this.getMemuData(this.routes)
  }
}
</script>

<style lang="scss" scoped>
.aside-wrap {
  display: inline-block;
  height: 100%;
  width: auto;
  text-align: left;
  overflow: hidden;
  &.const-width {
    width: 210px;
  }
  .aside-menu {
    height: 100%;
  }
  .svg-icon + span {
    margin: 0 0 0 10px;
  }
}
</style>
