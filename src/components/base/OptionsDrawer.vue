<template>
  <div class="drawer-wrap">
    <el-button :class="['drawer-btn', drawer ? 'open' : '']" @click="drawer = true" type="primary">
      <svg-icon :icon-name="drawer ? 'menu-open' : 'menu-close'" />
    </el-button>
    <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
      <h2>配置</h2>
      <section class="option-wrap">
        <div class="option-item">
          <span>主题色：</span>
          <el-radio-group v-model="themeMode" size="small">
            <el-radio-button v-for="t in themes" :key="t" :label="t"></el-radio-button>
          </el-radio-group>
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
      drawer: false,
      themes: ['dark', 'light']
    }
  },
  computed: {
    themeMode: {
      get() {
        return this.$store.getters['global/themeMode'] || 'light'
      },
      set(mode) {
        this.$store.dispatch('global/setThemeMode', mode)
      }
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
      & + .option-item {
        margin: 20px 0 0 0;
      }
    }
  }
}
</style>
