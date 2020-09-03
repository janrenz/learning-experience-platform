<template>
  <div class="lx-rating">
    <img
      :src="
        require(`@/assets/images/${a == 5 ? 'star.svg' : 'star-filled.svg'}`)
      "
      v-for="a in ratingArr"
      :key="a"
      class="mr-1"
      width="12"
      height="12"
    />
  </div>
</template>
<script>
export default {
  props: ["ratingArr"]
};
</script>
<style lang="scss">
.lx-rating {
  display: inline-block;
}
</style>
