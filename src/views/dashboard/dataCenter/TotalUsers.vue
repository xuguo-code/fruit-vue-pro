<template>
  <chart-card class="views" title="累计用户增量" total="5,000">
    <template #default>
      <v-chart :options="bar" />
    </template>
    <template #bottom>
      <div class="summary">
        <lifts direction="up"> 日同比上涨 <span>10%</span> </lifts>
        <lifts direction="down"> 月同比下降 <span>5%</span> </lifts>
      </div>
    </template>
  </chart-card>
</template>

<script>
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/custom'

export default {
  name: 'TotalUsers',
  computed: {
    bar: vm => ({
      yAxis: {
        type: 'category',
        show: false
      },
      xAxis: {
        type: 'value',
        show: false
      },
      grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },
      series: [
        {
          type: 'bar',
          data: [200],
          stack: '总量',
          barWidth: '10',
          color: vm.$_mixin_theme['--color-primary']
        },
        {
          type: 'bar',
          data: [300],
          stack: '总量',
          color: vm.$_mixin_theme['--color-secondary']
        },
        {
          type: 'custom',
          data: [200],
          stack: '总量',
          renderItem: function(params, api) {
            const value = api.value(0)
            const point = api.coord([value])
            return {
              type: 'group',
              position: point,
              children: [
                {
                  type: 'path',
                  shape: {
                    d:
                      'M860.553846 748.307692H163.446154c-19.692308 0-33.476923-25.6-17.723077-43.323077l340.676923-417.476923c11.815385-15.753846 37.415385-15.753846 49.230769 0l344.615385 417.476923c13.784615 17.723077 1.969231 43.323077-19.692308 43.323077z',
                    x: -5,
                    y: 6,
                    width: 8,
                    height: 8
                  },
                  style: {
                    fill: vm.$_mixin_theme['--color-primary']
                  }
                },
                {
                  type: 'path',
                  shape: {
                    d:
                      'M163.446154 275.692308h697.107692c19.692308 0 33.476923 25.6 17.723077 43.323077L537.6 736.492308c-11.815385 15.753846-37.415385 15.753846-49.230769 0L143.753846 319.015385c-13.784615-17.723077-1.969231-43.323077 19.692308-43.323077z',
                    x: -5,
                    y: -14,
                    width: 8,
                    height: 8
                  },
                  style: {
                    fill: vm.$_mixin_theme['--color-primary']
                  }
                }
              ]
            }
          }
        }
      ]
    })
  }
}
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
.summary {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: $--font-size-base-sm;
  color: $--color-text-conventional;
  span {
    margin: 0 5px;
    font-weight: $--font-weight-bold;
  }
}
</style>
