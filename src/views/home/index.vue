<template>
  <div>
    首页
    <span>
      {{ formHomeVuex }}
    </span>
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

<style lang="scss" scoped></style>
