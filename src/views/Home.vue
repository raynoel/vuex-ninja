<template>
  <div class="home">
    <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two>
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
  props: ['products'],

};
</script>




<style lang="scss">
</style>