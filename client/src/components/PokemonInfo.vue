<template>
  <div class="pokemon-card" :aria-label="'Carta de detalle de ' + data.name" v-tab:6>
    <div class="pokemon-card-flex">
      <div class="pokemon-card-img" :style="{backgroundImage: `url(${data.imageUrl})`}" role="img" :aria-label="'Imagen del pokemon' + data.name" v-tab:5></div>
      <div class="pokemon-card-info">
        <p class="pokemon-card-name" :aria-label="'Nombre del pokemon' + data.name" v-tab:4>{{data.name}}</p>
        <p v-tab:3>{{data.description}}</p>
        <p v-tab:2>
          <span>Tipo:</span>
          {{data.type}}
        </p>
        <button role="button" @click="onDeletePokemon" @keydown.enter="onDeletePokemon" class="secondary-btn" :aria-label="'Este boton srive para borrar a ' + data.name + ' de la base de datos'" v-tab:1>Sacar de la lista</button>
      </div>
    </div>
  </div>
  
</template>

<script>

import axios from "axios";
export default {
  name: "PokemonList",
  components: {},
  props: {
    data: Object,
    indexNum: Number
  },
  data() {
    return {};
  },
  methods: {
    onDeletePokemon() {
      axios
        .post(`http://localhost:5000/pokemon/delete/${this.data.id}`)
        .then(res => {
          this.$router.go('/');
        })
        .catch(e => {
          // eslint-disable-next-line
          console.log(e);
        });
    }
  },
  ready() {
    this.update();
  }
};
</script>



<style scoped>
.pokemon-card {
  background-color: #f3f9f9;
  height: 230px;
  border-radius: 5px;
  margin-bottom: 20px;
}
.pokemon-card-flex {
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.pokemon-card-info {
  padding: 20px;
  position: relative;
  text-align: left;
  width: 67%;
}
.pokemon-card-info p {
  margin-bottom: 10px;
  font-size: 16px;
}
.pokemon-card-info span {
  color:#285bd0;
  font-weight: bold;
}
.pokemon-card-info .pokemon-card-name {
  font-size: 26px;
  font-weight: bold;
  color:#285bd0;
}
.pokemon-card-info .secondary-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 20px;
}
.pokemon-card-img {
  width: 33%;
  height: 100%;
  background-size: cover;
  background-position: center;
}
</style>