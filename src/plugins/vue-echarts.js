import VueEcharts from 'vue-echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/axisPointer'
import 'echarts/lib/component/title'

export default {
  install(Vue) {
    Vue.component('VChart', VueEcharts)
  }
}
