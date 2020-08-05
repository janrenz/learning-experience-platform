<template>
  <div class="home">
    <img
      alt="Mickey Mouse"
      src="https://media.giphy.com/media/1kJxyyCq9ZHXX0GM3a/giphy.gif"
    />
    <HelloWorld
      msg="Welcome to the WHO Academy LXP Landing page AKA Disney Land :)"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
