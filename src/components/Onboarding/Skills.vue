<template>
  <div>
    <h2>Select a minimum of 3 Skills</h2>
    <p>Suggested interests based on you profile:</p>

    <b-button
      v-for="(t, index) in allTopics"
      :key="index"
      @click="addInterest(t, index)"
      :pressed="t.active"
      variant="info"
      pill
    >
      {{ t.name }} +
    </b-button>
    <div>
      <br />
      <b-button @click="submitInterests" :disabled="disableBtn" variant="dark">
        Submit
      </b-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["allTopics"]),
    selectedTopics() {
      return this.allTopics.filter(t => t.active === true);
    },
    disableBtn() {
      return this.selectedTopics.length < 3;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$store.dispatch("getAllTopics");
    });
  },
  methods: {
    addInterest(t, index) {
      t.active = !t.active;
      this.$store.commit("SET_TOPIC", t, index);
    },
    submitInterests() {
      this.$store
        .dispatch("updateProfile", {
          keycloak_id: this.$keycloak.idTokenParsed.sub,
          skills: this.selectedTopics
        })
        .then(() => {
          this.$emit("submitInterests");
        });
    }
  }
};
</script>
