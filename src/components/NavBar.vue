<template>
  <div>
    <b-navbar toggleable="lg" type="light" class="lxp-navbar">
      <b-navbar-brand class="lxp-navbar-brand">
        <router-link to="/"
          ><img src="@/assets/whoa-logo-greyscale.svg"
        /></router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">
            <router-link to="/about">About</router-link>
          </b-nav-item>
          <b-nav-item href="#">Courses</b-nav-item>
          <b-nav-item href="#">Career</b-nav-item>
          <b-nav-item href="#">Literature</b-nav-item>
          <b-nav-item href="#">Language Preferences</b-nav-item>
          <b-nav-item>
            <b-button
              href="#"
              variant="outline-secondary"
              @click="signUp"
              size="sm"
              class="my-2 my-sm-0"
              >Sign Up / Login
            </b-button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavBar",
  props: {
    msg: String
  },
  computed: { ...mapGetters(["allConfig"]) },
  methods: {
    signUp() {
      this.$keycloak.register({
        redirectUri: this.allConfig.SSO.redirectUri,
        action: "register"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.lxp-navbar {
  background: #faf8f8;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  // box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
a {
  font-style: normal;
  font-weight: normal;
  text-align: center;
  letter-spacing: 0.05rem;
  color: rgba(0, 0, 0, 0.6);
}
</style>
