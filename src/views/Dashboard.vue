<template>
  <div class="h-100">
    <UserLayout>
      <template v-slot:right-section>
        <b-col class="h-100 db-bottom">
          <b-row class="db-bottom__profile">
            <b-col cols="7" class="pl-0 db-learning__exp">
              <div class="h-100 db-acheivement">
                <!-- <b-card class="h-100">
                  <b-row class="h-100">
                    <b-col md="8" class="pr-0 h-100">
                      <b-card-body
                        align="left"
                        class="card-content__right h-100"
                      >
                        <b-card-title
                          >WHO Academy Learning Experience Platform
                          Tutorial</b-card-title
                        >
                        <b-card-text>
                          <p class="card__reviews">
                            Take a tour of the platform’s pages and features to
                            make the most of your learning experience.
                          </p>
                          <p class="card-play">
                            <span
                              ><img src="@/assets/images/play.svg" alt=""
                            /></span>
                            watch video
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
                </b-card> -->
                <h5>My Achievements ></h5>
                <b-row>
                  <b-col md="4" v-for="(a, i) in acheivementArr" :key="i">
                    <div class="db-acheivement__div">
                      <label>{{ a.title }}</label>
                      <p>{{ a.description }}</p>
                    </div>
                  </b-col>
                </b-row>
              </div>
            </b-col>
            <b-col cols="5" class="db-complete__profile">
              <div class="h-100">
                <!-- <b-card class="h-100">
                  <b-row class="h-100">
                    <b-col md="8" class="pr-0 h-100">
                      <b-card-body
                        align="left"
                        class="card-content__right h-100"
                      >
                        <b-card-title
                          >Complete your profile for a seamless
                          experience</b-card-title
                        >
                        <b-card-text>
                          <p class="card-play">
                            Complete profile ➞
                          </p>
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                    <b-col md="4"> </b-col>
                  </b-row>
                </b-card> -->
                <h5>Messages ></h5>
                <b-row class="db-message" v-for="(m, i) in messageArr" :key="i">
                  <b-col md="8">
                    <b-media tag="li">
                      <template v-slot:aside>
                        <b-img
                          :src="require('@/assets/images/avatar.svg')"
                          width="40"
                          alt="placeholder"
                        ></b-img>
                      </template>
                      <h5 class="mt-0 mb-1">{{ m.name }}</h5>
                      <p class="mb-0">
                        {{ m.text }}
                      </p>
                    </b-media>
                  </b-col>
                  <b-col md="2" class="p-0">
                    <label>{{ m.date }}</label>
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <div class="ld-sec__tabs mt-0">
                <b-tabs content-class="mt-5">
                  <b-tab
                    :title="tab.name"
                    :active="tab.active"
                    v-for="(tab, index) in tabs"
                    :key="index"
                    @click="getCourses(index)"
                  >
                    <div
                      :class="`slider-${index} slider`"
                      data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'
                    >
                      <CourseCard
                        v-for="(c, index) in allCourses"
                        :key="index"
                        :course="c"
                        :index="`course-card-${index}`"
                        @click="onCard(c)"
                        :showChar="60"
                      ></CourseCard>
                    </div>
                  </b-tab>
                </b-tabs>
                <div id="custom-controls" v-show="slider">
                  <div class="text-left" @click="slideTo('prev')">
                    <b-icon
                      icon="chevron-left"
                      scale="2"
                      v-if="currentSlide != 0"
                    ></b-icon>
                  </div>
                  <div class="text-right">
                    <b-icon
                      icon="chevron-right"
                      scale="2"
                      @click="slideTo('next')"
                      v-if="allCourses.length > currentSlide + sliderItems"
                    ></b-icon>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </template>
    </UserLayout>
  </div>
</template>

<script>
import UserLayout from "../components/Layout/UserLayout";
import CourseCard from "@/components/CourseCard.vue";
import { mapGetters } from "vuex";
import { tns } from "tiny-slider/src/tiny-slider";

