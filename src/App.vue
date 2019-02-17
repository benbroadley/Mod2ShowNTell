<template>
  <div id="app">
    <h1>Practice Mod 2 Questions</h1>
    <div role="tablist">
      <accordion v-for="(item, idx) in qAndA" :key="idx" :question="item.q" :answer="item.a" :idx="idx"/>
    </div>
  </div>
</template>

<script>
import qAndA from './assets/qAndA';

export default {
  name: 'app',
  data () {
    return {
      qAndA
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
