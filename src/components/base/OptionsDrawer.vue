<template>
  <div class="drawer-wrap">
    <el-button :class="['drawer-btn', drawer ? 'open' : '']" @click="drawer = true" type="primary">
      <svg-icon :icon-name="drawer ? 'menu-open' : 'menu-close'" />
    </el-button>
    <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
      <h2>配置</h2>
      <section class="option-wrap">
        <div class="option-item">
          <span>收起侧边菜单：</span>
          <el-switch :value="$store.getters.menuIsCollapse" @change="themeModeChange"></el-switch>
        </div>
      </section>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'OptionsDrawer',
  data() {
    return {
      drawer: false
    }
  },
  methods: {
    themeModeChange() {
      this.$store.commit('setMenuCollapse')
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer-wrap {
  .drawer-btn {
    position: absolute;
    top: 50%;
    right: 0;
    padding: 10px;
    border-radius: 5px 0 0 5px;
    &.open {
      right: 30%;
    }
  }
  .option-wrap {
    height: 100%;
    width: 100%;
    padding: 10px 40px;
    text-align: left;
    .option-item {
      display: flex;
      align-items: center;
      text-align: left;
    }
  }
}
</style>
