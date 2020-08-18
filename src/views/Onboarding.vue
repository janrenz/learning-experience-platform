<template>
  <div class="about">
    <Interests
      v-if="step === 1"
      @interestsSubmitted="submitInterest"
    ></Interests>
    <Skills v-else></Skills>
  </div>
</template>

<script>
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
  components: { Interests, Skills },
  mounted() {
    this.$nextTick(() => {
      this.$store.dispatch("getAllTopics");
      this.$store.dispatch("createProfile", this.$keycloak.idTokenParsed.sub);
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
    }
  }
};
</script>
