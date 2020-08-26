<template>
  <OnboardingLayout :step="step">
    <template v-slot:left-section>
      <div v-if="step == 2" class="ob-success__left">
        <h2 class="ob-interest__title">Skills and experience</h2>
        <p class="ob-interest__content">
          Providing your skills list and experience level will help us curate
          our interests and course suggestions in the following steps
        </p>
      </div>
      <div class="h-75" v-else>
        <h2 class="ob-interest__title">Onboarding completed!</h2>
        <p class="ob-interest__content">
          Sharing your learning interests will help us curate relevant content.
          You are ready to learn after this!
        </p>
      </div>
    </template>
    <template v-slot:right-section>
      <div class="ob-success h-100">
        <div class="h-100 ob-skills__success" v-if="step == 2">
          <div class="d-flex h-100">
            <h2 class="ob-interest__content">
              Well done you have setup your skills, now we’d like to know what
              your learning interests are!
            </h2>
          </div>
          <div
            class="ob-success__footer align-items-start justify-content-start d-flex"
          >
            <b-button class="ob-btn ob-btn-primary" @click="onSkillsComplete"
              >Next</b-button
            >
          </div>
        </div>
        <div class="h-100" v-else>
          <div class="d-flex h-100">
            <img src="@/assets/images/success.svg" alt="success" />
            <h2 class="ob-interest__content">Begin your learning</h2>
          </div>
          <div
            class="ob-success__footer align-items-end justify-content-end d-flex"
          >
            <b-button class="ob-btn ob-btn-primary" @click="onStartLearning"
              >Start Learning</b-button
            >
          </div>
        </div>
      </div>
    </template>
  </OnboardingLayout>
</template>
<script>
import OnboardingLayout from "../Layout/OnboardingLayout";
export default {
  props: ["step"],
  components: { OnboardingLayout },
  methods: {
    onStartLearning() {
      this.$router.push({ name: "Dashboard" });
    },
    onSkillsComplete() {
      this.$emit("skillsSubmitted");
    }
  }
};
</script>
<style lang="scss" scoped>
.ob-success__left {
  height: 80%;
}
.ob-success {
  .ob-skills__success {
    h2,
    .ob-success__footer {
      padding: 0 5%;
    }
  }
  .d-flex {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  h2 {
    display: inline-block;
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;
    color: #000;
  }
}
</style>
