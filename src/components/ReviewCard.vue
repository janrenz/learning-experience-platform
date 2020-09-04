<template>
  <div class="review-card">
    <b-card>
      <div>
        <img src="@/assets/images/avatar.svg" alt="" />
        <p class="ml-2 d-inline-block">Erik Hencier</p>
      </div>
      <b-card-text>
        <Rating :rating-arr="ratingArr" />
        <span class="review__date">dd.mm.yy</span>
      </b-card-text>

      <b-card-text
        >After the course, I am confident I can bring major changes to my
        hospital system!</b-card-text
      >
    </b-card>
  </div>
</template>
<script>
import Rating from "@/components/WrapperComponents/Rating.vue";

export default {
  components: { Rating },
  data() {
    return {
      ratingArr: [1, 2, 3, 4, 5]
    };
  }
};
</script>
<style lang="scss" scoped>
.review-card {
  display: inline-block;
  .card {
    margin-right: 10px;
    .card-text {
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.1px;
      color: rgba(0, 0, 0, 0.6);
      .review__date {
        font-size: 11px;
        line-height: 14px;
        letter-spacing: 0.2px;
        color: rgba(0, 0, 0, 0.54);
        margin-left: 4px;
      }
    }
  }
}
</style>
