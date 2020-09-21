import Vue from 'vue'
const plugins = require.context('./', false, /\.js$/)

plugins
  .keys()
  .map(plugins)
  .forEach(({ default: plugin }) => {
    plugin && plugin.install && Vue.use(plugin)
  })
