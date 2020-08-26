<template>
  <div class="ld-page h-100">
    <b-container fluid class="p-0 h-100">
      <NavBar></NavBar>
      <div class="ld-page__sec">
        <b-row>
          <b-col>
            <div class="ld-sec__one-left">
              <h1>Revolutionizing lifelong learning in health.</h1>
              <p>
                New and more effective methods of conveying knowledge and skills
                to working people.
              </p>
              <div>
                <b-button class="ob-btn mr-3">login</b-button>
                <b-button class="ob-btn">signup</b-button>
              </div>
            </div>
          </b-col>
          <b-col class="ld-sec__one-right">
            <img
              src="@/assets/images/placeholder.svg"
              alt="placeholder"
              width="339"
              height="339"
            />
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="ld-sec__two">
              <h3>The worlds latest selection of courses</h3>
              <div class="ld-sec__tabs">
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
              <div>
                <b-button class="ob-btn">Explore all courses</b-button>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="ld-sec__footer">
              <b-row>
                <b-col md="4">
                  <div class="ld-footer__pages">
                    <h3>Connect With Us</h3>
                    <p>
                      Reach us at <u>hello@whoacademy.org</u> or through our
                      <u>online contact form</u>.
                    </p>
                    <p>Have questions? Check our frequently asked questions.</p>
                  </div>
                </b-col>
                <b-col md="2">
                  <div class="ld-footer__pages">
                    <h3>Courses</h3>
                    <ul>
                      <li v-for="a in [1, 2, 3, 4]" :key="a">Category I</li>
                    </ul>
                  </div>
                </b-col>
                <b-col md="2">
                  <div class="ld-footer__pages">
                    <h3>Career</h3>
                    <ul>
                      <li v-for="a in [1, 2, 3, 4]" :key="a">Category I</li>
                    </ul>
                  </div>
                </b-col>
                <b-col md="2">
                  <div class="ld-footer__pages">
                    <h3>Literature</h3>
                    <ul>
                      <li v-for="a in [1, 2, 3, 4]" :key="a">Category I</li>
                    </ul>
                  </div>
                </b-col>
                <b-col md="2">
                  <div class="ld-footer__pages">
                    <h3>About us</h3>
                    <ul>
                      <li v-for="a in [1, 2, 3, 4]" :key="a">Category I</li>
                    </ul>
                  </div>
                </b-col>
              </b-row>
              <b-row class="ld-footer__copyright">
                <b-col md="6">
                  <div>
                    <p>
                      © 2020 World health Organization Academy. All rights
                      reserved.
                    </p>
                  </div>
                </b-col>
                <b-col md="6" class="text-right">
                  <div>
                    <img src="@/assets/images/social-media.svg" alt="" />
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import CourseCard from "@/components/CourseCard.vue";
import NavBar from "@/components/NavBar.vue";
import { mapGetters } from "vuex";
import { tns } from "tiny-slider/src/tiny-slider";

export default {
  name: "Home",
  components: {
    NavBar,
    CourseCard
  },
  data() {
    return {
      slider: "",
      currentSlide: 0,
      sliderItems: 3,
      tabs: [
        {
          name: "Trending courses",
          active: true
        },
        {
          name: "Category I",
          active: false
        },
        {
          name: "Category II",
          active: false
        },
        {
          name: "Category III",
          active: false
        },
        {
          name: "Category IV",
          active: false
        },
        {
          name: "Category V",
          active: false
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["allCourses"])
  },
  mounted() {
    this.$nextTick(() => {
      this.$store.dispatch("getAllCourses");
    });
    setTimeout(() => {
      this.initiateSlider(".slider-0");
    }, 500);
  },
  methods: {
    initiateSlider(container) {
      if (this.slider) this.slider.destroy();
      this.slider = tns({
        container: container,
        items: this.sliderItems,
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
<style lang="scss" scoped>
.ld-page {
  z-index: 0;
  .ld-page__sec {
    height: calc(100% - 65px);
    overflow: hidden auto;
    .ld-sec__one-left {
      padding: 25% 13%;
      text-align: left;
      h1 {
        font-weight: bold;
        font-size: 40px;
        line-height: 47px;
        letter-spacing: 1.25px;
        color: #000000;
      }
      p {
        font-weight: normal;
        font-size: 20px;
        line-height: 26px;
        letter-spacing: 1.25px;
        color: #000000;
        margin-bottom: 45px;
      }
    }
    .ld-sec__one-right {
      padding: 0;
      background: #efefef;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ld-sec__two {
      background: #faf8f8;
      padding: 8% 6%;
      h3 {
        font-weight: bold;
        font-size: 30px;
        line-height: 35px;
        letter-spacing: 1.25px;
        color: #000000;
      }
      .ld-sec__courses {
        margin-top: 50px;
      }
    }
    .ld-sec__footer {
      background: #f3f3f3;
      padding: 5% 9%;
      text-align: left;
      .ld-footer__pages {
        h3 {
          font-weight: bold;
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 0.25px;
          text-transform: uppercase;
          color: #000000;
        }
        ul {
          list-style: none;
          padding-left: 0;
        }
        p,
        li {
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.25px;
          color: #757575;
          margin-bottom: 10px;
        }
        p {
          width: 65%;
          margin-bottom: 20px;
        }
      }
      .ld-footer__copyright {
        margin: 8% 0 2%;
        border-top: 1px solid #c4c4c4;
        & > div {
          padding-top: 3%;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.ld-sec__tabs {
  margin: 5% 0;
  position: relative;
  #custom-controls {
    position: absolute;
    top: 60%;
    width: 100%;
    & > div {
      position: absolute;
      .b-icon {
        cursor: pointer;
      }
      &.text-left {
        left: -40px;
      }
      &.text-right {
        right: -40px;
      }
    }
  }
  .tabs {
    .nav-tabs {
      border-bottom: none;
      width: calc(100% - 120px);
      margin: 0 auto;
      .nav-link {
        border: none;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 1.25px;
        text-transform: uppercase;
        color: rgba(0, 0, 0, 0.6);
        &.active {
          background: transparent;
          color: #000000;
          &::after {
            content: "";
            border-bottom: 2px solid;
            display: block;
            position: relative;
            top: 14px;
          }
        }
        &:focus {
          outline: none;
        }
      }
    }
  }
}
@media all and (min-width: 991px) and (max-width: 1250px) {
  .ld-page {
    .ld-sec__one-left {
      padding: 150px 95px;
    }
    .ld-sec__one-right {
      img {
        width: 260px;
        height: 260px;
      }
    }
    .ld-sec__tabs .tabs .nav-tabs {
      width: calc(100% - 80px);
    }
  }
}
@media all and (max-width: 990px) {
  .ld-page {
    .ld-page__sec {
      .ld-sec__one-left {
        text-align: center;
      }
      .ld-sec__one-right {
        display: none;
      }
    }
  }
}
@media all and (max-width: 540px) {
  .ld-page {
    .ld-page__sec {
      .ld-sec__one-left {
        padding: 20% 8%;
        h1 {
          font-size: 32px;
          line-height: 37px;
          letter-spacing: initial;
          margin-bottom: 25px;
        }
        p {
          font-size: 22px;
          line-height: 26px;
        }
      }
    }
  }
}
</style>
