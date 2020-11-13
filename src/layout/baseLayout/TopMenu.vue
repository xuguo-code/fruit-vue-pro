<template>
  <section class="top-menu">
    <el-menu :default-active="activePath" mode="horizontal" @select="menuChange">
      <el-menu-item v-for="menu in menus" :key="menu.path" :index="menu.path">
        {{ $t(menu.meta.title) }}
      </el-menu-item>
    </el-menu>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { getMemuDataFromRoutes } from '@/router/handleOfRouter'
import { getPurePathname } from '@/utils/common'

export default {
  name: 'TopMenu',
  computed: {
    ...mapGetters('app', {
      routes: 'routes'
    }),
    menus: vm => getMemuDataFromRoutes(vm.routes),
    activePath: vm =>
      getPurePathname(vm.$route.fullPath)
        .split('/')
        .slice(0, 2)
        .join('/')
  },
  methods: {
    menuChange(p) {
      if (!this.$route.fullPath.includes(p)) {
        this.$router.push(p)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.top-menu {
  height: 100%;
}
</style>
