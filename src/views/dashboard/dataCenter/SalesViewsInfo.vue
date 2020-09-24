<template>
  <el-card
    class="sales-views-wrap"
    :body-style="{ padding: '10px 15px' }"
    :shadow="'hover'"
    v-bind="$attrs"
  >
    <el-tabs v-model="activeName">
      <el-tab-pane label="销售金额" name="sales">
        <section class="chart-wrap">
          <div class="left">
            <v-chart :options="sales" />
          </div>
          <div class="right">
            <ranking title="销售排行榜" :rank-data="salesRank" />
          </div>
        </section>
      </el-tab-pane>
      <el-tab-pane label="访问量" name="views" :lazy="true">
        <section class="chart-wrap">
          <div class="left">
            <v-chart ref="viewsRef" :options="views" />
          </div>
          <div class="right">
            <ranking title="销售排行榜" :rank-data="salesRank" />
          </div>
        </section>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import 'echarts/lib/chart/bar'

const BaseChartConfig = {
  tooltip: {},
  xAxis: {
    type: 'category',
    axisTick: {
      show: false
    }
  },
  yAxis: {
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    splitLine: {
      lineStyle: {
        type: 'dotted'
      }
    }
  },
  grid: {
    top: 60,
    bottom: 40,
    left: 50,
    right: 50
  }
}

const FakeRank = [
  {
    name: '1号店',
    data: 1456.3
  },
  {
    name: '2号店',
    data: 1356.3
  },
  {
    name: '3号店',
    data: 1256.3
  },
  {
    name: '4号店',
    data: 1156.3
  },
  {
    name: '5号店',
    data: 1056.3
  }
]

export default {
  name: 'SalesViewsInfo',
  data() {
    return {
      activeName: 'sales',
      salesRank: FakeRank
    }
  },
  computed: {
    sales: vm =>
      Object.assign({}, BaseChartConfig, {
        title: {
          text: '销售金额',
          left: 10,
          top: 5,
          textStyle: {
            fontSize: 18,
            fontWeight: 700,
            color: '#606266'
          }
        },
        dataset: {
          source: [
            ['一月', 100],
            ['二月', 200],
            ['三月', 150],
            ['四月', 80],
            ['五月', 300],
            ['六月', 210],
            ['七月', 140],
            ['八月', 200]
          ]
        },
        series: [
          {
            type: 'bar',
            barWidth: '30%',
            color: vm.$_mixin_theme['--color-primary']
          }
        ]
      }),
    views: vm =>
      Object.assign({}, BaseChartConfig, {
        title: {
          text: '访问量',
          left: 10,
          top: 5,
          textStyle: {
            fontSize: 18,
            fontWeight: 700,
            color: '#606266'
          }
        },
        dataset: {
          source: [
            ['一月', 200],
            ['二月', 130],
            ['三月', 250],
            ['四月', 180],
            ['五月', 100],
            ['六月', 110],
            ['七月', 240],
            ['八月', 200]
          ]
        },
        series: [
          {
            type: 'bar',
            barWidth: '30%',
            color: vm.$_mixin_theme['--color-primary']
          }
        ]
      })
  }
}
</script>

<style lang="scss" scoped>
.sales-views-wrap {
  .chart-wrap {
    display: flex;
    height: 350px;
    .left {
      flex: 1;
    }
    .right {
      box-sizing: border-box;
      width: 33.33%;
      padding: 0 0 0 50px;
      flex: 0 0 auto;
    }
  }
}
// 复写 charts 宽高
.echarts {
  width: 100%;
  height: 100%;
}
// 复写 tabs 样式
/deep/ .el-tabs {
  .el-tabs__nav-wrap::after {
    height: 1px;
    background-color: $--color-border-4;
  }
  .el-tabs__nav {
    .el-tabs__item {
      height: 50px;
      font-size: $--font-size-title-sm;
      font-weight: $--font-weight-normal;
    }
  }
}
</style>
