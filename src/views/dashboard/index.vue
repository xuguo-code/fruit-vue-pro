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
    <el-row>
      <sales-views-info />
    </el-row>
  </section>
</template>

<script>
import Sales from './dataCenter/Sales'
import Views from './dataCenter/Views'
import Trading from './dataCenter/Trading'
import TotalUsers from './dataCenter/TotalUsers'
import SalesViewsInfo from './dataCenter/SalesViewsInfo'

export default {
  name: 'Index',
  components: {
    Sales,
    Views,
    Trading,
    TotalUsers,
    SalesViewsInfo
  }
}
</script>

<style lang="scss" scoped>
.data-center {
  overflow: hidden;
  .el-row {
    & + .el-row {
      margin-top: 20px;
    }
  }
}
</style>
