<template>
  <div class="h-100">
    <UserLayout>
      <template v-slot:right-section>
        <b-col>
          <div class="cd-main" v-if="currentCourse">
            <div>
              <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
            </div>
            <div class="cd-main__sec">
              <b-row class="h-100 d-flex align-items-center">
                <b-col md="8" class="h-100">
                  <p class="cd-sec__category">Category</p>
                  <h3>{{ currentCourse.title }}</h3>
                  <p class="cd-sec__des ">
                    {{ currentCourse.description }}
                  </p>
                  <div class="cd-sec__additional">
                    <b-row>
                      <b-col md="6">
                        <b-card-text>
                          <p class="card__reviews mb-2">
                            <Rating :rating-arr="ratingArr" />
                            123 Reviews
                          </p>
                          <p>218 Learners Enrolled</p>
                        </b-card-text>
                      </b-col>
                      <b-col md="6">
                        <p class="card__level mb-2">Level: Intermediate</p>
                        <p class="card__time">
                          <span>Estimated Time:</span>
                          {{ getDuration }}
                        </p>
                      </b-col>
                    </b-row>
                  </div>
                </b-col>
                <b-col md="4" class="h-100">
                  <div class="card-placeholder__div">
                    <b-card-img
                      :src="require('@/assets/images/placeholder.svg')"
                      alt="disney"
                      class="rounded-0"
                      width="200"
                      height="200"
                    ></b-card-img>
                  </div>
                </b-col>
                <b-col class="cd-sec__footer">
                  <b-button class="ob-btn ob-btn-primary mr-3"
                    >Enroll now ➞
                  </b-button>
                  <b-button class="ob-btn" disabled>Save for later</b-button>
                </b-col>
              </b-row>
            </div>
            <b-row class="m-0 mt-4">
              <b-col md="9" class="cd-content pl-0">
                <div class="cd-content__sec h-100">
                  <h5>Course Contents</h5>
                  <div class="cd-content__timeline">
                    <ul class="cd-timeline__ul">
                      <li v-for="(a, i) in [1, 3, 4, 5, 6]" :key="i">
                        <div class="cd-timeline__circle">
                          <span></span>
                        </div>
                        <div class="cd-timeline__content">
                          <p>Course Introduction</p>
                          <span
                            >A brief description of the course’s background,
                            learning objectives, and what the learner should
                            know prior to beginning the following modules</span
                          >
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </b-col>
              <b-col md="3" class="cd-content p-0">
                <div class="cd-author__sec">
                  <div class="cd-author__name">
                    <img
                      src="@/assets/images/avatar.svg"
                      alt=""
                      width="63"
                      height="63"
                    />
                    <h5>Florence Nightingale</h5>
                    <p>Nurse Training Specialist</p>
                  </div>
                  <div class="cd-author__des">
                    <p>Founder, Nursing School@ King’s College London</p>
                    <span
                      >‘And what nursing has to do in either case, is to put the
                      patient in the best condition for nature to act upon
                      him.’</span
                    >
                  </div>
                  <div class="cd-author__review">
                    <Rating :rating-arr="ratingArr" />
                    <span>Instructor since 2020</span>
                  </div>
                  <div class="cd-author__contact">
                    <img src="@/assets/images/email.svg" alt="" class="mr-3" />
                    <img src="@/assets/images/message.svg" alt="" />
                  </div>
                </div>
              </b-col>
            </b-row>
            <b-row class="cd-certificate m-0 mt-4">
              <b-col md="8" class="p-0">
                <div>
                  <b-media left-align vertical-align="center">
                    <template v-slot:aside>
                      <b-img
                        :src="require('@/assets/images/success.svg')"
                        width="80"
                        alt="placeholder"
                      ></b-img>
                    </template>
                    <h5 class="mt-0 mb-1 ml-3">
                      Earn your digital certificate!
                    </h5>
                    <p class="mb-0 ml-3">
                      After completion of all course modules and satisfactory
                      assessment score, you will receive a digital certificate.
                    </p>
                    <div class="d-flex mt-3 ml-3">
                      <b-button pill class="ob-btn__pill"
                        >Empathic Listening</b-button
                      >
                      <b-button pill class="ob-btn__pill"
                        >Preventive Care Strategies</b-button
                      >
                      <b-button pill class="ob-btn__pill">IPC</b-button>
                    </div>
                  </b-media>
                </div>
              </b-col>
              <b-col
                md="4"
                class="p-0 d-flex justify-content-end align-items-center"
              >
                <b-button class="ob-btn ob-btn-primary mr-3"
                  >Enroll now ➞
                </b-button>
              </b-col>
            </b-row>
            <b-row class="m-0 mt-4">
              <b-col>
                <h5>Learner reviews</h5>
                <b-row class="m-0">
                  <b-col md="3">
                    <div>
                      <h3>4.0</h3>
                      <Rating :rating-arr="ratingArr" />
                      <p>Course Rating</p>
                    </div>
                  </b-col>
                  <b-col md="9">
                    <div class="slider">
                      <div class="review-card">
                        <b-card
                          title="Card title"
                          sub-title="Card subtitle"
                          v-for="(c, index) in reviewArr"
                          :key="index"
                        >
                          <b-card-text>
                            Some quick example text to build on the
                            <em>card title</em> and make up the bulk of the
                            card's content.
                          </b-card-text>

                          <b-card-text
                            >After the course, I am confident I can bring major
                            changes to my hospital system!</b-card-text
                          >
                        </b-card>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </template>
    </UserLayout>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserLayout from "@/components/Layout/UserLayout";
