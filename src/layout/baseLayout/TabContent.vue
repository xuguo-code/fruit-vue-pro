<template>
  <section class="tab-content">
    <el-tabs class="el-tab-out" v-model="activeTab" type="card" @tab-remove="removeTab">
      <el-tab-pane
        v-for="tab in tabList"
        :key="tab.fullPath"
        :label="$t(tab.meta.title)"
        :name="tab.fullPath"
        :closable="tab.fullPath !== RootRouteFullPath"
      >
        <transition name="el-fade-in-linear">
          <keep-alive>
            <router-view />
          </keep-alive>
        </transition>
      </el-tab-pane>
      <fruit-footer />
    </el-tabs>
  </section>
</template>

<script>
import FruitFooter from './FruitFooter'
import { getPurePathname } from '@/utils/common'
import { RootRouteFullPath } from '@/router/config.routes'

export default {
  name: 'TabContent',
  components: {
    FruitFooter
  },
  data() {
    return {
      tabList: [],
      RootRouteFullPath
    }
  },
  computed: {
    activeTab: {
      get: vm => getPurePathname(vm.$route.fullPath),
      set(p) {
        if (this.$route.fullPath !== p) {
          this.$router.push(p)
        }
      }
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const tab = {
          fullPath: getPurePathname(route.fullPath),
          meta: route.meta
        }
        if (this.tabList.findIndex(t => t.fullPath === tab.fullPath) < 0) {
          this.tabList.push(tab)
        }
      },
      immediate: true
    }
  },
  methods: {
    removeTab(fullPath) {
      const curIndex = this.tabList.findIndex(t => t.fullPath === fullPath)
      if (this.activeTab === fullPath) {
        // 删除当前
        let nextIndex = curIndex - 1
        if (nextIndex > -1) {
          this.activeTab = this.tabList[nextIndex].fullPath
        } else {
          this.$nextTick(() => this.$router.push('/'))
        }
      }
      this.tabList.splice(curIndex, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-content {
  width: 100%;
  height: 100%;
  .el-tab-out {
    position: relative;
    width: 100%;
    height: 100%;
  }
  /deep/ .el-tab-out > .el-tabs__header {
    margin: 0;
    .el-tabs__nav-scroll {
      background: $--color-secondary;
      .el-tabs__nav {
        border-top-left-radius: 0;
        border-color: $--color-wihte;
      }
      .el-tabs__item {
        background-color: $--color-wihte;
      }
    }
  }
  /deep/ .el-tab-out > .el-tabs__content {
    box-sizing: border-box;
    position: absolute;
    top: 41px;
    bottom: 0;
    width: 100%;
    padding: 20px 20px 0 20px;
    overflow: hidden auto;
  }
}
</style>
