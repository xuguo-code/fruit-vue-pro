## `vuex` 状态管理

状态管理在项目变大使用变多时，如果全部模块都在入口文件时注册会使得所有代码被打包到首屏需要加载的`chunk`中；
在该项目中利用了抽象出的`module`概念来划分`vuex`的颗粒度，我们任然只需要在`modules`下面写好`vuex`模块代码，
然后在模块路由的根路由的`meta`信息中注册`vuex`字段，并且表明模块名称（需要和`vuex`模块文件同名）；
项目会在何时的时机帮你自动注册该模块。