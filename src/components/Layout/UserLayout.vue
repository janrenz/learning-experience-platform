<template>
  <div class="h-100">
    <b-container fluid class="ul-container h-100">
      <b-row class="h-100">
        <b-col cols="3" class="h-100 p-0 ul-left">
          <div class="ul-left__logo">
            <img src="@/assets/images/whoa-logo-white.svg" alt="" width="140" />
          </div>
          <div class="ul-left__menu">
            <div class="ul-left__menu-content">
              <div class="ul-left__name">
                <img src="@/assets/images/avatar.svg" alt="" />
                <label>
                  {{ allAuth.profile && allAuth.profile.firstName }}
                  {{ allAuth.profile && allAuth.profile.lastName }}</label
                >
              </div>
              <ul class="ul-menu__sec">
                <li
                  v-for="(a, i) in menu"
                  :key="i"
                  :class="{ 'ul-menu__name': true, active: a.active }"
                  @click="navigateTo(a.path)"
                >
                  <img :src="a.src" alt="menu" />
                  {{ a.name }}
                  <div v-if="a.hasSubmenu && a.active" class="ul-menu__submenu">
                    <ul>
                      <li v-for="(s, i) in a.submenuArr" :key="i">
                        {{ s.name }}
                      </li>
                    </ul>
                  </div>
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
                    Happy to have you on board, you can start learning now!
                  </p>
                  <p class="ul-top__subcontent">Explore courses ➞</p>
                </div>
              </b-col>
              <b-col cols="6" class="h-100 p-0 ul-top__right">
                <div class="ul-top__illustration">
                  <img src="@/assets/images/illustration-header.svg" alt="" />
                </div>
                <div class="ul-top__search">
                  <img
                    src="@/assets/images/search.svg"
                    alt="search"
                    width="20"
                    class="mt-1 mr-3"
                  />
                  <b-form-input
                    v-model="search"
                    placeholder="Search"
                  ></b-form-input>
                  <b-icon
                    icon="bell"
                    style="color:#fff;font-size:22px;"
                  ></b-icon>
                </div>
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
    ...mapGetters(["allAuth"]),
    menu() {
      let arr = JSON.parse(JSON.stringify(this.menuArr));
      arr.forEach(a => {
        a.active = false;
        if (this.$route.name.indexOf(a.name) != -1) a.active = true;
      });
      return arr;
    }
  },
  data() {
    return {
      menuArr: [
        {
          src: require("@/assets/images/dashboard.svg"),
          name: "Dashboard",
          active: false,
          hasSubmenu: false,
          path: "/dashboard"
        },
        {
          src: require("@/assets/images/calendar.svg"),
          name: "Courses",
          active: false,
          hasSubmenu: true,
          path: "",
          submenuArr: [
            {
              name: "My learning",
              path: "/"
            },
            {
              name: "All courses",
              path: "/course-details"
            }
          ]
        },
        {
          src: require("@/assets/images/message.svg"),
          name: "Messages",
          active: false,
          hasSubmenu: false,
          path: ""
        },
        {
          src: require("@/assets/images/calendar.svg"),
          name: "Calendar",
          active: false,
          hasSubmenu: false,
          path: ""
        }
      ],
      search: ""
    };
  },
  methods: {
    navigateTo(path) {
      if (path == "/dashboard")
        this.$router.push({ path: path }).catch(() => {});
    }
  }
};
</script>
<style lang="scss" scoped>
.ul-container {
  .ul-left {
    .ul-left__logo {
      padding: 7% 10%;
      background: #0043ac;
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
            cursor: pointer;
            .ul-menu__submenu {
              ul {
                list-style: none;
                padding-left: 33%;
                margin-top: 7%;
                li {
                  margin-bottom: 7%;
                  text-transform: initial;
                  font-size: 12px;
                  line-height: 21px;
                  display: flex;
                  align-items: center;
                  letter-spacing: 0.5px;
                  color: rgba(0, 0, 0, 0.6);
                }
              }
            }
          }
        }

        .ul-menu__name {
          color: #52575c;
          &.active {
            color: #0043ac;
            text-transform: uppercase;
            font-weight: bold;
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
  background: #0043ac;
  margin-left: -20px;
  .ul-right__div {
    z-index: 0;
    .ul-right__top {
      height: 30%;
      background: #0043ac;
      margin-right: -20px;
      padding: 3%;
      position: relative;
      .ul-top__content {
        display: flex;
        align-items: center;
        h2 {
          font-weight: 500;
          font-size: 32px;
          line-height: 42px;
          letter-spacing: 0.1px;
          color: #ffffff;
          margin-bottom: 20px;
        }
        .ul-top__content {
          margin-bottom: 25px;
          font-size: 18px;
          line-height: 24px;
          letter-spacing: 0.1px;
          color: #ffffff;
        }
        .ul-top__subcontent {
          font-weight: 500;
          font-size: 16px;
          line-height: 18px;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          color: #ffffff;
          margin-bottom: 0;
        }
      }
      .ul-top__right {
        display: flex;
        align-items: flex-start;
        .ul-top__illustration {
          display: inline-block;
          img {
            position: absolute;
            bottom: -19%;
          }
        }
        .ul-top__search {
          margin: 0 15px 0 10px;
          display: flex;
          align-items: center;
          position: absolute;
          right: 0;
          input.form-control {
            display: inline-block;
            background: transparent;
            border: none;
            border-bottom: 1px solid #fff;
            border-radius: 0;
            color: #fff;
            padding: 0.25rem 0.75rem 0.25rem 0;
            font-size: 14px;
            line-height: 24px;
            letter-spacing: 0.15px;
            &:focus {
              box-shadow: none;
            }
            &::placeholder {
              color: #fff;
            }
          }
        }
      }
    }
    .ul-right__bottom {
      height: 70%;
      background: #fafafa;
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
