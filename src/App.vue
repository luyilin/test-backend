<template>
  <div id="app">
    <Main/>
  </div>
</template>

<script>
import Main from './components/Main/index'

export default {
  name: 'app',

  components: {
    Main
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 0 100px;
}
</style>
