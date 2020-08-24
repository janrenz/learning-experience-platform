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
  background: #d7d5d5 !important;
  border: none;
  padding: 10px 36px;
  text-align: center;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  color: #757575;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  &.disabled {
    color: #c4c4c4 !important;
    background: rgba(117, 117, 117, 0.2) !important;
    opacity: 1;
  }
  &.active,
  &:hover,
  &:focus {
    color: #757575;
    box-shadow: none;
  }
  &.ob-btn-primary {
    background: #757575 !important;
    color: #f2f2f2;
    &.disabled {
      background: rgba(117, 117, 117, 0.2) !important;
      color: #c4c4c4 !important;
    }
  }
}
</style>

<script>
export default {};
</script>
