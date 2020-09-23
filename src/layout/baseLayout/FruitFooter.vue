<template>
  <footer class="footer-wrap">
    <div class="link">
      <a href="https://github.com/xuguo-code/fruit-vue-pro" target="_blank">Github</a>
      <a href="https://github.com/xuguo-code" target="_blank">@xuguo-code</a>
    </div>
    <div class="copyright">
      Copyright © 2020
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FruitFooter'
}
</script>

<style lang="scss" scoped>
.footer-wrap {
  padding: 20px 0 0 0;
  text-align: center;
  font-size: $--font-size-base;
  .link {
    a {
      text-decoration: none;
      color: $--color-success;
      margin: 0 5px;
    }
  }
  .copyright {
    margin: 8px 0 0 0;
    color: $--color-text-conventional;
  }
}
</style>
