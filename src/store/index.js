import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    courses: [],
    config: {},
    topics: [],
    auth: {},
    profile: {}
  },
  getters: {
    allProfile: state => state.profile,
    allConfig: state => state.config,
    allAuth: state => state.auth,
    allCourses: state => state.courses,
    allTopics: state => state.topics
  },
  mutations,
  actions,
  modules: {}
});
