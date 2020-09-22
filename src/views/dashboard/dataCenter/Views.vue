<template>
  <chart-card class="views" title="访问量" total="8,000">
    <template #default>
      <v-chart :options="line" />
    </template>
    <template #bottom>
      <div class="summary">日均访问量：1000</div>
    </template>
  </chart-card>
</template>

<script>
import 'echarts/lib/chart/line'

export default {
  name: 'Views',
  computed: {
    line: vm => ({
      xAxis: {
        type: 'category',
        boundaryGap: false,
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
        type: 'line',
        data: [10, 30, 25, 35, 20, 40, 30, 20],
        smooth: true,
        areaStyle: {
          color: vm.$_mixin_theme['--color-primary']
        },
        lineStyle: {
          width: 0
        },
        itemStyle: {
          opacity: 0
        }
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
