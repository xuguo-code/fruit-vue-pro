<template>
  <div :class="{ 'drawer-wrap': true, 'drawer-open': drawer }">
    <div class="drawer-mask" @click="drawer = !drawer"></div>
    <div class="drawer-content">
      <section class="content-main">
        <h2>{{ $t('drawer.title') }}</h2>
        <section class="option-wrap">
          <div class="option-item">
            <span class="sub-title">{{ $t('drawer.themeMode') }}</span>
            <el-radio-group v-model="themeMode" size="small">
              <el-radio v-for="t in themeModes" :key="t" :label="t"></el-radio>
            </el-radio-group>
          </div>
          <split-line :margin="20" />
          <div class="option-item">
            <span class="sub-title">{{ $t('drawer.themeColor') }}</span>
            <div class="theme-color" @click="proxyThemeColorClick">
              <div
                v-for="t in themeColors"
                :key="t.key"
                :data-theme-key="t.key"
                class="theme-color-item"
                :style="{ backgroundColor: t.color }"
              >
                <svg-icon
                  v-if="themeColor === t.key"
                  class="theme-color-selected"
                  icon-name="hook"
                />
              </div>
            </div>
            <split-line :margin="20" />
            <div class="option-item">
              <span class="sub-title">{{ $t('drawer.isTab') }}</span>
              <el-switch v-model="isTab" active-text="开启" inactive-text="关闭"></el-switch>
            </div>
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
    let themeColors = themes
      .map(t => ({ key: t.key, color: t['--color-primary'] }))
      .filter(t => t.key !== 'dark' && t.key !== 'light')
    return {
      drawer: false,
      themeColors,
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
    },
    isTab: {
      get() {
        return this.$store.getters['app/isTab'] || false
      },
      set(is) {
        this.$store.commit('app/setTab', is)
      }
    }
  },
  methods: {
    proxyThemeColorClick(e) {
      const themeColorKey = e?.target.dataset?.themeKey
      if (themeColorKey) {
        this.themeColor = themeColorKey
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
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    padding: 10px 30px;
    text-align: left;
    .option-item {
      & + .option-item {
        margin: 20px 0 0 0;
      }
      .sub-title {
        display: block;
        margin: 0 0 20px 0;
        font-size: $--font-size-base;
        font-weight: $--font-weight-base;
        color: $--color-text-conventional;
      }
      .theme-color-item {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        width: 20px;
        height: 20px;
        border-radius: $--radius-sm;
        margin: 5px;
        cursor: pointer;
        .theme-color-selected {
          width: 15px;
          height: 15px;
          fill: $--color-wihte;
        }
      }
    }
  }
}
</style>
