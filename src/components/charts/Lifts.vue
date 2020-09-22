<template>
  <div class="lifts">
    <slot />
    <svg-icon :icon-name="iconName" :class="['lifts-icon', `lifts-icon-${direction}`]" />
  </div>
</template>

<script>
export default {
  name: 'Lifts',
  props: {
    direction: {
      type: String,
      required: false,
      default: 'up'
    }
  },
  computed: {
    iconName: vm => `lifts-${vm.direction}`
  }
}
</script>

<style lang="scss" scoped>
.lifts {
  display: flex;
  align-items: center;
  &-icon {
    margin-left: 5px;
    width: 10px;
    height: 10px;
    &-up {
      fill: $--color-success;
    }
    &-down {
      fill: $--color-danger;
    }
  }
}
</style>
