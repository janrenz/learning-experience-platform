<template>
  <div class="h-100">
    <UserLayout>
      <template v-slot:right-section>
        <div class="cd-main" v-if="currentCourse">
          <h3>{{ currentCourse.title }}</h3>
          <p>{{ currentCourse.description }}</p>
          <p>{{ getDuration }}</p>
        </div>
      </template>
    </UserLayout>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserLayout from "@/components/Layout/UserLayout";

export default {
  components: { UserLayout },
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
  mounted() {
    this.$nextTick(() => {
      this.$store.dispatch("getAllCourses");
    });
  }
};
</script>
<style lang="scss" scoped>
.cd-main {
  padding: 5%;
  text-align: left;
}
</style>
