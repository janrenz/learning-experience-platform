import Vue from "vue";

export default {
  GET_ALL_COURSES(state, courses) {
    state.courses = courses;
  },
  SET_CONFIG(state, config) {
    state.config = config;
  },
  GET_ALL_TOPICS(state, topics) {
    topics.forEach(t => {
      Vue.set(t, "active", false);
    });
    state.topics = topics;
  },
  SET_TOPIC(state, topic, index) {
    Vue.set(state.topics, index, topic);
  },
  SET_AUTH(state, auth) {
    state.auth = auth;
  }
};
