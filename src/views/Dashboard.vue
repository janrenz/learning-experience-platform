<template>
  <div class="h-100">
    <UserLayout>
      <template v-slot:right-section>
        <b-container fluid class="h-100 db-right p-0">
          <b-row class="db-right__top">
            <b-col cols="6" class="h-100 p-0 db-top__content">
              <div class="db-top__left text-left">
                <h2>
                  <b>Welcome</b>
                  {{ allAuth.profile && allAuth.profile.firstName }}
                  {{ allAuth.profile && allAuth.profile.lastName }} !
                </h2>
                <p class="db-top__content">
                  Happy to have you on board, start learning now!
                </p>
                <p class="db-top__subcontent">Explore courses ➞</p>
              </div>
            </b-col>
            <b-col cols="6" class="h-100 p-0 db-top__search">
              <img src="@/assets/images/search.svg" alt="search" width="20" />
              <div>
                <b-form-input
                  v-model="search"
                  placeholder="Search"
                ></b-form-input>
              </div>
              <img
                src="@/assets/images/notification.svg"
                alt="notification"
                width="16"
              />
            </b-col>
          </b-row>
          <b-row class="db-right__bottom">
            <b-col class="h-100">
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
                                Take a tour of the platform’s pages and features
                                to make the most of your learning experience.
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
                                :src="
                                  require('@/assets/images/placeholder.svg')
                                "
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
          </b-row>
        </b-container>
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
      search: "",
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
      this.$store.dispatch("getAllCourses");
    });
    setTimeout(() => {
      this.initiateSlider(".slider-0");
    }, 500);
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
    }
  }
};
</script>
<style lang="scss">
.db-right {
  z-index: 0;
  .db-right__top {
    height: 30%;
    background: #efefef;
    margin-right: -20px;
    padding: 3%;
    .db-top__content {
      display: flex;
      align-items: center;
      h2 {
        font-size: 30px;
        line-height: 21px;
        letter-spacing: 0.1px;
        color: #000000;
        margin-bottom: 20px;
      }
      .db-top__content {
        margin-bottom: 25px;
        font-size: 16px;
        line-height: 21px;
        letter-spacing: 0.1px;
        color: #000000;
      }
      .db-top__subcontent {
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 1.25px;
        text-transform: uppercase;
        color: #000000;
        margin-bottom: 0;
      }
    }
    .db-top__search {
      text-align: right;
      & > div {
        width: 50%;
        display: inline-block;
        margin: 0 15px 0 10px;
        input.form-control {
          display: inline-block;
          background: transparent;
          border: none;
          border-bottom: 1px solid #000;
          border-radius: 0;
          color: #757575;
          padding: 0.25rem 0.75rem 0.25rem 0;
          font-size: 14px;
          line-height: 24px;
          letter-spacing: 0.15px;
          &:focus {
            box-shadow: none;
          }
        }
      }
    }
  }
  .db-right__bottom {
    height: 70%;
    background: #ffffff;
    overflow: hidden auto;
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
          }
        }
      }
    }
  }
}
</style>
