<template>
  <div id="app">
    <!-- 视图展示 -->
    <router-view />
    <!-- 设置抽屉 -->
    <options-drawer />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: $--font-family-base;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
