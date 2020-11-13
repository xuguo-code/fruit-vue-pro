<template>
  <header class="header-wrap">
    <div class="left" @click="backToHome">
      <img :src="logoImg" />
      <h2>Fruit-vue-pro</h2>
    </div>
    <div class="center">
      <top-menu />
    </div>
    <div class="right">
      <div class="i18n-wrap">
        <el-dropdown trigger="hover" @command="changeLang">
          <span class="el-dropdown-link">
            <svg-icon class="i18n-icon" icon-name="i18n" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="lang in locales"
              :key="lang"
              :command="lang"
              :disabled="lang === $_mixin_currentLang"
            >
              {{ localesLabel[lang] }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>

<script>
import TopMenu from './TopMenu'
import { RootRouteFullPath } from '@/router/config.routes'

const locales = ['zh-CN', 'en-US']
const localesLabel = {
  'zh-CN': '简体中文',
  'en-US': 'English'
}

export default {
  name: 'FruitHeader',
  components: {
    TopMenu
  },
  data() {
    return {
      logoImg: require('@/assets/logo.png'),
      locales,
      localesLabel
    }
  },
  methods: {
    // 返回到首页
    backToHome() {
      const curPath = this.$router?.currentRoute?.path
      if (curPath !== RootRouteFullPath) {
        this.$router.push('/')
      }
    },
    changeLang(lang) {
      if (locales.includes(lang)) {
        this.$store.dispatch('app/setLanguage', lang)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  border-bottom: solid 1px $--color-border-4;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  background: $--color-wihte;
  color: $--color-text-main;
  z-index: 1000;
  .left {
    float: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    img {
      width: 20px;
      height: 20px;
      margin: 0 10px;
    }
    h2 {
      margin: 0;
      line-height: 60px;
    }
  }
  .center {
    padding: 0 30px;
    box-sizing: border-box;
    flex: 1;
    overflow: auto hidden;
  }
  .right {
    .i18n-wrap {
      .i18n-icon {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }
  }
}
</style>
