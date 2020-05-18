<template>
  <div>
    <el-container class="content-wrap">
      <!-- 头部 -->
      <el-header>
        <fruit-header />
      </el-header>
      <el-container>
        <!-- 侧边 -->
        <el-aside width="auto">
          <fruit-aside />
        </el-aside>
        <!-- 主要部分 -->
        <el-container>
          <el-main>
            <fruit-main-header />
            <router-view />
          </el-main>
          <!-- 尾部 -->
          <el-footer>
            <fruit-footer />
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import FruitHeader from './baseLayout/FruitHeader'
import FruitFooter from './baseLayout/FruitFooter'
import FruitAside from './baseLayout/FruitAside'
import FruitMainHeader from './baseLayout/FruitMainheader'

export default {
  name: 'BaiseLayout',
  components: {
    FruitHeader,
    FruitAside,
    FruitFooter,
    FruitMainHeader
  }
}
</script>

<style lang="scss" scoped>
.content-wrap {
  height: 100vh;
  .el-main {
    padding: 0 20px 20px 20px;
  }
}
</style>
