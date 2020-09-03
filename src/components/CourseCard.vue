<template>
  <div class="course-card" @click="$emit('click', course)">
    <b-card no-body class="overflow-hidden text-left" :id="index">
      <b-row class="h-100">
        <b-col class="h-100">
          <b-card-body class="h-100">
            <div class="courses-card__sec1">
              <b-row class="h-100">
                <b-col md="8" class="courses-card__left h-100">
                  <div class="h-100">
                    <p class="card-label">Category</p>
                    <h4
                      class="card-title"
                      :title="course.title"
                      v-html="cardTitle(course.title)"
                    ></h4>
                  </div>
                </b-col>
                <b-col md="4" class="courses-card__right">
                  <div class="card-placeholder__div">
                    <div>
                      <b-card-img
                        :src="require('@/assets/images/placeholder.svg')"
                        alt="disney"
                        class="rounded-0"
                        width="46"
                        height="46"
                      ></b-card-img>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div>
            <div class="courses-card__sec2">
              <b-row class="h-100">
                <b-col md="8" class="courses-card__left">
                  <b-card-text>
                    <p class="card__reviews">
                      <Rating :rating-arr="ratingArr" />
                      123 Reviews
                    </p>
                    <p class="card__time">
                      <span>Estimated Time</span>
                      3 Months
                    </p>
                  </b-card-text>
                </b-col>
                <b-col md="4" class="courses-card__right">
                  <b-card-text align="right" class="padding-10">
                    <p class="card__level">
                      Beginner
                      <br />
                      level
                    </p>
                  </b-card-text>
                </b-col>
              </b-row>
            </div>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import Rating from "@/components/WrapperComponents/Rating";
export default {
  name: "CourseCard",
  props: {
    course: Object,
    index: String,
    showChar: Number
  },
  components: { Rating },
  data() {
    return {
      ratingArr: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    cardTitle(title) {
      let cTitle = "";
      if (title.length > this.showChar) {
        let c = title.substr(0, this.showChar);
        cTitle = c + '<span class="moreellipses">...&nbsp;</span>';
      } else cTitle = title;
      return cTitle;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 4px;
  height: 230px;
  margin-right: 10px;
  .card-body {
    .courses-card__sec1 {
      margin-bottom: 3%;
      height: 60%;
    }
    .courses-card__sec2 {
      height: 40%;
      .row {
        display: flex;
        align-items: center;
      }
    }
    .courses-card__right {
      padding-right: 0;
      // .card-text {
      //   margin-top: 20%;
      // }
      .card__level {
        padding-right: 1.25em;
        font-size: 12px;
        line-height: 15px;
        text-align: right;
        letter-spacing: 0.4px;
        color: rgba(0, 0, 0, 0.54);
      }
      .card-placeholder__div {
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        & > div {
          width: 74px;
          height: 74px;
          background: linear-gradient(0deg, #e5e5e5, #e5e5e5);
          display: flex;
          align-items: center;
          border-radius: 4px;
        }
      }
    }
    .courses-card__left {
      .card-label {
        font-weight: normal;
        font-size: 10px;
        line-height: 12px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        color: rgba(0, 0, 0, 0.87);
        margin-bottom: 4px;
      }
      .card-title {
        font-weight: 600;
        font-size: 18px;
        line-height: 30px;
        letter-spacing: 0.15px;
        color: rgba(0, 0, 0, 0.87);
        // overflow: hidden;
        // height: calc(100% - 15px);
      }
      .card__reviews {
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.4px;
        color: rgba(0, 0, 0, 0.54);
      }
      .card__time {
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.4px;
        color: rgba(0, 0, 0, 0.54);
        margin-bottom: 0;
        span {
          font-size: 10px;
          line-height: 12px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(0, 0, 0, 0.87);
          display: block;
          margin-bottom: 4px;
        }
      }
    }
  }
}
</style>
