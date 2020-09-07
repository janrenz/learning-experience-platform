<template>
  <div class="h-100 ob-skills">
    <b-container fluid class="ob-container h-100">
      <b-row class="h-100">
        <b-col cols="4" class="h-100 p-0">
          <div class="ob-left__div h-100">
            <slot name="left-section"></slot>
            <div class="ob-left__loader">
              <!-- <b-progress
                height="6px"
                :value="progressValue"
                variant="secondary"
                class="mb-2"
              ></b-progress>
              <p class="ob-left__value">
                {{ progressValue }}% completed ({{ step - 1 }}/{{
                  total_steps
                }})
              </p> -->
              <ul>
                <li
                  v-for="(o, i) in onboardingSteps"
                  :key="i"
                  :class="{ active: o.active }"
                >
                  {{ o.name }}
                  <span v-if="o.isCompleted">
                    <img src="@/assets/images/check.svg" alt="" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </b-col>
        <b-col cols="8" class="p-0 h-100">
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
      total_steps: 3,
      onboardingSteps: [
        {
          name: "education",
          active: true,
          isCompleted: false
        },
        {
          name: "skills",
          active: false,
          isCompleted: false
        },
        {
          name: "interests",
          active: false,
          isCompleted: false
        }
      ]
    };
  },
  computed: {
    progressValue() {
      return Math.round(((this.step - 1) / this.total_steps) * 100);
    }
  }
};
</script>
<style lang="scss">
.ob-container {
  .ob-left__div {
    background: rgba(196, 196, 196, 0.13);
    padding: 12% 16%;
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
    .ob-left__loader {
      height: 25%;
      display: flex;
      align-items: flex-end;
      ul {
        list-style: none;
        padding-left: 0;
        li {
          font-weight: 500;
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          color: #a0a4a8;
          margin-bottom: 6px;
          &.active {
            color: #0043ac;
          }
        }
      }
    }
  }
  .ob-right__div {
    padding: 5% 10%;
    // overflow-y: auto;
    display: flex;
  }
}

@media only screen and (min-width: 990px) and (max-width: 1200px) {
  .ob-container {
    .ob-right__div {
      padding: 70px;
    }
  }
}
</style>
