<template>
  <form action="/pokemon/add" method="POST">
      <div class="input-group">
        <label for="name">Please add a pokemon name</label>
        <input type="text" name="name" id="name" class="input-box"
          placeholder="Pokemon name" maxlength="100" v-bind="name">
      </div>
      <div class="input-group">
        <label for="description">How is this pokemon?</label>
        <input type="text" name="description" id="description" class="input-box"
          placeholder="Pokemon description" maxlength="100" v-bind="description">
      </div>
      <div class="input-group">
        <label for="type">What type is it?</label>
        <input type="text" name="type" id="type" class="input-box"
          placeholder="Pokemon type" maxlength="100" v-bind="type">
      </div>
      <div class="input-group">
        <label for="imageUrl">Show us a picture</label>
        <input type="text" name="imageUrl" id="imageUrl" class="input-box"
          placeholder="Pokemon image" maxlength="100" v-bind="imageUrl">
      </div>
      <button type="submit" @click="createPokemon">Submit</button>
    </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PokemonList',
  components: {
    name: "",
    description: "",
    type: "",
    imageUrl: ""
  },
  mounted() {
    console.log('mounted')
  },
  methods: {
    createPokemon() {
      const formData = {
          name: this.name,
    description: this.description,
    type: this.type,
    imageUrl: this.imageUrl
      };
      console.log(formData)
    }
  }
}
</script>

<style scoped>

</style>