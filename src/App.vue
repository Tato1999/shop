<template>
  <router-view/>
</template>

<script>
import homePage from './pages/home.vue'
import morepage from './pages/morepage.vue'
import cardpage from './pages/card.vue'

export default {
  name: 'App',
  components: {
    homePage,
    morepage,
    cardpage
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
</style>
