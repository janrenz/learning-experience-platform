<template>
  <div class="h-100">
    <b-container fluid class="ul-container h-100">
      <b-row class="h-100">
        <b-col cols="3" class="h-100 p-0 ul-left">
          <div class="ul-left__logo">
            <img src="@/assets/images/whoa-logo.svg" alt="" width="140" />
          </div>
          <div class="ul-left__menu">
            <div class="ul-left__menu-content">
              <div class="ul-left__name">
                <img src="@/assets/images/avatar.svg" alt="" class="mr-3" />
                <label>Julie Harley</label>
              </div>
              <ul>
                <li v-for="(a, i) in menuArr" :key="i">
                  <img :src="a.path" alt="menu" class="mr-3" />
                  {{ a.name }}
                </li>
              </ul>
              <div class="ul-left__name">
                <img src="@/assets/images/settings.svg" alt="" class="mr-3" />
                <label> Settings</label>
              </div>
            </div>
          </div>
        </b-col>
        <b-col cols="9" class="h-100 p-0 ul-right">
          <slot name="right-section"></slot>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuArr: [
        {
          path: "@/assets/images/dashboard.svg",
          name: "Dashboard",
          active: true
        },
        {
          path: "@/assets/images/calendar.svg",
          name: "Courses",
          active: false
        },
        {
          path: "@/assets/images/message.svg",
          name: "Messages",
          active: false
        },
        {
          path: "@/assets/images/calendar.svg",
          name: "Calendar",
          active: false
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.ul-container {
  .ul-left {
    .ul-left__logo {
      padding: 7% 10%;
      background: #efefef;
      height: 30%;
      text-align: left;
    }
    .ul-left__menu {
      background: #ffffff;
      height: 70%;
      .ul-left__menu-content {
        height: 82%;
        background: #ffffff;
        box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.25);
        border-top-right-radius: 40px;
        width: calc(100% - 20px);
        position: absolute;
        top: 15%;
        z-index: 1;
        padding: 10% 20%;
        text-align: left;

        ul {
          list-style: none;
          padding-left: 0;
          li {
            margin-bottom: 30px;
          }
        }
        .ul-left__name {
          margin-bottom: 15%;
        }
      }
    }
  }
}
.ul-right {
  background: #efefef;
  margin-left: -20px;
}
</style>
