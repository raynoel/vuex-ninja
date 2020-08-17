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