export default {
  components: { UserLayout, CourseCard },
  data() {
    return {
      slider: "",
      currentSlide: 0,
      sliderItems: 3,
      tabs: [
        {
          name: "Recommended Courses",
          active: true
        },
        {
          name: "Top picks of the month",
          active: false
        },
        {
          name: "New courses availble",
          active: false
        }
      ],
      acheivementArr: [
        {
          title: "Learning time",
          description: "0 min"
        },
        {
          title: "Courses completed",
          description: "0"
        },
        {
          title: "Level ",
          description: "Beginner"
        },
        {
          title: "Reviews shared",
          description: "0"
        },
        {
          title: "Team mates",
          description: "0"
        },
        {
          title: "Top Distinguitions",
          description: "0"
        }
      ],
      messageArr: [
        {
          name: "Rebecca Moore",
          text: "Thank you. See you later!",
          date: "29 Apr"
        },
        {
          name: "Franz Ferdinand",
          text: "You: It should be pretty simple.",
          date: "28 Apr"
        },
        {
          name: "Lindsey Stroud",
          text: "It’s fine",
          date: "27 Apr"
        }
      ]
    };
  },
  mounted() {
    if (
      this.$keycloak &&
      this.$keycloak.idTokenParsed &&
      this.$keycloak.idTokenParsed.sub
    ) {
      this.$nextTick(() => {
        this.$store
          .dispatch(
            "getAllRecommendedCourses",
            this.$keycloak.idTokenParsed.sub
          )
          .then(() => {
            this.initiateSlider(".slider-0");
          });
      });
    } else this.$router.push({ name: "Home" });
  },
  computed: {
    ...mapGetters(["allCourses", "allAuth"])
  },
  methods: {
    initiateSlider(container) {
      this.slider = tns({
        container: container,
        items: this.sliderItems,
        viewportMax: 300,
        slideBy: "page",
        autoplay: false,
        controls: false,
        loop: false,
        nav: false
      });
      this.getSliderInfo();
    },
    slideTo(action) {
      this.slider.goTo(action);
      this.getSliderInfo();
    },
    getSliderInfo() {
      let slider_info;
      if (this.slider) slider_info = this.slider.getInfo();
      this.currentSlide = slider_info ? slider_info.index : 0;
    },
    onCard(c) {
      this.$router.push({ path: `course-detail/${c.id}` });
    },
    getCourses(index) {
      if (index == 0)
        this.$store
          .dispatch(
            "getAllRecommendedCourses",
            this.$keycloak.idTokenParsed.sub
          )
          .then(() => {
            this.initiateSlider(".slider-0");
          });
      else
        this.$store.dispatch("getAllCourses").then(() => {
          this.initiateSlider(`.slider-${index}`);
        });
    }
  }
};
</script>
<style lang="scss">
.db-bottom {
  .db-bottom__profile {
    padding: 4% 3%;
    h5 {
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
      display: flex;
      align-items: center;
      letter-spacing: 0.1px;
      color: #0043ac;
      margin-bottom: 20px;
    }
    .card-body {
      padding: 1rem;
      &.card-content__right {
        padding: 0 10% 0 0;
      }
      .card-title {
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
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
        background: linear-gradient(0deg, #e5e5e5, #e5e5e5);
        display: flex;
        align-items: center;
        border-radius: 4px;
      }
    }
    .db-complete__profile,
    .db-learning__exp {
      min-height: 190px;
      .card-title {
        height: calc(100% - 50px);
      }
    }
    .db-learning__exp {
      .card-title {
        height: calc(100% - 100px);
      }
      .db-acheivement {
        .db-acheivement__div {
          background: #ffffff;
          box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.1);
          border-radius: 4px;
          padding: 16px 15px;
          margin-bottom: 20px;
          label {
            font-size: 11px;
            line-height: 14px;
            letter-spacing: 0.2px;
            color: #52575c;
            display: block;
            text-align: left;
          }
          p {
            margin-bottom: 0;
            font-weight: 500;
            font-size: 20px;
            line-height: 26px;
            display: flex;
            align-items: center;
            letter-spacing: 0.2px;
            color: #25282b;
          }
        }
      }
    }
    .db-complete__profile {
      padding: 0 0 0 5%;
      h5 {
        margin-bottom: 26px;
      }
      .db-message {
        margin-bottom: 20px;
        .media-body {
          text-align: left;
          h5 {
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.1px;
            color: rgba(0, 0, 0, 0.87);
          }
          p {
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 0.2px;
            color: #a0a4a8;
          }
        }
        label {
          font-size: 12px;
          line-height: 15px;
          text-align: right;
          letter-spacing: 0.4px;
          color: #52575c;
        }
      }
    }
  }
  .ld-sec__tabs {
    padding: 0 3% 0 2%;
    .nav-tabs {
      width: 100%;
    }
    #custom-controls {
      .text-left {
        left: -30px;
      }
      .text-right {
        right: 20px;
      }
    }
    .slider {
      margin-right: -20px;
      .col-md-4 {
        padding-left: 0;
      }
      .course-card {
        visibility: hidden;
        &.tns-item {
          visibility: visible;
        }
        .card {
          height: 250px;
          .card-title {
            height: calc(100% - 10px);
          }
        }
      }
    }
  }
}
@media all and (min-width: 990px) and (max-width: 1270px) {
  .db-bottom {
    .db-bottom__profile {
      .db-learning__exp {
        .card-title {
          margin-bottom: 4px;
        }
      }
    }
    .slider {
      .course-card {
        .card-title {
          height: calc(100% - 28px) !important;
        }
      }
    }
  }
}
</style>
