<template>
  <div>
    <h2>Select a minimum of 3 skills</h2>
    <p>Please choose skills from the below list:</p>
    <b-dropdown
      v-for="(t, index) in allSkills"
      :key="index"
      :variant="`${t.active ? 'primary' : 'outline-primary'}`"
      pill
      style="margin: 5px;"
      :text="`${t.name} +`"
      no-caret
    >
      <b-dropdown-item
        href="javascript:;"
        @click="addSkill(t, index, false, '')"
        v-if="t.active === true"
      >
        <span style="color: red;">CLEAR</span>
      </b-dropdown-item>
      <b-dropdown-item
        href="javascript:;"
        @click="addSkill(t, index, true, 'Novice')"
      >
        Novice
      </b-dropdown-item>
      <b-dropdown-item
        href="javascript:;"
        @click="addSkill(t, index, true, 'Intermediate')"
        >Intermediate</b-dropdown-item
      >
      <b-dropdown-item
        href="javascript:;"
        @click="addSkill(t, index, true, 'Master')"
        >Master</b-dropdown-item
      >
    </b-dropdown>
    <div>
      <br />
      <b-button @click="submitSkills" :disabled="disableBtn" variant="dark">
        Submit
      </b-button>
      <div style="margin: 30px;">
        <b-alert
          :show="selectedSkills.length === 1 || selectedSkills.length === 2"
          variant="warning"
        >
          Please select minimum of 3
        </b-alert>
        <b-alert :show="this.selectedSkills.length > 15" variant="warning">
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
    ...mapGetters(["allSkills"]),
    selectedSkills() {
      return this.allSkills.filter(t => t.active === true);
    },
    disableBtn() {
      return this.selectedSkills.length < 3 || this.selectedSkills.length > 15;
    }
  },
  mounted() {
    this.$nextTick(() => {
      // TODO: pass role_slug
      this.$store.dispatch("getAllSkills");
    });
  },
  methods: {
    addSkill(t, index, active, rating) {
      t.active = active;
      t.rating = rating;
      this.$store.commit("SET_SKILL", t, index);
    },
    submitSkills() {
      this.$store
        .dispatch("updateProfile", {
          keycloak_id: this.$keycloak.idTokenParsed.sub,
          skills: this.selectedSkills
        })
        .then(() => {
          this.$emit("skillsSubmitted");
        });
    }
  }
};
</script>
