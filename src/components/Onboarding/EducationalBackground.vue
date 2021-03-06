<template>
  <div class="h-100 ob-ed">
    <OnboardingLayout :step="currentStep">
      <template v-slot:left-section>
        <div class="h-75">
          <h2 class="ob-ed__title mt-1 mb-5">Education Background</h2>
          <p class="ob-ed__content">
            Providing your educational background will help our interests and
            course suggestions in the following steps
          </p>
        </div>
      </template>
      <template v-slot:right-section>
        <div class="ob-ed__new h-100 w-100" v-if="!isCompleted">
          <div class="ob-ed__main">
            <h2 class="ob-ed__title w-40">
              Add education
            </h2>
            <div class="ob-main__sec">
              <b-form>
                <b-row>
                  <b-col>
                    <Input
                      id="school"
                      label="School"
                      placeholder="School"
                      :showError="!form.school && isSave"
                      v-model="form.school"
                    />
                  </b-col>
                  <b-col>
                    <Input
                      id="country"
                      label="Country"
                      placeholder="Country"
                      :required="true"
                      :showError="!form.country && isSave"
                      v-model="form.country"
                    />
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <Select
                      label="Level of Education"
                      placeholder="Select level of education"
                      :dropdownArr="educationArr"
                      :showError="!form.level && isSave"
                      v-model="form.level"
                      @click="addEducation"
                    />
                  </b-col>
                  <b-col>
                    <Input
                      id="field-of-study"
                      label="Field of study"
                      placeholder="Field of study"
                      :required="true"
                      :showError="!form.field_of_study && isSave"
                      v-model="form.field_of_study"
                    />
                  </b-col>
                </b-row>
                <b-row>
                  <b-col md="6">
                    <Input
                      id="specialty"
                      label="Specialty"
                      placeholder="Specialty"
                      :required="true"
                      :showError="!form.speciality && isSave"
                      v-model="form.speciality"
                    />
                  </b-col>
                </b-row>
              </b-form>
            </div>
          </div>
          <div class="ob-ed__cta">
            <b-button
              class="mr-4 ob-btn"
              v-if="allProfile.education && allProfile.education.length"
              @click="isCompleted = true"
              >Skip</b-button
            >
            <b-button
              class="mr-3 ob-btn ob-btn-primary"
              @click="submitEducationalBg"
              >Save</b-button
            >
          </div>
        </div>
        <div class="ob-ed__list h-100 w-100" v-if="isCompleted">
          <div class="ob-ed__main">
            <h2 class="ob-ed__title mb-5 w-50">
              List of your Education
            </h2>
            <div class="ob-list__sec">
              <b-row>
                <b-col
                  md="6"
                  class="mb-3"
                  v-for="(e, i) in allProfile.education"
                  :key="i"
                >
                  <b-card class="h-100">
                    <b-row class="h-100">
                      <b-col md="8" class="pr-0 h-100">
                        <b-card-body
                          align="left"
                          class="card-content__right h-100"
                        >
                          <p class="card-label">{{ e.school }}</p>
                          <b-card-title>{{ e.level }}</b-card-title>
                          <b-card-text>
                            <p class="card-study mb-1">
                              {{ e.field_of_study }}
                            </p>
                            <p class="card-speciality mb-0">
                              {{ e.speciality }}
                            </p>
                          </b-card-text>
                        </b-card-body>
                      </b-col>
                      <b-col md="4">
                        <b-card-body class="h-100 card-placeholder">
                          <div class="card-placeholder__div">
                            <b-card-img
                              :src="require('@/assets/images/placeholder.svg')"
                              alt="disney"
                              class="rounded-0"
                              width="46"
                              height="46"
                            ></b-card-img>
                          </div>
                        </b-card-body>
                      </b-col>
                    </b-row>
                  </b-card>
                </b-col>
              </b-row>
            </div>
          </div>
          <div class="ob-ed__cta">
            <b-button class="mr-3 ob-btn ob-btn-primary" @click="onContinue"
              >Continue</b-button
            >
            <b-button
              class="mr-3 ob-btn ob-btn-outline"
              variant="outline-secondary"
              @click="addNewEducation"
              >+ Add Education</b-button
            >
          </div>
        </div>
      </template>
    </OnboardingLayout>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import OnboardingLayout from "../Layout/OnboardingLayout";
