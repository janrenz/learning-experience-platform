<template>
  <div class="home">
    <img
      alt="Mickey Mouse"
      src="https://media.giphy.com/media/1kJxyyCq9ZHXX0GM3a/giphy.gif"
    />
    <HelloWorld
      msg="Welcome to the WHO Academy LXP Landing page AKA Disney Land :)"
    />

    <pre>
      {{ allCourses }}
    </pre>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  computed: { ...mapGetters(["allCourses"]) },
  mounted() {
    this.$nextTick(() => {
      this.$store.dispatch("getAllCourses");
    });
  }
};
</script>
