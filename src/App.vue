<template>
  <div id="app">
    <home class="home"/>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import GlobalComponenet from './components/global-componenet.vue'
// eslint-disable-next-line no-unused-vars
import Mainmenu from './components/Mainmenu.vue'
// eslint-disable-next-line no-unused-vars
import Parent from './components/parent.vue'
import Home from './components/views/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
body,
html {
  height: 100%;
  margin: 0;
}
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.mainContainer {
  display: flex;
  justify-content: flex-start;
}

.home {
  color: black;
  background-color: white;
}
</style>
