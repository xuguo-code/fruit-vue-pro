<template>
  <div :class="{ 'drawer-wrap': true, 'drawer-open': drawer }">
    <div class="drawer-mask" @click="drawer = !drawer"></div>
    <div class="drawer-content">
      <section class="content-main">
        <h2>配置</h2>
        <section class="option-wrap">
          <div class="option-item">
            <span>主题色：</span>
            <el-radio-group v-model="themeMode" size="small">
              <el-radio-button v-for="t in themes" :key="t" :label="t"></el-radio-button>
            </el-radio-group>
          </div>
        </section>
        <!-- 开启关闭按钮 -->
      </section>
      <el-button class="drawer-btn" @click="drawer = !drawer" type="primary">
        <svg-icon :icon-name="drawer ? 'menu-open' : 'menu-close'" />
      </el-button>
    </div>
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
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 0;
  z-index: 999;
  &.drawer-open {
    width: 100%;
    .drawer-content {
      transform: translateX(0);
    }
  }
  .drawer-mask {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
  .drawer-content {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 300px;
    background: #fff;
    border-left: 1px solid #e6e6e6;
    transform: translateX(100%);
    box-shadow: -6px 0 16px -8px rgba(0, 0, 0, 0.08), -9px 0 28px 0 rgba(0, 0, 0, 0.05),
      -12px 0 48px 16px rgba(0, 0, 0, 0.03);
    transition: transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1),
      box-shadow 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
  }
  .drawer-btn {
    position: absolute;
    top: 50%;
    right: 300px;
    padding: 10px;
    border-radius: 5px 0 0 5px;
  }
  .option-wrap {
    height: 100%;
    width: 100%;
    padding: 10px 30px;
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
