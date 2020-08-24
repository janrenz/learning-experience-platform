<template>
  <b-card no-body class="overflow-hidden" :id="index">
    <b-row>
      <b-col md="8">
        <b-card-body align="left">
          <p class="card-label">Category</p>
          <b-card-title>{{ course.title }}</b-card-title>
          <b-card-text>
            <p>⭐️⭐️⭐️⭐️★ 123 Reviews</p>
            <p>
              Estimated Time <br />
              3 Months
            </p>
          </b-card-text>
        </b-card-body>
      </b-col>
      <b-col md="4">
        <b-card-img
          :src="require('@/assets/images/placeholder.svg')"
          alt="disney"
          class="rounded-0"
          width="46"
          height="46"
        ></b-card-img>
        <b-card-text align="right" class="padding-10">
          <p>
            Difficulty <br />
            Moderate
          </p>
        </b-card-text>
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
  }
  .card-title {
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.87);
  }
}
</style>
