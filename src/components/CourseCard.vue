<template>
  <b-card no-body class="overflow-hidden" :id="index">
    <b-row>
      <b-col md="8" class="pr-0 courses-card__left">
        <b-card-body align="left">
          <p class="card-label">Category</p>
          <b-card-title>{{ course.title }}</b-card-title>
          <b-card-text>
            <p class="card__reviews">
              <img
                :src="
                  require(`@/assets/images/${
                    a == 5 ? 'star.svg' : 'star-filled.svg'
                  }`)
                "
                v-for="a in [1, 2, 3, 4, 5]"
                :key="a"
                class="mr-1"
                width="12"
                height="12"
              />
              123 Reviews
            </p>
            <p class="card__time">
              <span>Estimated Time</span>
              3 Months
            </p>
          </b-card-text>
        </b-card-body>
      </b-col>
      <b-col md="4" class="courses-card__right">
        <b-card-body class="h-100">
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
          <b-card-text align="right" class="padding-10">
            <p class="card__level">
              Beginner
              <br />
              level
            </p>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: "CourseCard",
  props: {
    course: Object,
    index: String
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
    margin-bottom: 30px;
  }
  .card-placeholder__div {
    height: 50%;
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
  .courses-card__right {
    .card-body {
      padding: 1.25em 0;
      .card-text {
        margin-top: 20%;
      }
      .card__level {
        padding-right: 1.25em;
        font-size: 12px;
        line-height: 15px;
        text-align: right;
        letter-spacing: 0.4px;
        color: rgba(0, 0, 0, 0.54);
      }
    }
  }
  .courses-card__left {
    .card-body {
      padding: 1.25em 0.75em;
    }
  }
}
</style>
