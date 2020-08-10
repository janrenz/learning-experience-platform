<template>
  <div class="about">
    <h2>Select a minimum of 3 interests</h2>
    <p>Suggested interests based on you profile:</p>

    <div>
      <b-button
        v-for="(t, index) in allTopics"
        :key="index"
        @click="addInterest(t, index)"
        :pressed="t.active"
        variant="info"
        pill
      >
        {{ t.displayName }} +
      </b-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: { ...mapGetters(["allTopics"]) },
  mounted() {
    this.$nextTick(() => {
      this.$store.dispatch("getAllTopics");
    });
  },
  methods: {
    addInterest(t, index) {
      t.active = !t.active;
      this.$store.commit("SET_TOPIC", t, index);
      console.info("name is ", t, index);
      // TODO - Connect to our profile service....
    }
  }
};
</script>
