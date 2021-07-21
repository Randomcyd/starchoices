<template>
  <div id="app">
    <side-bar></side-bar>
    <main-content></main-content>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'
import MainContent from './components/Content.vue'
export default {
  name: 'App',
  components: {
    SideBar,
    MainContent
  }
}
</script>

<style>
#app {
  width: 100%; height: 100%;display: flex;
}
</style>
