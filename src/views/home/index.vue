<template>
  <div>
    首页
    <span>
      {{ formHomeVuex }}
    </span>
    <span v-permission="['admin']">测试权限指令</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  computed: {
    ...mapGetters('home', {
      formHomeVuex: 'homeData'
    })
  }
}
</script>

<style lang="scss" scoped>
span {
  color: $--color-primary;
}
</style>
