import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
// todo, only load the mount the vue when we return from `/config/appconfig.json`

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
