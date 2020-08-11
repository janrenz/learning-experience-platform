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
  }
};
