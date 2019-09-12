<template>
  <main class="container">
    <header>
      <h1 v-tab>Agregar un pokemon a mi colección</h1>
    </header>
    <article class="form-card-container">
      <form @submit.prevent="createPokemon">
        <div class="input-group-left">
          <label for="name">Nombre del Pokemon</label>
          <input
            type="text"
            name="name"
            id="name"
            class="input-box"
            placeholder="Nombre"
            aria-placeholder="Nombre"
            maxlength="100"
            v-model="name"
          />

          <label for="type">De que tipo es?</label>
          <input
            type="text"
            name="type"
            id="type"
            class="input-box"
            placeholder="Ej. Agua"
            aria-placeholder="Ej. Agua"
            maxlength="100"
            v-model="type"
          />
          <label for="imageUrl">Url de su imagen</label>
          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            class="input-box"
            placeholder="Pegar la url aquí"
            aria-placeholder="Pegar la url aquí"
            maxlength="100"
            v-model="imageUrl"
          />
          <button
            :aria-pressed="pokemonSuccess"
            type="submit"
            class="secondary-btn"
            aria-label="Este boton sirve para agregar un pokemon a la lista"
          >Agregar</button>
        </div>
        <div class="input-group-right">
          <label for="description">Cómo es el pokemon?</label>
          <textarea
            type="text"
            name="description"
            id="description"
            class="input-box"
            placeholder="Descripción..."
            aria-placeholder="Pegar la url aquí"
            v-model="description"
          />
        </div>
      </form>
    </article>
  </main>
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
      imageUrl: "",
      pokemonSuccess: false
    };
  },
  methods: {
    createPokemon() {
      const formData = {
        name: this.name,
        description: this.description,
        type: this.type,
        imageUrl: this.imageUrl
      };
      axios
        .post(`http://localhost:5000/pokemon/add`, formData)
        .then(res => {
          this.pokemonSuccess = !this.pokemonSuccess;
          this.$router.push("/");
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
.form-card-container {
  background-color: #f3f9f9;
  border-radius: 5px;
  padding: 20px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 20px;
}
.form-card-container input,
.form-card-container textarea {
  width: 100%;
}
.form-card-container button {
  width: 100%;
  margin-top: 20px;
}
form {
  display: flex;
  text-align: left;
}
.input-group-left {
  width: 50%;
  padding-right: 20px;
}
.input-group-right {
  width: 50%;
}
.input-group-right textarea {
  min-height: 90%;
}
</style>