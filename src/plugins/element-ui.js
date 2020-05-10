import { Button } from 'element-ui'
let AllComp = { Button }
// 注册组件
export default {
  install(Vue) {
    Object.keys(AllComp).forEach(key => {
      Vue.component(AllComp[key].name, AllComp[key])
    })
  }
}
