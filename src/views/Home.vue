<template>
  <div class="ld-page h-100">
    <b-container fluid class="p-0 h-100">
      <NavBar></NavBar>
      <div class="ld-page__sec">
        <b-row>
          <b-col>
            <div class="ld-sec__one-left">
              <h1>Revolutionizing lifelong learning in health.</h1>
              <p>
                New and more effective methods of conveying knowledge and skills
                to working people.
              </p>
              <div>
                <b-button class="ob-btn mr-3">login</b-button>
                <b-button class="ob-btn">signup</b-button>
              </div>
            </div>
          </b-col>
          <b-col class="ld-sec__one-right">
            <img
              src="@/assets/images/placeholder.svg"
              alt="placeholder"
              width="339"
              height="339"
            />
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="ld-sec__two">
              <h3>The worlds latest selection of courses</h3>
              <div class="ld-sec__tabs">
                <b-tabs content-class="mt-3">
                  <b-tab title="Trending courses" active>
                    <div class="ld-sec__courses">
                      <b-card-group columns>
                        <CourseCard
                          v-for="(c, index) in allCourses"
                          :key="index"
                          :course="c"
                          :index="`course-card-${index}`"
                        ></CourseCard>
                      </b-card-group>
                    </div>
                  </b-tab>
                  <b-tab title="Category I"><p>I'm the second tab</p></b-tab>
                  <b-tab title="Category II"><p>I'm a disabled tab!</p></b-tab>
                  <b-tab title="Category III"><p>I'm a disabled tab!</p></b-tab>
                  <b-tab title="Category IV"><p>I'm a disabled tab!</p></b-tab>
                  <b-tab title="Category V"><p>I'm a disabled tab!</p></b-tab>
                </b-tabs>
              </div>
              <div>
                <b-button class="ob-btn">Explore all courses</b-button>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import CourseCard from "@/components/CourseCard.vue";
import NavBar from "@/components/NavBar.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    NavBar,
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
<style lang="scss" scoped>
.ld-page {
  z-index: 0;
  .ld-page__sec {
    height: calc(100% - 65px);
    overflow: hidden auto;
    .ld-sec__one-left {
      padding: 25% 13%;
      text-align: left;
      h1 {
        font-weight: bold;
        font-size: 40px;
        line-height: 47px;
        letter-spacing: 1.25px;
        color: #000000;
      }
      p {
        font-weight: normal;
        font-size: 20px;
        line-height: 26px;
        letter-spacing: 1.25px;
        color: #000000;
        margin-bottom: 45px;
      }
    }
    .ld-sec__one-right {
      padding: 0;
      background: #efefef;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ld-sec__two {
      background: #faf8f8;
      padding: 8% 6%;
      h3 {
        font-weight: bold;
        font-size: 30px;
        line-height: 35px;
        letter-spacing: 1.25px;
        color: #000000;
      }
      .ld-sec__courses {
        margin-top: 50px;
      }
    }
  }
}
@media all and (min-width: 991px) and (max-width: 1250px) {
  .ld-page {
    .ld-sec__one-left {
      padding: 150px 95px;
    }
    .ld-sec__one-right {
      img {
        width: 260px;
        height: 260px;
      }
    }
  }
}
@media all and (max-width: 990px) {
  .ld-page {
    .ld-page__sec {
      .ld-sec__one-left {
        text-align: center;
      }
      .ld-sec__one-right {
        display: none;
      }
    }
  }
}
@media all and (max-width: 540px) {
  .ld-page {
    .ld-page__sec {
      .ld-sec__one-left {
        padding: 20% 8%;
        h1 {
          font-size: 32px;
          line-height: 37px;
          letter-spacing: initial;
          margin-bottom: 25px;
        }
        p {
          font-size: 22px;
          line-height: 26px;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.ld-sec__tabs {
  margin-top: 5%;
  .tabs {
    .nav-tabs {
      border-bottom: none;
      width: calc(100% - 120px);
      margin: 0 auto;
      .nav-link {
        border: none;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 1.25px;
        text-transform: uppercase;
        color: rgba(0, 0, 0, 0.6);
        &.active {
          background: transparent;
          color: #000000;
          &::after {
            content: "";
            border-bottom: 2px solid;
            display: block;
            position: relative;
            top: 14px;
          }
        }
        &:focus {
          outline: none;
        }
      }
    }
  }
}
</style>
