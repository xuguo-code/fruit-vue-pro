import Vue from 'vue'
// 进度条样式
import 'nprogress/nprogress.css'
// svg
import './assets/icon'
// 扩展
import { composeVueUse } from './utils/common'
// fragment
import Fragment from 'vue-fragment'
// 全局组件
import AllComps from './components'
// 全局layout
import AllLayout from './layout'
// 组件
import Plugins from './plugins/element-ui'
// 主题
import ThemeMixin from './mixins/themeMixin'
// 插件聚合安装
composeVueUse(Vue)(Fragment.Plugin, AllComps, AllLayout, Plugins, ThemeMixin)
