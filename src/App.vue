<template>
  <div id="app">
    <img src="./assets/logo.png">
    <SignIn></SignIn>
  </div>
</template>

<script>
import Hello from './components/Hello'
import SignIn from './views/SignIn'

export default {
  name: 'app',
  components: {
    SignIn
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
  margin-top: 60px;
}
</style>
