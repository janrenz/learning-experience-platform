<template>
  <div class="lx-select">
    <div :class="{ 'lx-select__div': true, error: showError }">
      <label>{{ label }}</label>
      <b-dropdown size="lg" no-caret>
        <template v-slot:button-content>
          <div>
            <label :class="{ placeholder: !value }">{{
              value ? value : placeholder
            }}</label>
            <span class="ob-dd__icon">
              <b-icon
                icon="chevron-down"
                style="color:rgba(0, 0, 0, 0.87)"
              ></b-icon>
            </span>
          </div>
        </template>
        <b-dropdown-item
          v-for="(r, index) in dropdownArr"
          :key="index"
          href="javascript:;"
          @click="$emit('click', r)"
          :class="{ 'active-class': r == value }"
        >
          {{ r }}
        </b-dropdown-item>
      </b-dropdown>
    </div>
    <p class="error-message" v-if="showError">{{ errorMessage }}</p>
  </div>
</template>
<script>
export default {
  props: {
    label: String,
    placeholder: String,
    value: [String, Number],
    dropdownArr: Array,
    showError: Boolean,
    errorMessage: {
      type: String,
      default: "*This is a mandatory field"
    }
  }
};
</script>
<style lang="scss">
.lx-select {
  margin-bottom: 20px;
  .lx-select__div {
    background: rgba(0, 0, 0, 0.04);
    border-radius: 4px 4px 0px 0px;
    padding: 9px 12px;
    display: inline-block;
    width: 100%;
    &.error {
      border: 1px solid #000000;
    }
    label {
      font-size: 14px;
      line-height: 15px;
      letter-spacing: 0.4px;
      color: #9e9e9e;
      margin-bottom: 4px;
    }
    .b-dropdown {
      width: 100%;
      height: calc(1em + 0.75rem);
      .btn {
        background: transparent;
        color: #757575;
        border: none;
        text-align: left;
        padding-left: 0;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.15px;
        box-shadow: none;
        padding: 0;
        &.dropdown-toggle-split {
          text-align: right;
          opacity: 1;
        }
        &:focus,
        &:active {
          background: transparent;
          color: #757575;
          border: 0;
          box-shadow: none !important;
        }
        label {
          display: inline-block;
          font-size: 16px;
          color: #25282b;
          &.placeholder {
            color: rgba(158, 158, 158, 0.54);
          }
        }
        .ob-dd__icon {
          position: absolute;
          right: 10px;
          top: 0;
          font-weight: 600;
        }
      }
      .dropdown-menu {
        width: 100%;
        .active-class {
          .dropdown-item {
            color: #000;
          }
        }
        .dropdown-item {
          color: #9e9e9e;
          &:focus,
          &:active {
            background: #fff;
            outline: none;
            color: #000;
          }
        }
      }
    }
  }
  .error-message {
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.2px;
    color: #000000;
    margin-top: 5px;
  }
}
</style>
