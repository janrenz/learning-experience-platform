import { mount, createLocalVue } from "@vue/test-utils";
import HelloWorld from "@/components/NavBar.vue";
import BootstrapVue from "bootstrap-vue";

// create an extended `Vue` constructor
const localVue = createLocalVue();

// install plugins as normal
localVue.use(BootstrapVue);

describe("NavBar.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(HelloWorld, {
      localVue,
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
    expect(navLinks.at(6).text()).toContain("Login");
    expect(navLinks.at(6).attributes("role")).toContain("button");
  });
});
