<template>
  <main class="container">
    <header>
      <h1 v-tab:10>Mi accesible colección de pokemon</h1>
    </header>
    <article class="pokemon-list-wrapper" v-focus>
      <div :v-if="pokemons.length > 0" v-for="(pokemon,index) in pokemons" :key="pokemon.id">
        <PokemonInfo v-focus :data="pokemon" :indexNum="index"/>
      </div>
      <div v-if="pokemons.length === 0" class="no-pokemon-card" v-tab:8>No hay pokemones en tu colección</div>
    </article>
  </main>
</template>

<script>
import PokemonInfo from "../components/PokemonInfo";
import axios from "axios";

export default {
  name: "PokemonList",
  components: {
    PokemonInfo
  },
  data() {
    return {
      pokemons: []
    };
  },
  mounted() {
    axios
      .get(`http://localhost:5000/pokemon`)
      .then(res => {
        this.pokemons = res.data;
      })
      .catch(e => {
        // eslint-disable-next-line
        console.log(e);
      });
  }
};
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
.pikachu-img {
  width: 200px;
}
.pokemon-list-wrapper {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  height: 80vh;
  overflow-y: scroll;
  padding: 20px;
  border-radius: 5px;
}
.no-pokemon-card {
  background-color: #f3f9f9;
  height: 50px;
  border-radius: 5px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
