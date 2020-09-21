<template>
  <aside class="aside-wrap">
    <!-- 侧边菜单 -->
    <div class="aside-menu-wrap">
      <el-menu
        class="aside-menu"
        :default-active="activePath"
        :collapse="isCollapse"
        :background-color="$_mixin_theme['--color-background']"
        :text-color="$_mixin_theme['--color-text']"
        :active-text-color="$_mixin_theme['--color-primary']"
      >
        <fruit-sub-menu v-for="menu in menus" :key="menu.path" :menu-info="menu" />
      </el-menu>
    </div>
    <!-- 收起按钮 -->
    <div
      :class="[
        'main-header-collapse',
        $_mixin_themeMode === 'dark' ? 'main-header-collapse--dark' : ''
      ]"
      @click="menuCollapseChange"
    >
      <svg-icon
        class="menu-btn"
        :icon-name="isCollapse ? 'menu-open' : 'menu-close'"
        :fill="$_mixin_theme['--color-primary']"
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
  background: $--color-background;
  box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
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
    border-top: 1px solid $--color-border-4;
    &--dark {
      border-top-color: $--color-background;
    }
  }
}
</style>
