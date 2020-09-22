<template>
  <el-card :body-style="{ padding: '15px' }" :shadow="'hover'" v-bind="$attrs">
    <div class="card-top">
      <h3 class="title">
        {{ title }}
      </h3>
    </div>
    <div class="card-content">
      <h2 class="total">{{ total }}</h2>
      <div class="content-wrap">
        <slot />
      </div>
    </div>
    <split-line />
    <div class="card-bottom">
      <slot name="bottom" />
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'ChartCard',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    total: {
      type: [Number, String],
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.card-top {
  .title {
    margin: 0;
    font-size: $--font-size-title;
    color: $--color-text-conventional;
  }
}
.card-content {
  padding: 0;
  .total {
    margin: 10px 0;
    color: $--color-text-main;
    font-size: $--font-size-title-lg * 1.25;
    font-weight: $--font-weight-bolder;
  }
  .content-wrap {
    height: 56px;
  }
}
.card-bottom {
  font-size: $--font-size-base;
  color: $--color-text-conventional;
}
</style>
