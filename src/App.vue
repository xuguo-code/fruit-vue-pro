<template>
  <div id="app">
    <baise-layout />
  </div>
</template>

<script>
import BaiseLayout from '@/layout/BaiseLayout'

export default {
  name: 'App',
  components: {
    BaiseLayout
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
