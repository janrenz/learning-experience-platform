<template>
  <div class="h-100">
    <UserLayout>
      <template v-slot:right-section>
        <b-col class="cd-course__detail">
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
                      :src="
                        require('@/assets/images/illustration-ipc-course.svg')
                      "
                      alt="disney"
                      class="rounded-0"
                      width="200"
                      height="200"
                    ></b-card-img>
                  </div>
                </b-col>
                <b-col class="cd-sec__footer">
                  <b-button
                    class="ob-btn ob-btn-primary mr-3"
                    v-b-modal.enroll-modal
                    >Enroll now ➞
                  </b-button>
                  <b-button class="ob-btn ob-btn-primary" disabled
                    >Save for later</b-button
                  >
                </b-col>
              </b-row>
              <b-modal id="enroll-modal" centered size="lg">
                <template v-slot:modal-header>
                  <div></div>
                </template>
                <div class="cd-enroll__div">
                  <div class="cd-enroll__title">
                    <img src="@/assets/images/success.svg" alt="" />
                    <h5>Revolutionizing lifelong learning in health.</h5>
                  </div>
                  <p class="cd-enroll__message fw-500">
                    You’ve been successfully enrolled in the course!
                  </p>
                  <p class="cd-enroll__message">
                    An acknowledgement email has been sent to you. Courses will
                    be available from May 2021. We’ll let you know once your
                    course is ready.
                  </p>
                </div>
                <template v-slot:modal-footer>
                  <div>
                    <b-button
                      class="btn-secondary"
                      @click="$bvModal.hide('enroll-modal')"
                      >Close</b-button
                    >
                  </div>
                </template>
              </b-modal>
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
                    <div class="mr-3">
                      <b-icon
                        icon="envelope-fill"
                        style="color:#0057E0;font-size:22px"
                      ></b-icon>
                    </div>
                    <div>
                      <b-icon
                        icon="chat-left-text-fill"
                        style="color:#0057E0;font-size:22px"
                      ></b-icon>
                    </div>
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
                        :src="require('@/assets/images/certificate.svg')"
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
            <b-row class="m-0 mt-4 cd-review">
              <b-col>
                <h5>Learner reviews</h5>
                <b-row class="m-0">
                  <b-col
                    md="2"
                    class="d-flex align-items-center justify-content-center"
                  >
                    <div class="cd-review__avg">
                      <h3>4.0</h3>
                      <Rating :rating-arr="ratingArr" />
                      <p>Course Rating</p>
                    </div>
                  </b-col>
                  <b-col md="10">
                    <div
                      class="slider"
                      data-slick='{"slidesToShow": 3, "slidesToScroll": 3}'
                    >
                      <ReviewCard
                        v-for="(c, index) in reviewArr"
                        :key="index"
                      />
                    </div>
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
import ReviewCard from "@/components/ReviewCard.vue";
import { tns } from "tiny-slider/src/tiny-slider";

export default {
  components: { UserLayout, Rating, ReviewCard },
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
      slider: "",
      sliderItems: 3,
      currentSlide: 0
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
      this.$store.dispatch("getAllCourses").then(() => {
        this.initiateSlider();
      });
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
    background: #ffffff;
    border-radius: 4px;
    padding: 4%;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.1);
    .cd-sec__category {
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: 0.2px;
      color: #0057e0;
      margin-bottom: 10px;
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
      color: #52575c;
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
      background: #ffffff;
      box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      box-sizing: border-box;
      border-radius: 4px;
      padding: 3% 0;
      h5 {
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
            background: #0057e0;
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
              left: -25px;
              top: 5px;
              background: #fff;
              border: 3px solid #ffffff;
              box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
              span {
                width: 10px;
                height: 10px;
                background: #1debce;
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
                color: #52575c;
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
          color: #25282b;
        }
        p {
          font-size: 12px;
          line-height: 16px;
          text-align: center;
          letter-spacing: 0.2px;
          color: #52575c;
          padding-bottom: 10%;
          border-bottom: 1px solid #e8e8e8;
          margin: 0 10%;
        }
      }
      .cd-author__des {
        margin-top: 10%;
        p {
          font-weight: 600;
          font-size: 14px;
          line-height: 18px;
          text-align: center;
          letter-spacing: 0.1px;
          color: #0057e0;
          margin: 0 5% 8%;
        }
        span {
          font-size: 16px;
          line-height: 24px;
          text-align: center;
          letter-spacing: 0.1px;
          color: #52575c;
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
        div {
          display: inline-block;
          border: 1px solid #e5e5e5;
          box-sizing: border-box;
          border-radius: 4px;
          padding: 0 3%;
          font-size: 18px;
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
        color: #0057e0;
      }
      p {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.1px;
        color: #52575c;
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
        color: #fff;
        background: #0057e0;
        border: none;
        margin-right: 10px;
      }
    }
  }
  .cd-review {
    #custom-controls {
      top: 45%;
      .text-right {
        right: 5px;
      }
      .text-left {
        left: -30px;
      }
      > div {
        font-size: 12px;
      }
    }
    .cd-review__avg {
      h3 {
        font-weight: bold;
        font-size: 50px;
        line-height: 59px;
        letter-spacing: 1.25px;
        color: #0057e0;
        margin-bottom: 0;
      }
      p {
        font-size: 10px;
        line-height: 12px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        color: #52575c;
        margin-top: 4px;
      }
    }
  }
}
.cd-course__detail {
  h5 {
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0.2px;
    color: #0057e0;
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
// modal

#enroll-modal {
  .modal-dialog {
    max-width: 750px;
  }
  .modal-header {
    border: none;
  }
  .modal-footer {
    justify-content: center;
    border: none;
    padding: 4% 9%;
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
    padding: 4% 9% 0;
    .cd-enroll__div {
      .cd-enroll__title {
        display: flex;
        align-items: center;
        margin-bottom: 5%;
        h5 {
          font-weight: 200;
          font-size: 40px;
          line-height: 47px;
          letter-spacing: 1.25px;
          color: #000000;
          margin-left: 5%;
        }
      }
      .cd-enroll__message {
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 0.2px;
        color: rgba(0, 0, 0, 0.87);
        text-align: center;
        &.fw-500 {
          font-weight: 500;
        }
      }
    }
  }
}
@media all and (min-width: 990px) and (max-width: 1170px) {
  .cd-course__detail {
    .cd-author__sec {
      .cd-author__name {
        img {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
}
</style>
