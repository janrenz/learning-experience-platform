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
          <b-nav-item href="#">Language Preference</b-nav-item>
          <b-nav-item href="#">
            <img
              src="@/assets/images/search.svg"
              alt="Search"
              width="18"
              height="18"
            />
          </b-nav-item>
          <b-nav-item>
            <b-button
              id="lxp-signup"
              href="#"
              variant="outline-secondary"
              @click="signUp"
              size="sm"
              class="my-2 my-sm-0 ob-btn"
              >login / sign up
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
  computed: {
    ...mapGetters(["allConfig"]),
    isAuthenticated: function() {
      return this.$store.state.auth.authenticated;
    }
  },
  methods: {
    signUp() {
      this.$keycloak.login({
        redirectUri: this.allConfig.SSO.redirectUri,
        action: "register"
      });
    },
    logOut() {
      this.$keycloak.logout({
        redirectUri: window.location.origin
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
  padding: 0.5rem 50px;
  z-index: 1;
  // box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
a {
  font-style: normal;
  font-weight: normal;
  text-align: center;
  letter-spacing: 0.05rem;
  color: rgba(0, 0, 0, 0.6);
}
.nav-item {
  display: flex;
  align-items: center;
  .nav-link {
    font-size: 15px;
    line-height: 21px;
    letter-spacing: 0.25px;
    color: rgba(0, 0, 0, 0.6) !important;
    padding: 0.5rem 1rem !important;
  }
}

@media all and (max-width: 1200px) {
  .lxp-navbar {
    padding: 0.5rem 20px;
    .nav-item {
      .nav-link {
        .ob-btn {
          padding: 10px 18px;
        }
      }
    }
  }
}
</style>
