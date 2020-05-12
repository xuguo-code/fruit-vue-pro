<template>
  <el-submenu :key="menuInfo.path" :index="menuInfo.path">
    <template slot="title">
      <svg-icon :icon-name="menuInfo.meta.icon" />
      <span slot="title">{{ menuInfo.meta.title }}</span>
    </template>
    <template v-for="childMenu in menuInfo.children">
      <el-menu-item
        v-if="childMenu.meta.isLeaf"
        :key="childMenu.name"
        :index="childMenu.path"
        @click="jumpTo(childMenu.path)"
      >
        <svg-icon :icon-name="childMenu.meta.icon" />
        <span>{{ childMenu.meta.title }}</span>
      </el-menu-item>
      <fruit-sub-menu v-else :key="childMenu.name" :menu-info="childMenu" />
    </template>
  </el-submenu>
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
  watch: {
    isCollapse(c) {
      console.log(c)
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
.svg-icon {
  margin: 0 5px 0 0;
}
</style>
