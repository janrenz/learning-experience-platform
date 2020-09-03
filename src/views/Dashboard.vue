<template>
  <div class="h-100">
    <UserLayout>
      <template v-slot:right-section>
        <b-col class="h-100 db-bottom">
          <b-row class="db-bottom__profile">
            <b-col cols="6" class="pl-0 db-learning__exp">
              <div class="h-100">
                <b-card class="h-100">
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
                </b-card>
              </div>
            </b-col>
            <b-col cols="6" class="p-0 db-complete__profile">
              <div class="h-100">
                <b-card class="h-100">
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
                </b-card>
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
                    @click="initiateSlider(`.slider-${index}`)"
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
          name: "RecomMended Courses",
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
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$store.dispatch("getAllCourses").then(() => {
        this.initiateSlider(".slider-0");
      });
    });
  },
  computed: {
    ...mapGetters(["allCourses", "allAuth"])
  },
  methods: {
    initiateSlider(container) {
      if (this.slider) this.slider.destroy();
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
    }
  }
};
</script>
<style lang="scss">
.db-bottom {
  .db-bottom__profile {
    padding: 2% 3% 4% 3%;
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
        .card {
          height: 250px;
          // .card-title {
          //   height: calc(100% - 10px);
          // }
        }
      }
    }
  }
}
</style>
