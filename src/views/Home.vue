<template>
  <div class="home">
    <img
      alt="Mickey Mouse"
      src="https://media.giphy.com/media/1kJxyyCq9ZHXX0GM3a/giphy.gif"
    />
    <HelloWorld
      msg="Latest health knowledge and evidence to health practitioners worldwide"
    />
    <br />
    <b-card-group columns>
      <CourseCard
        v-for="(c, index) in allCourses"
        :key="index"
        :course="c"
      ></CourseCard>
    </b-card-group>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import CourseCard from "@/components/CourseCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    HelloWorld,
    CourseCard
  },
  computed: { ...mapGetters(["allCourses"]) },
  mounted() {
    this.$nextTick(() => {
      this.$store.dispatch("getAllCourses");
    });
  }
};
</script>
