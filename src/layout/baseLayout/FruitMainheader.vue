<template>
  <header class="main-header">
    <div class="breadcrumb-wrap">
      <fruit-breadcrumb />
    </div>
  </header>
</template>

<script>
export default {
  name: 'FruitMainHeader'
}
</script>

<style lang="scss" scoped>
.main-header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  text-align: left;
}
</style>
