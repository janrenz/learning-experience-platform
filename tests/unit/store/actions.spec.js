import actions from "@/store/actions";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const testData = [
  {
    data: "mickey_mouse"
  },
  {
    data: "minnie_mouse"
  }
];

const kc_id = "keyclock-1231";

const state = {
  config: {
    coursesAPI: "",
    topicsAPI: "",
    profilesAPI: ""
  }
};

describe("getAllCourses ", () => {
  beforeEach(() => {
    let mock = new MockAdapter(axios);
    mock.onGet("/api/courses").reply(200, testData);
  });
  it("should first call GET_ALL_COURSES", async () => {
    const commit = jest.fn();
    await actions.getAllCourses({ commit, state }).then(() => {
      // mock.calls[0] is the first mockFn
      // and[0][0] is the first param to the method signature
      expect(commit.mock.calls[0][0]).toBe("GET_ALL_COURSES");
    });
  });

  it("should try commit response to state", async () => {
    const commit = jest.fn();
    await actions
      .getAllCourses({
        commit,
        state
      })
      .then(() => {
        // mock.calls[0] is the first mockFn
        // and[0][0] is the first param to the method signature
        expect(commit.mock.calls[0][1]).toEqual(testData);
      });
  });
});

describe("getAllTopics ", () => {
  beforeEach(() => {
    let mock = new MockAdapter(axios);
    mock.onGet("/api/course-topics").reply(200, testData);
  });
  it("should first call GET_ALL_TOPICS", async () => {
    const commit = jest.fn();
    await actions
      .getAllTopics({
        commit,
        state
      })
      .then(() => {
        // mock.calls[0] is the first mockFn
        // and[0][0] is the first param to the method signature
        expect(commit.mock.calls[0][0]).toBe("GET_ALL_TOPICS");
      });
  });

  it("should try commit response to state", async () => {
    const commit = jest.fn();
    await actions
      .getAllTopics({
        commit,
        state
      })
      .then(() => {
        // mock.calls[0] is the first mockFn
        // and[0][0] is the first param to the method signature
        expect(commit.mock.calls[0][1]).toEqual(testData);
      });
  });
});

describe("createProfile  ", () => {
  beforeEach(() => {
    let mock = new MockAdapter(axios);
    mock
      .onPost("/api/v1/profiles", {
        keycloak_id: kc_id
      })
      .reply(200, testData);
  });
  it("should first call SET_CURRENT_PROFILE", async () => {
    const commit = jest.fn();
    await actions
      .createProfile(
        {
          commit,
          state
        },
        kc_id
      )
      .then(() => {
        // mock.calls[0] is the first mockFn
        // and[0][0] is the first param to the method signature
        expect(commit.mock.calls[0][0]).toBe("SET_CURRENT_PROFILE");
      });
  });

  it("should try commit response to state", async () => {
    const commit = jest.fn();
    await actions
      .createProfile(
        {
          commit,
          state
        },
        kc_id
      )
      .then(() => {
        // mock.calls[0] is the first mockFn
        // and[0][0] is the first param to the method signature
        expect(commit.mock.calls[0][1]).toEqual(testData);
      });
  });
});
