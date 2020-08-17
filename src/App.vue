<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view v-bind:products="products" />
  </div>
</template>



<script>
export default {
  data() {
    return {
      products: [
        { name: 'Banana Skin', price: 20 },
        { name: 'Shiny Star', price: 40 },
        { name: 'Green Shells', price: 60 },
        { name: 'Red Shells', price: 80 },
      ]
    }
  }
};
</script>


<style lang="scss">
body{
  font-family: Ubuntu;
  color: #555;
}
</style>