import Rating from "@/components/WrapperComponents/Rating.vue";
import { tns } from "tiny-slider/src/tiny-slider";

export default {
  components: { UserLayout, Rating },
  data() {
    return {
      breadcrumbs: [
        {
          text: "Courses",
          href: "#"
        },
        {
          text: "All courses",
          href: "#"
        },
        {
          text: "",
          active: true
        }
      ],
      ratingArr: [1, 2, 3, 4, 5],
      reviewArr: [1, 2, 3, 4, 5],
      sliderItems: 3
    };
  },
  computed: {
    ...mapGetters(["allCourses"]),
    currentCourse() {
      return this.allCourses.find(c => c.id == this.$route.params.id);
    },
    getDuration() {
      let d = Number(this.currentCourse.duration_seconds);
      return `${d / 60}m`;
    }
  },
  watch: {
    currentCourse(c) {
      if (c.title) this.breadcrumbs[this.breadcrumbs.length - 1].text = c.title;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$store.dispatch("getAllCourses");
      this.initiateSlider();
    });
  },
  methods: {
    initiateSlider() {
      if (this.slider) this.slider.destroy();
      this.slider = tns({
        container: ".slider",
        items: this.sliderItems,
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
.cd-main {
  padding: 2% 3%;
  text-align: left;
  .cd-main__sec {
    background: #f3f3f3;
    border-radius: 4px;
    padding: 4%;
    .cd-sec__category {
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: 0.2px;
      color: #000000;
      margin-bottom: 24px;
    }
    h3 {
      font-weight: 500;
      font-size: 32px;
      line-height: 42px;
      letter-spacing: 0.1px;
      color: #000000;
      margin-bottom: 3%;
    }
    .cd-sec__des {
      font-size: 18px;
      line-height: 24px;
      letter-spacing: 0.2px;
      color: #000000;
      margin-bottom: 6%;
    }
    .cd-sec__additional {
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.2px;
      color: rgba(0, 0, 0, 0.87);
      .card__reviews {
        color: rgba(0, 0, 0, 0.54);
        letter-spacing: 0.4px;
      }
    }
    .cd-sec__footer {
      margin-top: 4%;
    }
  }
  .cd-content {
    height: 500px;
    .cd-content__sec,
    .cd-author__sec {
      border: 1px solid #e5e5e5;
      box-sizing: border-box;
      border-radius: 4px;
      padding: 3% 0;
      h5 {
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 0.2px;
        color: rgba(0, 0, 0, 0.87);
        margin-bottom: 20px;
        padding: 0 3%;
      }
      .cd-content__timeline {
        padding: 0 4%;
        height: calc(100% - 40px);
        overflow: hidden auto;
        .cd-timeline__ul {
          padding-left: 20px;
          position: relative;
          list-style: none;
          &::before {
            content: "";
            background: #e1e1e1;
            top: 10px;
            bottom: 0;
            position: absolute;
            width: 3px;
            left: 0;
          }
          li {
            position: relative;
            .cd-timeline__circle {
              width: 14px;
              height: 14px;
              border-radius: 50%;
              display: inline-block;
              position: absolute;
              left: -3.8%;
              top: 5px;
              background: #fff;
              border: 3px solid #ffffff;
              box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
              span {
                width: 10px;
                height: 10px;
                background: #545454;
                border-radius: 50%;
                display: inline-block;
                position: absolute;
                top: -1px;
                left: -1px;
              }
            }
            .cd-timeline__content {
              p {
                font-weight: 500;
                font-size: 18px;
                line-height: 24px;
                letter-spacing: 0.2px;
                color: rgba(0, 0, 0, 0.87);
                margin-bottom: 10px;
              }
              span {
                font-size: 16px;
                line-height: 24px;
                letter-spacing: 0.1px;
                color: rgba(0, 0, 0, 0.54);
                margin-bottom: 3%;
                display: inline-block;
              }
            }
            &:last-child {
              .cd-timeline__content {
                span {
                  margin-bottom: 0;
                }
              }
            }
          }
        }
      }
    }
    .cd-author__sec {
      padding: 4% 5%;
      text-align: center;
      height: 100%;
      .cd-author__name {
        margin-top: 7%;
        h5 {
          margin: 6% 0 2%;
          padding: 0;
        }
        p {
          font-size: 12px;
          line-height: 16px;
          text-align: center;
          letter-spacing: 0.2px;
          color: #000000;
          margin-bottom: 18%;
        }
      }
      .cd-author__des {
        p {
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          text-align: center;
          letter-spacing: 0.1px;
          color: rgba(0, 0, 0, 0.87);
        }
        span {
          font-size: 14px;
          line-height: 22px;
          text-align: center;
          letter-spacing: 0.1px;
          color: rgba(0, 0, 0, 0.54);
        }
      }
      .cd-author__review {
        margin-top: 17%;
        span {
          display: block;
          font-size: 12px;
          line-height: 15px;
          text-align: center;
          letter-spacing: 0.4px;
          color: rgba(0, 0, 0, 0.54);
        }
      }
      .cd-author__contact {
        margin-top: 10%;
        img {
          border: 1px solid #e5e5e5;
          box-sizing: border-box;
          border-radius: 4px;
          padding: 3%;
        }
      }
    }
  }
  .cd-certificate {
    background: #fbfbfb;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 4%;
    .media-body {
      h5 {
        font-weight: 500;
        font-size: 32px;
        line-height: 42px;
        letter-spacing: 0.1px;
        color: #000000;
      }
      p {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.1px;
        color: #000000;
      }
      .ob-btn__pill {
        font-weight: 500;
        font-size: 10px;
        line-height: 16px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 1.25px;
        text-transform: uppercase;
        color: #828282;
        background: #efefef;
        border: none;
        margin-right: 10px;
      }
    }
  }
}
.breadcrumb {
  background: transparent;
  padding-left: 0;
  margin-bottom: 10px;
  .breadcrumb-item {
    font-size: 14px;
    a {
      color: #000;
    }
    &.active {
      color: #000;
    }
    + .breadcrumb-item {
      &::before {
        content: ">";
      }
    }
  }
}
</style>
