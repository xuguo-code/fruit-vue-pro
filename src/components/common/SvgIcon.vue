<template>
  <svg :class="svgClass" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="finalIconName" />
  </svg>
</template>
<script>
export default {
  name: 'SvgIcon',
  props: {
    iconName: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    svgClass() {
      return `svg-icon ${this.className}`
    },
    finalIconName() {
      return `#icon-${this.iconName}`
    }
  }
}
</script>
<style scoped>
.svg-icon {
  height: 1em;
  width: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
