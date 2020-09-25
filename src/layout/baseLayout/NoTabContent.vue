<template>
  <div class="no-tab">
    <!-- main 头部 -->
    <fruit-main-header />
    <el-main>
      <!-- 内容区域 -->
      <router-view />
      <!-- 尾部 -->
    </el-main>
    <fruit-footer />
  </div>
</template>

<script>
import FruitMainHeader from './FruitMainheader'
import FruitFooter from './FruitFooter'

export default {
  name: 'NoTabContent',
  components: {
    FruitMainHeader,
    FruitFooter
  }
}
</script>

<style lang="scss" scoped>
.no-tab {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0 20px 0 20px;
  overflow: hidden auto;
  background: #f0f2f5;
  .el-main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
    border-radius: $--radius-sm;
  }
}
</style>
