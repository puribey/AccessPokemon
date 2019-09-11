<template>
  <form @submit.prevent="createPokemon">
    <div class="input-group">
      <label for="name">Please add a pokemon name</label>
      <input
        type="text"
        name="name"
        id="name"
        class="input-box"
        placeholder="Pokemon name"
        maxlength="100"
        v-model="name"
      />
    </div>
    <div class="input-group">
      <label for="description">How is this pokemon?</label>
      <input
        type="text"
        name="description"
        id="description"
        class="input-box"
        placeholder="Pokemon description"
        maxlength="100"
        v-model="description"
      />
    </div>
    <div class="input-group">
      <label for="type">What type is it?</label>
      <input
        type="text"
        name="type"
        id="type"
        class="input-box"
        placeholder="Pokemon type"
        maxlength="100"
        v-model="type"
      />
    </div>
    <div class="input-group">
      <label for="imageUrl">Show us a picture</label>
      <input
        type="text"
        name="imageUrl"
        id="imageUrl"
        class="input-box"
        placeholder="Pokemon image"
        maxlength="100"
        v-model="imageUrl"
      />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "PokemonList",
  components: {},
  data() {
    return {
      name: "",
      description: "",
      type: "",
      imageUrl: ""
    };
  },
  mounted() {
    // eslint-disable-next-line
    console.log("mounted");
  },
  methods: {
    createPokemon() {
      const formData = {
        name: this.name,
        description: this.description,
        type: this.type,
        imageUrl: this.imageUrl
      };
      axios.post(`http://localhost:5000/pokemon/add`, formData)
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
};
</script>

<style scoped>
</style>