<template>
  <chart-card class="views" title="交易量" total="5,000">
    <template #default>
      <v-chart :options="bar" />
    </template>
    <template #bottom>
      <div class="summary">日均交易量：800</div>
    </template>
  </chart-card>
</template>

<script>
import 'echarts/lib/chart/bar'

export default {
  name: 'Trading',
  computed: {
    bar: vm => ({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        show: false
      },
      yAxis: {
        show: false
      },
      grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },
      series: {
        type: 'bar',
        data: [80, 100, 200, 334, 390, 330, 220],
        showBackground: true,
        barWidth: '50%',
        color: vm.$_mixin_theme['--color-primary']
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
