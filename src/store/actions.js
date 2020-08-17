import axios from "axios";

export default {
  getAllCourses({ commit, state }) {
    return axios
      .get(`${state.config.coursesAPI}/api/courses`)
      .then(response => {
        commit("GET_ALL_COURSES", response.data);
      })
      .catch(err => {
        // TODO - Error handling :)
        console.error("Oops something went wrong", err);
      });
  },
  getAllTopics({ commit, state }) {
    return axios
      .get(`${state.config.topicsAPI}/api/course-topics`)
      .then(response => {
        commit("GET_ALL_TOPICS", response.data);
      })
      .catch(err => {
        // TODO - Error handling :)
        console.error("Oops something went wrong", err);
      });
  },
  createProfile({ commit, state }, keycloak_id) {
    return axios
      .post(`${state.config.profilesAPI}/api/v1/profiles`, {
        keycloak_id
      })
      .then(response => {
        commit("SET_CURRENT_PROFILE", response.data);
      })
      .catch(err => {
        debugger;
        if (err.response && err.response.data.code === 11000) {
          console.info("Duplicate keycloak_id found, user already registered");
          // TODO - return journey
          // 1. GET  /api/v1/profiles/${keycloack_id} info and preload any previously saved info?
          // redirect to dashboard
        } else {
          console.error("Oops something went wrong", err);
        }
      });
  },
  updateProfile({ commit, state }, profile) {
    return axios
      .put(
        `${state.config.profilesAPI}/api/v1/profiles/${profile.keycloak_id}`,
        profile
      )
      .then(response => {
        commit("SET_CURRENT_PROFILE", response.data);
      })
      .catch(err => {
        console.error("Oops something went wrong", err);
      });
  }
};
