<template>
  <div class="review-card">
    <b-card>
      <div class="review__name">
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
    .review__name {
      p {
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0.1px;
        color: rgba(0, 0, 0, 0.87);
      }
    }
    .card-text {
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.1px;
      color: #52575c;
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
