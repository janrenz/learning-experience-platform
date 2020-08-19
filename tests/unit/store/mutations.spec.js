import mutations from "@/store/mutations";
let state;

const testData = {
  data: "mickey_mouse"
};

describe("Mutation tests ", () => {
  beforeEach(() => {
    state = {
      courses: [],
      config: {},
      topics: [],
      auth: {},
      profile: {}
    };
  });
  it("Sets the courses in the state", () => {
    mutations.GET_ALL_COURSES(state, [testData, testData]);
    expect(state.courses[0].data).toBe("mickey_mouse");
    expect(state.courses[1].data).toBe("mickey_mouse");
  });
  it("Sets the config in the state", () => {
    mutations.SET_CONFIG(state, testData);
    expect(state.config.data).toBe("mickey_mouse");
  });
  it("Sets the topics in the state", () => {
    mutations.GET_ALL_TOPICS(state, [testData, testData]);
    expect(state.topics[0].data).toBe("mickey_mouse");
    expect(state.topics[0].active).toBe(false);
    expect(state.topics[1].data).toBe("mickey_mouse");
    expect(state.topics[1].active).toBe(false);
  });
  it("updates the topics in the state", () => {
    mutations.GET_ALL_TOPICS(state, [testData, testData, testData]);
    mutations.SET_TOPIC(
      state,
      {
        data: "minnie_mouse",
        active: true
      },
      2
    );
    expect(state.topics[0].data).toBe("mickey_mouse");
    expect(state.topics[1].data).toBe("mickey_mouse");
    expect(state.topics[2].data).toBe("minnie_mouse");
    expect(state.topics[2].active).toBe(true);
  });

  it("Sets the auth in the state", () => {
    mutations.SET_AUTH(state, testData);
    expect(state.auth.data).toBe("mickey_mouse");
  });

  it("Sets the profile in the state", () => {
    mutations.SET_CURRENT_PROFILE(state, testData);
    expect(state.profile.data).toBe("mickey_mouse");
  });
});
