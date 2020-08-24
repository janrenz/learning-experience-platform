<template>
  <div class="h-100 ob-interest ob-skills">
    <OnboardingLayout :step="step">
      <template v-slot:left-section>
        <div class="h-75">
          <h2 class="ob-interest__title">Skills and experience</h2>
          <p class="ob-interest__content">
            Sharing your skills and experience level will help us curate
            relevant interests and content in the following steps.
          </p>
        </div>
      </template>
      <template v-slot:right-section>
        <div class="ob-interes__main">
          <h2 class="ob-interest__title mb-3 w-40">
            Select a minimum of 3 skills
          </h2>
          <p class="ob-interest__sc">
            Suggested skills based on you profile:
          </p>
          <b-button
            v-for="(t, index) in availableSkills"
            :key="index"
            @click="openRatings(t)"
            variant="info"
            pill
            class="ob-btn__pill"
          >
            {{ t.name }}
            <span> <b-icon icon="plus" style="color:#828282"></b-icon></span>
          </b-button>
          <b-modal id="rate-skills-modal" centered>
            <template v-slot:modal-header>
              <div></div>
            </template>
            <div class="ob-skills__rate">
              <h2 class="mt-5 mb-5">Rate your skill</h2>
              <b-button variant="info" pill class="ob-btn__pill">{{
                currentSkill.name
              }}</b-button>
              <div class="ob-skills__dd mb-5">
                <label>Level of expertise</label>
                <b-dropdown size="lg" no-caret>
                  <template v-slot:button-content>
                    <div>
                      <label>{{ currentSkill.rating }}</label>
                      <span class="ob-dd__icon">
                        <b-icon
                          icon="chevron-down"
                          style="color:rgba(0, 0, 0, 0.87)"
                        ></b-icon>
                      </span>
                    </div>
                  </template>
                  <b-dropdown-item
                    v-for="(r, index) in ratingsArr"
                    :key="index"
                    href="javascript:;"
                    @click="addRating(r)"
                  >
                    {{ r }}
                  </b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
            <template v-slot:modal-footer>
              <div>
                <b-button class="mr-3 btn-secondary" @click="onCancel"
                  >Cancel</b-button
                >
                <b-button
                  class="btn-primary"
                  @click="addSkill(true)"
                  :disabled="currentSkill.rating == ''"
                  >Add</b-button
                >
              </div>
            </template>
          </b-modal>

          <div
            class="ob-interest__selected mt-5 mb-2"
            v-if="selectedSkills.length"
          >
            <p class="mb-2">Your skills:</p>
            <b-button
              v-for="(t, index) in selectedSkills"
              :key="index"
              @click="addSkill(false, t, index)"
              @mouseover="t.hover = true"
              @mouseleave="t.hover = false"
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
            @click="submitSkills"
            >Next</b-button
          >
          <div
            class="ob-interest__alert d-inline-block"
            v-if="selectedSkills.length < 3"
          >
            <img
              src="@/assets/images/warning.svg"
              alt="warning"
              width="20"
              height="20"
              class="mr-2"
            />
            <span
              >{{ 3 - selectedSkills.length }} more skills need to be
              selected</span
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

export default {
  props: ["step"],
  components: { OnboardingLayout },
  data() {
    return {
      currentSkill: "",
      ratingsArr: ["Novice", "Intermediate", "Master"]
    };
  },
  computed: {
    ...mapGetters(["allSkills", "allAuth"]),
    selectedSkills() {
      return this.allSkills.filter(t => t.active === true);
    },
    disableBtn() {
      return this.selectedSkills.length < 3 || this.selectedSkills.length > 15;
    },
    roleSlug() {
      // TODO: Refactor the code
      return this.allAuth.profile.attributes &&
        this.allAuth.profile.attributes.role_slugs &&
        this.allAuth.profile.attributes.role_slugs.length > 0
        ? this.allAuth.profile.attributes.role_slugs[0]
        : "";
    },
    availableSkills() {
      return this.allSkills.filter(t => !t.active);
    }
  },
  mounted() {
    this.$nextTick(() => {
      // TODO: pass role_slug
      this.$store.dispatch("getAllSkills", this.roleSlug);
    });
  },
  methods: {
    openRatings(t) {
      this.currentSkill = t;
      this.$bvModal.show("rate-skills-modal");
    },
    addSkill(active, t = null, index = 0) {
      if (t == null) {
        index = this.allSkills.findIndex(a => a.id == this.currentSkill.id);
        t = this.currentSkill;
      }
      t.active = active;
      t.rating = "";
      this.$store.commit("SET_SKILL", t, index);
      this.$bvModal.hide("rate-skills-modal");
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
    },
    addRating(rating) {
      this.currentSkill.rating = rating;
    },
    onCancel() {
      this.allSkills.forEach(a => (a.rating = ""));
      this.$bvModal.hide("rate-skills-modal");
    }
  }
};
</script>
<style lang="scss">
#rate-skills-modal {
  .modal-header {
    border: none;
  }
  .modal-footer {
    justify-content: center;
    border: none;
    margin-bottom: 80px;
    padding: 0.75rem 80px;
    .btn {
      font-size: 14px;
      line-height: 16px;
      border: none;
      padding: 10px 0;
      width: 130px;
      &.btn-secondary {
        background: #d7d5d5;
        color: #757575;
      }
      &.btn-primary {
        background: #757575;
        color: #ffffff;
      }
    }
  }
  .modal-body {
    padding: 0.75rem 80px;
    .ob-skills__rate {
      h2 {
        font-weight: bold;
        font-size: 32px;
        line-height: 37px;
      }
      .ob-btn__pill {
        height: 22px;
        margin: 0 0 20px;
        background: #757575;
        color: #f2f2f2;
      }
      .ob-skills__dd {
        background: rgba(0, 0, 0, 0.04);
        border-radius: 4px 4px 0px 0px;
        padding: 9px 22px;
        label {
          display: block;
          margin-bottom: 0;
          color: #9e9e9e;
          font-size: 12px;
          line-height: 15px;
        }
        .b-dropdown {
          width: 100%;
          .btn {
            background: transparent;
            color: #9e9e9e;
            border: none;
            text-align: left;
            padding-left: 0;
            opacity: 0.54;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.15px;
            box-shadow: none;
            &.dropdown-toggle-split {
              text-align: right;
              opacity: 1;
            }
            label {
              display: inline-block;
              font-size: 16px;
            }
            .ob-dd__icon {
              position: absolute;
              right: 0;
              top: 0;
              font-weight: 500;
            }
          }
          .dropdown-menu {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
