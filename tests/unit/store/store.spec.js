import store from "@/store";

describe("Initial state tests", () => {
  it("should have no courses by default", () => {
    expect(store.state.courses.length).toBe(0);
  });
  it("should have no topics by default", () => {
    expect(store.state.topics.length).toBe(0);
  });
  it("should have no auth by default", () => {
    expect(Object.keys(store.state.auth).length).toBe(0);
  });
  it("should have no profile by default", () => {
    expect(Object.keys(store.state.profile).length).toBe(0);
  });
  it("should have no config by default", () => {
    expect(Object.keys(store.state.config).length).toBe(0);
  });
});

describe("state getters", () => {
  it("get allCourses should be empty", () => {
    expect(store.getters.allCourses.length).toBe(0);
  });
  it("get allTopics should be empty", () => {
    expect(store.getters.allTopics.length).toBe(0);
  });
  it("get allAuth should be empty", () => {
    expect(Object.keys(store.getters.allAuth).length).toBe(0);
  });
  it("get allProfile should be empty", () => {
    expect(Object.keys(store.getters.allProfile).length).toBe(0);
  });
  it("get allConfig should be empty", () => {
    expect(Object.keys(store.getters.allConfig).length).toBe(0);
  });
});
