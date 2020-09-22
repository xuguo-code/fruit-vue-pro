<template>
  <section class="data-center">
    <el-row :gutter="20">
      <el-col :span="6">
        <sales />
      </el-col>
      <el-col :span="6">
        <views />
      </el-col>
      <el-col :span="6">
        <trading />
      </el-col>
      <el-col :span="6">
        <total-users />
      </el-col>
    </el-row>
  </section>
</template>

<script>
import Sales from './dataCenter/Sales'
import Views from './dataCenter/Views'
import Trading from './dataCenter/Trading'
import TotalUsers from './dataCenter/TotalUsers'

export default {
  name: 'Index',
  components: {
    Sales,
    Views,
    Trading,
    TotalUsers
  }
}
</script>

<style lang="scss" scoped>
.data-center {
  overflow: hidden;
}
</style>
