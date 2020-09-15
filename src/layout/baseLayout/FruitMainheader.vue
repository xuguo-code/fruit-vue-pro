<template>
  <header class="main-header">
    <aside :class="['main-header-collapse']" @click="menuCollapseChange">
      <svg-icon
        class="menu-btn"
        :fill="$_theme_mixin.activeTextColor"
        :icon-name="isCollapse ? 'menu-open' : 'menu-close'"
      />
    </aside>
    <div class="breadcrumb-wrap">
      <fruit-breadcrumb />
    </div>
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
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  text-align: left;
  .main-header-collapse {
    margin: 0 20px 0 0;
    height: 16px;
    width: 16px;
    cursor: pointer;
  }
}
</style>
