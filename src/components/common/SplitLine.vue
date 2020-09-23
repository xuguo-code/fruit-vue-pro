<template>
  <div class="split-line" :style="{ margin: `${margin}px 0` }" v-bind="$attrs"></div>
</template>

<script>
export default {
  name: 'SplitLine',
  props: {
    margin: {
      type: Number,
      default: 10
    }
  }
}
</script>

<style lang="scss" scoped>
.split-line {
  width: 100%;
  height: 1px;
  background: $--color-border-2;
}
</style>
