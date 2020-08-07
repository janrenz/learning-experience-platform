import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as Keycloak from "keycloak-js";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

fetch("/config/all.json").then(response => {
  response.json().then(config => {
    Vue.prototype.$keycloak = new Keycloak(config.SSO);
    Vue.prototype.$keycloak.init();
    Vue.prototype.$config = config;
    const app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
    app.$store.commit("SET_CONFIG", config);
  });
});
