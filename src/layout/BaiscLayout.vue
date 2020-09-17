<template>
  <div>
    <!-- 头部 -->
    <fruit-header />
    <el-container class="main-wrap">
      <!-- 侧边 -->
      <fruit-aside />
      <!-- 主要部分 -->
      <section class="content-wrap">
        <!-- main 头部 -->
        <fruit-main-header />
        <el-main>
          <!-- 内容区域 -->
          <router-view />
          <!-- 尾部 -->
        </el-main>
        <fruit-footer />
      </section>
    </el-container>
  </div>
</template>

<script>
import FruitHeader from './baseLayout/FruitHeader'
import FruitFooter from './baseLayout/FruitFooter'
import FruitAside from './baseLayout/FruitAside'
import FruitMainHeader from './baseLayout/FruitMainheader'

export default {
  name: 'BaiscLayout',
  components: {
    FruitHeader,
    FruitAside,
    FruitFooter,
    FruitMainHeader
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
    padding: 0 20px 20px 20px;
    overflow: hidden auto;
    background: #f0f2f5;
    .el-main {
      max-width: 1200px;
      margin: 0 auto;
      background: #fff;
    }
  }
}
</style>
