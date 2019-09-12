<template>
  <div id="app">
    <nav>
      <router-link to="/" class="primary-btn">Home</router-link>
      <router-link to="/add" class="secondary-btn">+ Pokemon</router-link>
    </nav>
    <router-view />
    <footer aria-label="Footer">
      <p>Hecho con &hearts; x @Puribey</p>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  width: 100vw;
  height: 100vh;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("./assets/pokemonWall.png");
  overflow-y: scroll;
}
nav {
  position: fixed;
  margin: 20px;
}
nav a, button {
  display: inline-block;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 5px;
  text-transform: uppercase;
  transition: all 0.3s;
}
.primary-btn {
  color: #6993f3;
  background-color: #ffffff;
  border: 1px solid #6993f3;
  margin-right: 10px;
}

.primary-btn:hover {
  color: #ffffff;
  background-color: #6993f3;
  border: 1px solid #6993f3;
}
.secondary-btn {
  color: #ffffff;
  background-color: #6993f3;
  border: 1px solid #6993f3;
}

.secondary-btn:hover {
  color: #6993f3;
  background-color: #ffffff;
  border: 1px solid #6993f3;
}

.container {
  margin-top: 100px;
}

label {
  display: block;
  font-size: 16px;
      margin: 5px 0;
}

input, textarea {
  display: block;
  border: 1px solid #6993f3;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  margin: 0;
  margin-bottom: 10px;
}

footer {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 40px 30px;
  color: #ffffff;
  font-weight: 600;
}
</style>
