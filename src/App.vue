<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.h-100 {
  height: 100%;
}
#nav {
  padding: 30px;
}
.btn.ob-btn {
  background: #fff !important;
  border: none;
  padding: 10px 20px;
  text-align: center;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  color: #0043ac;
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
  outline: none;

  &.disabled {
    color: #c4c4c4 !important;
    background: rgba(117, 117, 117, 0.2) !important;
    opacity: 1;
  }
  &:active,
  &:hover,
  &:focus {
    color: #0043ac !important;
    box-shadow: none;
    background: #fff !important;
    border: none !important;
  }
  &.ob-btn-primary {
    background: #0043ac !important;
    color: #fff;
    &:active,
    &:hover,
    &:focus {
      color: #fff !important;
    }
    &.disabled {
      opacity: 0.5;
      // color: #fff !important;
      // background: #a0a4a8 !important;
    }
  }
  &.ob-btn-outline {
    background: transparent !important;
    border: 1px solid #0043ac;
    &:active,
    &:hover,
    &:focus {
      background: #c5deff !important;
      border: 1px solid #0043ac !important;
    }
  }
}
</style>

<script>
export default {};
</script>
