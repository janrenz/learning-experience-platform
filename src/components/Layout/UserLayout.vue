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
                <img src="@/assets/images/avatar.svg" alt="" />
                <label>Julie Harley</label>
              </div>
              <ul class="ul-menu__sec">
                <li
                  v-for="(a, i) in menuArr"
                  :key="i"
                  :class="{ 'ul-menu__name': true, active: a.active }"
                >
                  <img :src="a.path" alt="menu" />
                  {{ a.name }}
                </li>
              </ul>
              <div class="ul-left__name mb-2">
                <img src="@/assets/images/settings.svg" alt="" />
                <label class="ul-menu__name"> Settings</label>
              </div>
            </div>
          </div>
        </b-col>
        <b-col cols="9" class="h-100 p-0 ul-right">
          <b-container fluid class="h-100 ul-right__div p-0">
            <b-row class="ul-right__top">
              <b-col cols="6" class="h-100 p-0 ul-top__content">
                <div class="ul-top__left text-left">
                  <h2>
                    <b>Welcome</b>
                    {{ allAuth.profile && allAuth.profile.firstName }}
                    {{ allAuth.profile && allAuth.profile.lastName }} !
                  </h2>
                  <p class="ul-top__content">
                    Happy to have you on board, start learning now!
                  </p>
                  <p class="ul-top__subcontent">Explore courses ➞</p>
                </div>
              </b-col>
              <b-col cols="6" class="h-100 p-0 ul-top__search">
                <img src="@/assets/images/search.svg" alt="search" width="20" />
                <div>
                  <b-form-input
                    v-model="search"
                    placeholder="Search"
                  ></b-form-input>
                </div>
                <img
                  src="@/assets/images/notification.svg"
                  alt="notification"
                  width="16"
                />
              </b-col>
            </b-row>
            <b-row class="ul-right__bottom">
              <slot name="right-section"></slot>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["allAuth"])
  },
  data() {
    return {
      menuArr: [
        {
          path: require("@/assets/images/dashboard.svg"),
          name: "Dashboard",
          active: true
        },
        {
          path: require("@/assets/images/calendar.svg"),
          name: "Courses",
          active: false
        },
        {
          path: require("@/assets/images/message.svg"),
          name: "Messages",
          active: false
        },
        {
          path: require("@/assets/images/calendar.svg"),
          name: "Calendar",
          active: false
        }
      ],
      search: ""
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
        width: calc(100% - 40px);
        position: absolute;
        top: 15%;
        z-index: 1;
        padding: 10% 20%;
        text-align: left;

        .ul-menu__sec {
          list-style: none;
          padding-left: 0;
          height: calc(100% - 100px);
          li {
            margin-bottom: 15%;
          }
        }

        .ul-menu__name {
          text-transform: uppercase;
          color: #757575;
          &.active {
            color: #000000;
          }
        }
        img {
          margin-right: 15%;
        }
        label,
        li {
          font-weight: 500;
          font-size: 14px;
          line-height: 21px;
          letter-spacing: 0.1px;
          color: rgba(0, 0, 0, 0.87);
        }
        .ul-left__name {
          margin-bottom: 17%;
        }
      }
    }
  }
}
.ul-right {
  background: #efefef;
  margin-left: -20px;
  .ul-right__div {
    z-index: 0;
    .ul-right__top {
      height: 30%;
      background: #efefef;
      margin-right: -20px;
      padding: 3%;
      .ul-top__content {
        display: flex;
        align-items: center;
        h2 {
          font-size: 30px;
          line-height: 21px;
          letter-spacing: 0.1px;
          color: #000000;
          margin-bottom: 20px;
        }
        .ul-top__content {
          margin-bottom: 25px;
          font-size: 16px;
          line-height: 21px;
          letter-spacing: 0.1px;
          color: #000000;
        }
        .ul-top__subcontent {
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          color: #000000;
          margin-bottom: 0;
        }
      }
      .ul-top__search {
        text-align: right;
        & > div {
          width: 50%;
          display: inline-block;
          margin: 0 15px 0 10px;
          input.form-control {
            display: inline-block;
            background: transparent;
            border: none;
            border-bottom: 1px solid #000;
            border-radius: 0;
            color: #757575;
            padding: 0.25rem 0.75rem 0.25rem 0;
            font-size: 14px;
            line-height: 24px;
            letter-spacing: 0.15px;
            &:focus {
              box-shadow: none;
            }
          }
        }
      }
    }
    .ul-right__bottom {
      height: 70%;
      background: #ffffff;
      overflow: hidden auto;
    }
  }
}
@media all and (min-width: 990px) and (max-width: 1100px) {
  .ul-container .ul-left .ul-left__menu .ul-left__menu-content {
    padding: 10% 15%;
  }
}
</style>
