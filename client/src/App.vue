<template>
  <div id="app">
    <img alt="Imagen de pikachu saludando" src="./assets/helloPikachu.png">
    <PokemonList/>
  </div>
</template>

<script>
import PokemonList from './components/PokemonList'

export default {
  name: 'app',
  components: {
    PokemonList
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
