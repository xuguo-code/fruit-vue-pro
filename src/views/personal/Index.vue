<template>
  <div>
    <h2>个人中心</h2>
    <span>{{ personalData }}</span>
    <span v-permission="['admin']">测试权限指令</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PersonalIndex',
  computed: {
    ...mapGetters('personal', {
      personalData: 'personalData'
    })
  }
}
</script>

<style lang="scss" scoped>
span {
  display: block;
  margin: 10px auto;
  color: $--color-primary;
}
</style>
