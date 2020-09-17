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
import { getMemuDataFromRoutes } from '@/router/handleOfRouter'

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
    ...mapGetters('app', {
      isCollapse: 'menuIsCollapse',
      routes: 'routes'
    }),
    activePath: vm => vm.$route.fullPath
  },
  mounted() {
    this.menus = getMemuDataFromRoutes(this.routes)
  },
  methods: {
    // 收起打开菜单
    menuCollapseChange() {
      this.$store.commit('app/setMenuCollapse')
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
