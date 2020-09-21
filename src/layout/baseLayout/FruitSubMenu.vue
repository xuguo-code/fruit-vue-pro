<template>
  <fragment>
    <!-- 直接显示item项目 -->
    <template v-if="menuInfo.meta.isLeaf || !menuInfo.children">
      <el-menu-item :key="menuInfo.name" :index="menuInfo.path" @click="jumpTo(menuInfo.path)">
        <svg-icon v-if="menuInfo.meta.icon" :icon-name="menuInfo.meta.icon" />
        <span>{{ menuInfo.meta.title }}</span>
      </el-menu-item>
    </template>
    <!-- 包含子项目 -->
    <el-submenu v-else :key="menuInfo.path" :index="menuInfo.path">
      <template slot="title">
        <svg-icon v-if="menuInfo.meta.icon" :icon-name="menuInfo.meta.icon" />
        <span>{{ menuInfo.meta.title }}</span>
      </template>
      <fruit-sub-menu
        v-for="childMenu in menuInfo.children"
        :key="childMenu.path"
        :menu-info="childMenu"
        popper-append-to-body
      />
    </el-submenu>
  </fragment>
</template>

<script>
export default {
  name: 'FruitSubMenu',
  props: {
    menuInfo: {
      type: Object,
      default() {
        return {}
      },
      required: true
    }
  },
  methods: {
    jumpTo(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.svg-icon + span {
  margin: 0 0 0 10px;
}
</style>
