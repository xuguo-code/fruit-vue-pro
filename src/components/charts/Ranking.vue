<template>
  <section class="ranking">
    <div class="top">
      <h2>{{ title }}</h2>
    </div>
    <div class="content">
      <ul class="rank">
        <li v-for="(item, index) in rankData" :key="item.name" class="rank-item">
          <span :class="{ 'rank-num': true, 'rank-num--top3': index < 3 }">{{ index + 1 }}</span>
          <span class="rank-name">{{ item.name }}</span>
          <span class="rank-data">{{ item.data }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Ranking',
  props: {
    title: {
      type: String,
      required: true
    },
    // [{
    //   name
    //   data
    // }]
    rankData: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.ranking {
  width: 100%;
  height: 100%;
  .top {
    h2 {
      margin: 10px 0;
      color: $--color-text-conventional;
      font-size: $--font-size-title;
      font-weight: $--font-weight-bold;
    }
  }
  .content {
    padding: 10px 20px 20px 5px;
    .rank {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .rank-item {
      padding: 10px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .rank-num {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        color: $--color-wihte;
        background-color: $--color-info;
        font-size: $--font-size-base-sm;
        text-align: center;
        line-height: 20px;
        &--top3 {
          color: $--color-wihte;
          background-color: $--color-primary;
        }
      }
      font-size: $--font-size-base;
      font-weight: $--font-weight-base;
      .rank-name {
        padding: 0 20px 0 50px;
        flex: 1;
        color: $--color-text-conventional;
      }
      .rank-data {
        color: $--color-text-main;
      }
    }
  }
}
</style>
