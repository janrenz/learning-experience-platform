<template>
  <OnboardingLayout :step="step">
    <template v-slot:left-section>
      <div class="h-75">
        <h2 class="ob-interest__title">Onboarding completed!</h2>
        <p class="ob-interest__content">
          Sharing your learning interests will help us curate relevant content.
          You are ready to learn after this!
        </p>
      </div>
    </template>
    <template v-slot:right-section>
      <div class="ob-success h-100">
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
      this.$router.push({ name: "Home" });
    }
  }
};
</script>
<style lang="scss" scoped>
.ob-success {
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
