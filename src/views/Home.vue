<template>
  <div class="home">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>




<script>
import ProductListOne from '../components/ProductListOne.vue'
import ProductListTwo from '../components/ProductListTwo.vue'

export default {
  name: "Home",
  components: {
    ProductListOne,
    'product-list-two': ProductListTwo,
  },
};
</script>




<style lang="scss">
</style>