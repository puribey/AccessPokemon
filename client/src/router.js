import Vue from 'vue'
import Router from 'vue-router'
import PokemonList from './views/PokemonList.vue'
import PokemonCreate from './views/PokemonCreate.vue'

Vue.use(Router)

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: PokemonList,
      meta: {
        title: "Pokemon List Page"
      }
    },
    {
      path: "/add",
      name: "add",
      component: PokemonCreate,
      meta: {
        title: "Create Pokemon Page"
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;