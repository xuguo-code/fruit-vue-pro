<template>
  <div :class="['aside-wrap', isCollapse ? '' : 'const-width']">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
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
import FruitSubMenu from './FruitSubMenu'

export default {
  name: 'FruitAside',
  components: {
    FruitSubMenu
  },
  data() {
    return {
      isCollapse: false,
      menus: []
    }
  },
  computed: {
    routes: vm => (vm.$router?.options?.routes || []).concat(vm.$store?.getters?.routes || []),
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
  &.const-width {
    width: 200px;
  }
  .aside-menu {
    height: 100%;
  }
  >>> .el-submenu__title,
  .el-menu-item {
    text-align: left;
  }
}
</style>
