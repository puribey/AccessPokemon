import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.directive("tab", function(el, binding) {
  // eslint-disable-next-line
  console.log(binding.arg);
  el.tabIndex = !binding ? 0 : binding.arg;
});

Vue.directive("focus", {
  inserted: function(el) {
    el.focus();
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
