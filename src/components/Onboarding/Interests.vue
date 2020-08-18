<template>
  <div>
    <h2>Select a minimum of 3 interests</h2>
    <p>Please choose interests from the below list:</p>

    <b-button
      v-for="(t, index) in allTopics"
      :key="index"
      @click="addInterest(t, index)"
      :pressed="t.active"
      variant="info"
      pill
      style="margin: 5px;"
    >
      {{ t.name }} +
    </b-button>
    <div>
      <br />
      <b-button @click="submitInterests" :disabled="disableBtn" variant="dark">
        Submit
      </b-button>
      <div style="margin: 30px;">
        <b-alert
          :show="selectedTopics.length === 1 || selectedTopics.length === 2"
          variant="warning"
        >
          Please select minimum of 3
        </b-alert>
        <b-alert :show="this.selectedTopics.length > 15" variant="warning">
          Please select no more than 15
        </b-alert>
      </div>
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
      return this.selectedTopics.length < 3 || this.selectedTopics.length > 15;
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
          interests: this.selectedTopics
        })
        .then(() => {
          this.$emit("interestsSubmitted");
        });
    }
  }
};
</script>