import Input from "../WrapperComponents/Input";
import Select from "../WrapperComponents/Select";

export default {
  props: ["step"],
  components: { OnboardingLayout, Input, Select },
  data() {
    return {
      isCompleted: false,
      form: {
        school: "",
        country: "",
        level: null,
        field_of_study: "",
        speciality: ""
      },
      educationArr: [
        "Doctorate (PHD or MD)",
        "Masters (MS)",
        "Bachelors (BS)",
        "High School (HS)",
        "Other"
      ],
      currentStep: 0,
      isSave: false
    };
  },
  computed: {
    ...mapGetters(["allProfile"]),
    isFilled() {
      let bool = true;
      Object.keys(this.form).forEach(f => {
        if (!this.form[f]) bool = false;
      });
      return bool;
    }
  },
  watch: {
    allProfile: {
      handler(v) {
        if (v.education && v.education.length) this.isCompleted = true;
      },
      deep: true
    }
  },
  mounted() {
    this.currentStep = this.step;
  },
  methods: {
    resetForm() {
      Object.keys(this.form).forEach(f => (this.form[f] = ""));
    },
    submitEducationalBg() {
      if (this.isFilled) {
        let education = [];
        if (this.allProfile.education && this.allProfile.education.length)
          education = this.allProfile.education;
        education.push(this.form);
        this.$store
          .dispatch("updateProfile", {
            keycloak_id: this.$keycloak.idTokenParsed.sub,
            education: education
          })
          .then(() => {
            this.isSave = false;
            this.resetForm();
            this.currentStep = 2;
            this.isCompleted = true;
          });
      } else {
        this.isSave = true;
      }
    },
    addEducation(e) {
      this.form.level = e;
    },
    addNewEducation() {
      this.isCompleted = false;
      this.currentStep = 1;
    },
    onContinue() {
      this.$emit("backgroundSubmitted");
    }
  }
};
</script>
<style lang="scss">
.ob-ed {
  text-align: left;
  .ob-ed__title {
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;
    color: #25282b;
    margin-bottom: 20%;
    margin: 5% 0;
    display: flex;
    flex-wrap: wrap;
    &.w-40 {
      width: 40%;
    }
  }
  .ob-ed__content {
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: #52575c;
  }
  .ob-ed__main {
    height: calc(100% - 50px);
    width: 100%;
    .ob-ed__sc {
      font-size: 14px;
      line-height: 16px;
      color: #757575;
    }
    .ob-ed__selected {
      .btn {
        background: #757575;
        color: #f2f2f2;
        &.ob-ed__btn-hover {
          background: #a0a0a0;
        }
      }
    }
  }
  .ob-ed__cta {
    // margin-top: 7%;
    height: 50px;
    display: flex;
    align-items: flex-end;
    width: 100%;
    .ob-ed__alert {
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
  font-size: 10px;
  line-height: 0;
  font-weight: 500;
  border: none;
  padding: 4px 12px;
  text-transform: uppercase;
  background: #dceaff !important;
  color: #0043ac !important;
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

.ob-list__sec,
.ob-main__sec {
  height: calc(100% - 90px);
  overflow: hidden auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .card-body {
    padding: 1rem;
    &.card-content__right {
      padding: 0 10% 0 0;
    }
    .card-label {
      font-weight: 600;
      font-size: 13px;
      line-height: 15px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: #0043ac;
      margin-bottom: 4px;
    }
    .card-title {
      font-weight: 600;
      font-size: 18px;
      line-height: 30px;
      letter-spacing: 0.15px;
      color: rgba(0, 0, 0, 0.87);
    }
    .card-text {
      font-size: 13px;
      line-height: 16px;
      letter-spacing: 0.25px;
      color: rgba(0, 0, 0, 0.6);
    }
    .card-play {
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 1.25px;
      text-transform: uppercase;
      color: #000000;
      span {
        margin-right: 5px;
      }
    }
    .card-placeholder {
      background: #dceaff;
      display: flex;
      align-items: center;
      border-radius: 4px;
    }
  }
}

.ob-ed__new,
.ob-ed__list {
  display: flex;
  flex-wrap: wrap;
}
@media only screen and (min-width: 990px) and (max-width: 1220px) {
  .ob-ed {
    .ob-ed__list {
      .ob-ed__main {
        height: auto;
      }
    }
    .ob-ed__cta {
      margin: 7% 0;
    }
  }
}
</style>
