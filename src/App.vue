<template>
  <div id="app">
    <h1>Hello world</h1>
    <img src="./assets/logo.png">
    <div id="hadits-content">
      <router-view></router-view>
    </div>
    <div id="hadits-sidebar">
      <hadits-sidebar></hadits-sidebar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
