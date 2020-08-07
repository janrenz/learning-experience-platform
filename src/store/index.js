import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    courses: [],
    config: {}
  },
  getters: {
    allConfig: state => state.config,
    allCourses: state => state.courses
  },
  mutations,
  actions,
  modules: {}
});
