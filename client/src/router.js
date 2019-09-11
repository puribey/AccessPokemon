import Vue from 'vue'
import Router from 'vue-router'
import PokemonList from './views/PokemonList.vue'
import PokemonCreate from './views/PokemonCreate.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: PokemonList
    },
    {
      path: "/create",
      name: "create",
      component: PokemonCreate
    }
  ]
});
