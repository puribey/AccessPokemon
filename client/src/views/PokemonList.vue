<template>
  <div class="hello">
    <img src="../assets/helloPikachu.png" alt="Pikachu"/>
    <h1>Bienvenidos al Accesible mundo de Pokemon</h1>
    <div v-for="pokemon in pokemons" :key="pokemon.id">
    <PokemonInfo :data="pokemon"/>
  </div>
  </div>
</template>

<script>
import PokemonInfo from '../components/PokemonInfo'
import axios from 'axios'

export default {
  name: 'PokemonList',
  components: {
    PokemonInfo
  },
  data() {
    return {
      pokemons: []
    };
  },
  mounted() {
    axios.get(`http://localhost:5000/pokemon`)
    .then(res => {
      this.pokemons = res.data
    })
    .catch(e => {
      // eslint-disable-next-line
      console.log(e)
    })
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
