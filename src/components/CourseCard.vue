<template>
  <b-card no-body class="overflow-hidden">
    <b-row>
      <b-col md="6">
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
      <b-col md="6">
        <b-card-img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrqmBFVLaebmQjFXHv1twlR6tQ_7ILzy33Bg"
          alt="disney"
          class="rounded-0"
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
    course: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
