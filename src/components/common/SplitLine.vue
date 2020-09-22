<template>
  <div class="split-line" v-bind="$attrs"></div>
</template>

<script>
export default {
  name: 'SplitLine'
}
</script>

<style lang="scss" scoped>
.split-line {
  width: 100%;
  height: 1px;
  margin: 10px 0;
  background: $--color-border-2;
}
</style>
