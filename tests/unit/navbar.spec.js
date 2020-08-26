import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import HelloWorld from "@/components/NavBar.vue";
import BootstrapVue from "bootstrap-vue";

// create an extended `Vue` constructor
const localVue = createLocalVue();

// Use Vuex
localVue.use(Vuex);

// install plugins as normal
localVue.use(BootstrapVue);

describe("NavBar.vue", () => {
  let wrapper, store;

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        auth: {
          authenticated: false
        }
      }
    });
    wrapper = mount(HelloWorld, {
      localVue,
      store,
      stubs: ["router-link"]
    });
  });

  it("render when created ", () => {
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should contain nav items ", () => {
    expect(wrapper.text()).toContain("About");
    expect(wrapper.text()).toContain("Courses");
    expect(wrapper.text()).toContain("Career");
  });

  it("should contain login button ", () => {
    const navLinks = wrapper.findAll("a");
    expect(navLinks.at(navLinks.length - 1).text()).toContain(
      "login / sign up"
    );
    expect(navLinks.at(navLinks.length - 1).attributes("role")).toContain(
      "button"
    );
  });
});
