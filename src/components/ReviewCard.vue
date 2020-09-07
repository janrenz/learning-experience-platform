<template>
  <div class="review-card">
    <b-card>
      <div class="review__name">
        <img src="@/assets/images/avatar.svg" alt="" />
        <p class="ml-2 d-inline-block">{{ review.name }}</p>
      </div>
      <b-card-text>
        <Rating :rating-arr="ratingArr" />
        <span class="review__date">{{ review.date }}</span>
      </b-card-text>

      <b-card-text>{{ review.review }}</b-card-text>
    </b-card>
  </div>
</template>
<script>
import Rating from "@/components/WrapperComponents/Rating.vue";

export default {
  props: ["review"],
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
  height: 200px;
  background: #ffffff;
  .card {
    margin-right: 10px;
    height: 100%;
    background: #fff;
    border: none;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    .card-body {
      padding: 16px;
    }
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
