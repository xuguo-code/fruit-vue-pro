import VueEcharts from 'vue-echarts'

export default {
  name: 'echarts',
  install(Vue) {
    Vue.component('VueEcharts', VueEcharts)
  }
}
