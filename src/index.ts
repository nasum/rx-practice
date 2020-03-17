import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";

Vue.use(Vuex);

import store from "./store";

new Vue({
  render: h => h(App),
  store
}).$mount("#app");
