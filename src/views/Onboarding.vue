<template>
  <div class="about h-100">
    <EducationalBackground
      v-if="step === 1"
      :step="step"
      @backgroundSubmitted="incrementStep"
    ></EducationalBackground>
    <Skills
      v-if="step === 2"
      :step="step"
      @skillsSubmitted="incrementStep"
    ></Skills>
    <Interests v-else-if="step === 3" :step="step"></Interests>
  </div>
</template>

<script>
import EducationalBackground from "@/components/Onboarding/EducationalBackground.vue";
import Interests from "@/components/Onboarding/Interests.vue";
import Skills from "@/components/Onboarding/Skills.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      step: 1
    };
  },
  computed: { ...mapGetters(["allTopics", "allProfile"]) },
  components: { Interests, Skills, EducationalBackground },
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
        // this.$store.dispatch("createProfile", this.$keycloak.idTokenParsed.sub);
        // TODO update the get/create profile based on login/signup logic
        this.$store.dispatch("updateProfile", {
          keycloak_id: this.$keycloak.idTokenParsed.sub
        });
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
    incrementStep() {
      this.step++;
    }
  }
};
</script>
