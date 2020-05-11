<template>
  <div>
    <fruit-header />
    <fruit-slide />
    <router-view />
    <fruit-footer />
  </div>
</template>

<script>
import FruitHeader from './baseLayout/FruitHeader'
import FruitFooter from './baseLayout/FruitFooter'
import FruitSlide from './baseLayout/FruitSlide'
export default {
  name: 'BaiseLayout',
  components: {
    FruitHeader,
    FruitSlide,
    FruitFooter
  }
}
</script>

<style lang="scss" scoped></style>
