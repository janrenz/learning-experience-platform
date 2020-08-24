<template>
  <div class="h-100 ob-interest">
    <OnboardingLayout :step="step" v-if="!isCompleted">
      <template v-slot:left-section>
        <div class="h-75">
          <h2 class="ob-interest__title">Learning interests</h2>
          <p class="ob-interest__content">
            Sharing your learning interests will help us curate relevant
            content. You are ready to learn after this!
          </p>
        </div>
      </template>
      <template v-slot:right-section>
        <div class="ob-interes__main">
          <h2 class="ob-interest__title mb-3 w-40">
            Select a minimum of 3 interests
          </h2>
          <p class="ob-interest__sc">
            Suggested interests based on you profile:
          </p>
          <b-button
            v-for="(t, index) in availableTopics"
            :key="index"
            @click="addInterest(t, index)"
            :pressed="t.active"
            variant="info"
            pill
            class="ob-btn__pill"
          >
            {{ t.name }}
            <span> <b-icon icon="plus" style="color:#828282"></b-icon></span>
          </b-button>
          <div
            class="ob-interest__selected mt-5 mb-2"
            v-if="selectedTopics.length"
          >
            <p class="mb-2">Your interests:</p>
            <b-button
              v-for="(t, index) in selectedTopics"
              :key="index"
              @click="addInterest(t, index)"
              @mouseover="t.hover = true"
              @mouseleave="t.hover = false"
              :pressed="t.active"
              variant="info"
              :class="{
                'ob-interest__btn-hover': t.hover,
                'ob-btn__pill': true
              }"
              pill
            >
              {{ t.name }}
              <span>
                <b-icon
                  :icon="t.hover ? 'x' : 'check'"
                  style="color:#ffffff"
                ></b-icon>
              </span>
            </b-button>
          </div>
        </div>
        <div class="ob-interest__cta">
          <b-button class="mr-4 ob-btn">Skip</b-button>
          <b-button
            class="mr-3 ob-btn ob-btn-primary"
            :disabled="disableBtn"
            @click="submitInterests"
            >Next</b-button
          >
          <div
            class="ob-interest__alert d-inline-block"
            v-if="selectedTopics.length < 3 || selectedTopics.length > 15"
          >
            <img
              src="@/assets/images/warning.svg"
              alt="warning"
              width="20"
              height="20"
              class="mr-2"
            />
            <span v-if="selectedTopics.length < 3"
              >{{ 3 - selectedTopics.length }} more interests need to be
              selected</span
            >
            <span v-else>Please select no more than 15 interests</span>
          </div>
        </div>
      </template>
    </OnboardingLayout>
    <OnboardingSuccess v-else :step="step + 1"></OnboardingSuccess>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import OnboardingLayout from "../Layout/OnboardingLayout";
import OnboardingSuccess from "../Onboarding/OnboardingSuccess";

export default {
  props: ["step"],
  components: { OnboardingLayout, OnboardingSuccess },
  data() {
    return {
      isCompleted: false
    };
  },
  computed: {
    ...mapGetters(["allTopics"]),
    selectedTopics() {
      return this.allTopics.filter(t => t.active === true);
    },
    disableBtn() {
      return this.selectedTopics.length < 3 || this.selectedTopics.length > 15;
    },
    availableTopics() {
      return this.allTopics.filter(t => !t.active);
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
          this.isCompleted = true;
        });
    }
  }
};
</script>
<style lang="scss">
.ob-interest {
  text-align: left;
  .h-75 {
    height: 75%;
  }
  .ob-interest__title {
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;
    color: #000000;
    margin-bottom: 20%;
    &.w-40 {
      width: 40%;
      margin-top: 60px;
    }
  }
  .ob-interest__content {
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
  }
  .ob-interes__main {
    height: 80%;
    .ob-interest__sc {
      font-size: 14px;
      line-height: 16px;
      color: #757575;
    }
    .ob-interest__selected {
      .btn {
        background: #757575;
        color: #f2f2f2;
        &.ob-interest__btn-hover {
          background: #a0a0a0;
        }
      }
    }
  }
  .ob-interest__cta {
    .ob-interest__alert {
      span {
        font-size: 12px;
        line-height: 12px;
        color: #9b9b9b;
      }
    }
  }
}

.ob-btn__pill.btn.btn-info {
  margin: 5px;
  color: rgb(130, 130, 130);
  font-size: 10px;
  line-height: 0;
  font-weight: 500;
  background: rgb(239, 239, 239);
  border: none;
  padding: 4px 12px;
  text-transform: uppercase;
  span {
    font-weight: 600;
    font-size: 11px;
    display: inline-block;
    padding-left: 5px;
  }
  &:active {
    background: #efefef;
    color: rgb(130, 130, 130);
  }
  &.active,
  &:hover,
  &:focus {
    box-shadow: none !important;
  }
}
</style>
