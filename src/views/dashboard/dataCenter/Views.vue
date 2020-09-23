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
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
          lineStyle: {
            color: '#DCDFE6'
          }
        }
      },
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
      dataset: {
        source: [
          ['1月', 10],
          ['2月', 30],
          ['3月', 25],
          ['4月', 35],
          ['5月', 20],
          ['6月', 40],
          ['7月', 30],
          ['8月', 20]
        ]
      },
      series: {
        type: 'line',
        smooth: true,
        areaStyle: {
          color: vm.$_mixin_theme['--color-primary']
        },
        lineStyle: {
          width: 0
        },
        itemStyle: {
          opacity: 0,
          color: vm.$_mixin_theme['--color-primary']
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
