<template>
  <div id="app">
    <MainLayout>
      <router-view />
    </MainLayout>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import GlobalComponenet from './components/global-componenet.vue'
// eslint-disable-next-line no-unused-vars
import Mainmenu from './components/Mainmenu.vue'
// eslint-disable-next-line no-unused-vars
import Parent from './components/parent.vue'
import MainLayout from './components/layouts/MainLayout.vue'

export default {
  name: 'App',
  components: {
    MainLayout,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#flexcontainer {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
</style>
