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
// 插件
import './plugins'
// 混入
import ThemeMixin from './mixins/themeMixin'
import AppMixin from './mixins/appMixin'
// 指令
import AllDirectives from './directives'
// 插件聚合安装
composeVueUse(Vue)(Fragment.Plugin, AllComps, AllLayout, ThemeMixin, AllDirectives, AppMixin)
