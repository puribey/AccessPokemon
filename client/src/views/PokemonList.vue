<template>
  <div class="hello">
    <img src="../assets/helloPikachu.png" alt="Pikachu"/>
    <h1>Bienvenidos al Accesible mundo de Pokemon</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PokemonList',
  components: {
    
  },
  mounted() {
    // eslint-disable-next-line
    console.log('created')
    axios.get(`http://localhost:5000/pokemon`)
    .then(res => {
      // eslint-disable-next-line
      console.log(res)
      // eslint-disable-next-line
      console.log("hello")
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
