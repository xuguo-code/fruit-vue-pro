<template>
  <header class="header-wrap">
    <div class="left" @click="backToHome">
      <img :src="logoImg" />
      <h2>Fruit-vue-pro</h2>
    </div>
  </header>
</template>

<script>
export default {
  name: 'FruitHeader',
  data() {
    return {
      logoImg: require('@/assets/logo.png')
    }
  },
  methods: {
    // 返回到首页
    backToHome() {
      const curPath = this.$router?.currentRoute?.path
      if (curPath !== '/index') {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header-wrap {
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  border-bottom: solid 1px $--color-border-4;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  // background: $--color-background;
  // color: $--color-text;
  background: $--color-wihte;
  color: $--color-text-main;
  .left {
    float: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    img {
      width: 20px;
      height: 20px;
      margin: 0 10px;
    }
    h2 {
      margin: 0;
      line-height: 60px;
    }
  }
}
</style>
