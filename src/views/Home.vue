<template>
  <div>
    <NavBar></NavBar>
    <div class="home">
      <img
        alt="Mickey Mouse"
        src="https://media.giphy.com/media/1kJxyyCq9ZHXX0GM3a/giphy.gif"
      />
      <HelloWorld
        msg="Latest health knowledge and evidence to health practitioners worldwide"
      />
      <br />
      <div id="courses-section">
        <b-card-group columns>
          <CourseCard
            v-for="(c, index) in allCourses"
            :key="index"
            :course="c"
            :index="`course-card-${index}`"
          ></CourseCard>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import CourseCard from "@/components/CourseCard.vue";
import NavBar from "@/components/NavBar.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    NavBar,
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
