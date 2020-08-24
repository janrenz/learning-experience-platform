<template>
  <div class="h-100 ob-skills">
    <b-container fluid class="ob-container h-100">
      <b-row class="h-100">
        <b-col cols="4" class="h-100 p-0">
          <div class="ob-left__div h-100">
            <p class="ob-left__title">Onboarding</p>
            <slot name="left-section"></slot>
            <div class="ob-left__loader">
              <b-progress
                height="6px"
                :value="progressValue"
                variant="secondary"
                class="mb-2"
              ></b-progress>
              <p class="ob-left__value">
                {{ progressValue }}% completed ({{ step - 1 }}/{{
                  total_steps
                }})
              </p>
            </div>
          </div>
        </b-col>
        <b-col cols="8" class="p-0">
          <div class="ob-right__div h-100">
            <slot name="right-section"></slot>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: ["step"],
  data() {
    return {
      total_steps: 2
    };
  },
  computed: {
    progressValue() {
      return ((this.step - 1) / this.total_steps) * 100;
    }
  }
};
</script>
<style lang="scss">
.ob-container {
  .ob-left__div {
    background: rgba(196, 196, 196, 0.13);
    padding: 80px 17%;
    text-align: left;

    .ob-left__title {
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 1.25px;
      text-transform: uppercase;
      color: #c4c4c4;
      margin-bottom: 90px;
    }
    .ob-left__value {
      letter-spacing: 1.25px;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      color: #c4c4c4;
    }
  }
  .ob-right__div {
    padding: 70px 120px;
  }
}
</style>
