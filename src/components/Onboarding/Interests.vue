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
        <div class="w-100 h-100 d-flex flex-wrap">
          <div class="ob-interes__main">
            <h2 class="ob-interest__title mb-3 w-40">
              Select a minimum of 3 interests
            </h2>
            <p class="ob-interest__sc">
              Suggested interests based on you profile:
            </p>
            <div>
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
                <span>
                  <b-icon icon="plus" style="color:#0043AC"></b-icon
                ></span>
              </b-button>
            </div>
            <div
              :class="{
                'ob-interest__selected mt-5 mb-2': true,
                visible: selectedTopics.length,
                invisible: !selectedTopics.length
              }"
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
        </div>
      </template>
    </OnboardingLayout>
    <div v-else class="h-100">
      <b-row class="p-5 m-0 h-100 ob-success">
        <b-col md="7">
          <div class="h-100 ob-success__div">
            <div class="mb-3">
              <img src="@/assets/images/whoa-logo-blue.svg" alt="" />
            </div>
            <div class="ob-success__img">
              <img
                src="@/assets/images/illustration-onboarding-completed.svg"
                alt=""
              />
            </div>
          </div>
        </b-col>
        <b-col md="5">
          <div class="h-100 d-flex align-items-center justify-content-center">
            <div class="ob-success__content">
              <h2 class="ob-interest__title">Onboarding completed!</h2>
              <p>Begin your learning now!</p>
              <b-button class="ob-btn ob-btn-primary" @click="onStartLearning"
                >Start Learning</b-button
              >
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import OnboardingLayout from "../Layout/OnboardingLayout";

export default {
  props: ["step"],
  components: { OnboardingLayout },
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
    },
    onStartLearning() {
      this.$router.push({ name: "Dashboard" });
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
    color: #25282b;
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
    color: #52575c;
  }
  .ob-interes__main {
    height: calc(100% - 50px);
    overflow: hidden auto;
    width: 100%;
    &::-webkit-scrollbar {
      display: none;
    }
    .ob-interest__sc {
      font-size: 14px;
      line-height: 16px;
      color: #52575c;
    }
    .ob-interest__selected {
      p {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.1px;
        color: #52575c;
      }
      .btn {
        background: #0043ac !important;
        color: #fff !important;
        font-weight: 500;
        &.ob-interest__btn-hover {
          background: #4488f4 !important;
        }
      }
    }
  }
  .ob-interest__cta {
    height: 50px;
    display: flex;
    align-items: flex-end;
    .ob-interest__alert {
      span {
        font-size: 12px;
        line-height: 12px;
        color: #9b9b9b;
      }
    }
  }
}
.ob-success {
  .ob-success__div {
    background: #dceaff;
    border-radius: 72px;
    padding: 5%;
    width: 85%;
    .ob-success__img {
      padding-left: 25%;
    }
  }
  .ob-success__content {
    h2 {
      font-weight: 500;
      font-size: 32px;
      line-height: 42px;
      color: #000000;
      letter-spacing: 0.1px;
      margin-bottom: 5%;
      width: 90%;
    }
    p {
      margin-bottom: 9%;
      color: #52575c;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: 0.2px;
    }
  }
}
@media all and (min-width: 990px) and (max-width: 1250px) {
  .ob-success {
    .ob-success__div {
      .ob-success__img {
        img {
          width: 450px;
        }
      }
    }
  }
}
</style>
