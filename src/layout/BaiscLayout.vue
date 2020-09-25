<template>
  <div>
    <!-- 头部 -->
    <fruit-header />
    <el-container class="main-wrap">
      <!-- 侧边 -->
      <fruit-aside />
      <!-- 主要部分 -->
      <section class="content-wrap">
        <component :is="$_mixin_isTab ? 'TabContent' : 'NoTabContent'" />
      </section>
    </el-container>
  </div>
</template>

<script>
import FruitHeader from './baseLayout/FruitHeader'
import FruitAside from './baseLayout/FruitAside'
import NoTabContent from './baseLayout/NoTabContent'
import TabContent from './baseLayout/TabContent'

export default {
  name: 'BaiscLayout',
  components: {
    FruitHeader,
    FruitAside,
    NoTabContent,
    TabContent
  }
}
</script>

<style lang="scss" scoped>
.main-wrap {
  position: fixed;
  top: 60px;
  bottom: 0;
  left: 0;
  right: 0;
  .content-wrap {
    flex: 1;
  }
}
</style>
