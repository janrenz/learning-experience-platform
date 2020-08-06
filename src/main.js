import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as Keycloak from "keycloak-js";

Vue.config.productionTip = false;
// todo, only load the mount the vue when we return from `/config/all.json`

fetch("/config/all.json").then(response => {
  // assuming config is json
  response.json().then(config => {
    Vue.prototype.$keycloak = new Keycloak(config.SSO);
    Vue.prototype.$keycloak.init();
    Vue.prototype.$config = config;
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  });
});
