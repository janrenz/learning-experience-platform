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
    // probs still needed to interact with logout etc
    Vue.prototype.$keycloak = new Keycloak(config.SSO);
    Vue.prototype.$keycloak
      .init({
        onLoad: "check-sso",
        checkLoginIframe: false
      })
      .then(authenticated => {
        const app = new Vue({
          router,
          store,
          render: h => h(App)
        }).$mount("#app");

        app.$store.commit("SET_CONFIG", config);

        if (authenticated) {
          console.info("INIT - Keycloak user authenticated");
          app.$store.commit("SET_AUTH", {
            token: Vue.prototype.$keycloak.idToken,
            parsedToken: Vue.prototype.$keycloak.idTokenParsed,
            authenticated
          });
        } else {
          console.info("INIT - KC user not authenticated");
        }
      })
      .catch(err => {
        console.error("ERROR Connecting to Keycloak service", err);
      });
  });
});
