<template>
  <div class="about h-100">
    <Interests
      v-if="step === 1"
      :step="step"
      @interestsSubmitted="submitInterest"
    ></Interests>
    <Skills
      v-else-if="step === 2"
      :step="step"
      @skillsSubmitted="submitSkill"
    ></Skills>
    <div style="margin: 100px;" v-else>
      <h2>Welcome to the WHO Academy!</h2>
      <b-button @click="$router.push({ name: 'Home' })">
        Start Learning
      </b-button>
    </div>
  </div>
</template>

<script>
import Interests from "@/components/Onboarding/Interests.vue";
import Skills from "@/components/Onboarding/Skills.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      step: 1,
    };
  },
  computed: { ...mapGetters(["allTopics", "allProfile"]) },
  components: { Interests, Skills },
  mounted() {
    this.$nextTick(() => {
      // Check the keycloak object is present
      // if not redirect to home page
      if (
        this.$keycloak &&
        this.$keycloak.idTokenParsed &&
        this.$keycloak.idTokenParsed.sub
      ) {
        this.$store.dispatch("getAllTopics");
        this.$store.dispatch("createProfile", this.$keycloak.idTokenParsed.sub);
      } else {
        this.$router.push({ name: "Home" });
      }
    });

    // 1. POST /api/v1/profiles {keycloak_id =  123}
    // 1.1 - success so all good
    // 1.2 - duplicate key. GET current profile so we don't overwrite it
  },
  methods: {
    addInterest(t, index) {
      t.active = !t.active;
      this.$store.commit("SET_TOPIC", t, index);
      // TODO - Connect to our profile service....
    },
    submitInterest() {
      this.step++;
    },
    submitSkill() {
      this.step++;
    },
  },
};
</script>
