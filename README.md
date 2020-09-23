# vue 中后台解决方案

### 特性

该方案意在解决开发中中心化严重时非常容易出现做一个新的功能需要更改到核心代码以造成代码冲突的问题，使得多分支的`git flow`变为难题；
而当前解决方案采用的就是抽象出一个`module`的概念以模块来承载业务，尽量分离模块与模块之间可能会存在的核心代码耦合类似：
路由配置过于集中、`vuex`首次加载过于庞大、国际化语言配置集中在公用文件夹中配置等等类似的问题；
同时`module`的概念也很好的提供了一个代码分割的颗粒度，能让项目中路由、`vuex`等等影响首屏`bunld`大小的因素以`module`的概念来动态加载。

### 如何开始
```
yarn
```

### 开发环境启动指令
```
yarn serve
```

### 生产环境打包
```
yarn build
```

### autoFix lint 错误
```
yarn lint
```

### 提交代码请执行
```
// 首先通过 git add 或者IDE添加需要提交的变更
// 然后运行
yarn cm
```

### commit msg 规范
> build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交  
> ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle 等)的提交  
> docs：文档更新  
> feat：新增功能  
> merge：分支合并 Merge branch ? of ?  
> fix：bug 修复  
> perf：性能, 体验优化  
> refactor：重构代码(既没有新增功能，也没有修复 bug)  
> style：不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)  
> test：新增测试用例或是更新现有测试  
> revert：回滚某个更早之前的提交  
> chore：不属于以上类型的其他类型  

### 生成 changelog
```
// 第一次生成
yarn release -- --first-release
// 后续生成
yarn release
```
