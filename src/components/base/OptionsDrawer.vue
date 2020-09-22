<template>
  <div :class="{ 'drawer-wrap': true, 'drawer-open': drawer }">
    <div class="drawer-mask" @click="drawer = !drawer"></div>
    <div class="drawer-content">
      <section class="content-main">
        <h2>配置</h2>
        <section class="option-wrap">
          <div class="option-item">
            <span>主题模式：</span>
            <el-radio-group v-model="themeMode" size="small">
              <el-radio-button v-for="t in themeModes" :key="t" :label="t"></el-radio-button>
            </el-radio-group>
          </div>
          <div class="option-item">
            <span>主题色：</span>
            <el-radio-group v-model="themeColor" size="small">
              <el-radio-button v-for="t in themeKeys" :key="t" :label="t"></el-radio-button>
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
import { themes } from '@/theme'

export default {
  name: 'OptionsDrawer',
  data() {
    let themeKeys = themes.map(t => t.key).filter(t => t !== 'dark' && t !== 'light')
    return {
      drawer: false,
      themeKeys,
      themeModes: ['light', 'dark']
    }
  },
  computed: {
    themeMode: {
      get() {
        return this.$store.getters['app/themeMode'] || 'light'
      },
      set(mode) {
        this.$store.dispatch('app/setThemeMode', mode)
      }
    },
    themeColor: {
      get() {
        return this.$store.getters['app/themeColor'] || 'dark'
      },
      set(color) {
        this.$store.dispatch('app/setThemeColor', color)
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
    background: $--color-wihte;
    transform: translateX(100%);
    box-shadow: $--shadow-deep;
    transition: transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1),
      box-shadow 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
    h2 {
      text-align: center;
      font-size: $--font-size-title;
      font-weight: $--font-weight-bold;
      color: $--color-text-main;
    }
  }
  .drawer-btn {
    position: absolute;
    top: 50%;
    right: 300px;
    padding: 10px;
    border-radius: $--radius-lg 0 0 $--radius-lg;
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
