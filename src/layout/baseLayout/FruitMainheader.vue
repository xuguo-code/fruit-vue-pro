<template>
  <header class="main-header">
    <aside :class="['main-header-collapse']" @click="menuCollapseChange">
      <svg-icon
        class="menu-btn"
        :fill="$_theme_mixin.activeTextColor"
        :icon-name="isCollapse ? 'menu-open' : 'menu-close'"
      />
    </aside>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FruitMainHeader',
  computed: {
    ...mapGetters('global', {
      isCollapse: 'menuIsCollapse'
    })
  },
  methods: {
    menuCollapseChange() {
      this.$store.commit('global/setMenuCollapse')
    }
  }
}
</script>

<style lang="scss" scoped>
.main-header {
  width: 100%;
  text-align: left;
  .main-header-collapse {
    display: inline-block;
    height: 36px;
    width: 36px;
    line-height: 36px;
    text-align: center;
    cursor: pointer;
  }
}
</style>
