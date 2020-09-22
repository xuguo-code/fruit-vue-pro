<template>
  <chart-card class="sales" title="销售金额" total="￥10,000">
    <template #default>
      <div class="lifts-wrap">
        <lifts direction="up"> 日同比增长 <span>100%</span> </lifts>
        <lifts direction="down"> 月同比下降 <span>10%</span> </lifts>
      </div>
    </template>
    <template #bottom>
      <div class="summary">日均销售额：￥10000</div>
    </template>
  </chart-card>
</template>

<script>
export default {
  name: 'Sales'
}
</script>

<style lang="scss" scoped>
.sales {
  .lifts-wrap {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: $--font-size-base-sm;
    color: $--color-text-conventional;
    span {
      margin: 0 5px;
      font-weight: $--font-weight-bold;
    }
  }
}
</style>
