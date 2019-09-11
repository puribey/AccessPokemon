<template>
  <div class="pokemon-card">
    <p>{{data.name}}</p>
    <p>{{data.description}}</p>
    <p>{{data.type}}</p>
    <button @click="onDeletePokemon">Submit</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PokemonList",
  components: {},
  props: {
    data: Object
  },
  data() {
    return {};
  },
  methods: {
    onDeletePokemon() {
      axios
        .post(`http://localhost:5000/pokemon/delete/${this.data.id}`)
        .then(res => {
          //   eslint-disable-next-line
          console.log(res);
        })
        .catch(e => {
          // eslint-disable-next-line
          console.log(e);
        });
    }
  }
};
</script>

<style scoped>
</style>