<template>
  <div class="lx-input">
    <div :class="{ error: showError, 'lx-input__div': true }">
      <b-form-group id="input-group-1" :label="label" label-for="input-1">
        <b-form-input
          :id="id"
          :type="type"
          :required="required"
          :placeholder="placeholder"
          @input="updateValue($event)"
        ></b-form-input>
      </b-form-group>
    </div>
    <p class="error-message" v-if="showError">{{ errorMessage }}</p>
  </div>
</template>
<script>
export default {
  name: "lx-input",
  props: {
    id: String,
    label: String,
    type: {
      type: String,
      default: "text"
    },
    placeholder: String,
    showError: Boolean,
    required: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: "*This is a mandatory field"
    }
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    }
  }
};
</script>
<style lang="scss">
.lx-input {
  margin-bottom: 20px;
  .lx-input__div {
    background: rgba(0, 0, 0, 0.04);
    border-radius: 4px 4px 0px 0px;
    padding: 9px 12px;
    display: inline-block;
    width: 100%;
    &.error {
      border: 1px solid #000000;
    }
    .form-group {
      margin-bottom: 0px;
      label {
        font-size: 14px;
        line-height: 15px;
        letter-spacing: 0.4px;
        color: #9e9e9e;
        margin-bottom: 4px;
      }
      input {
        letter-spacing: 0.15px;
        color: #757575;
        font-size: 16px;
        border: 0;
        background: transparent;
        padding-left: 0;
        height: calc(1em + 0.75rem);
        &:focus {
          box-shadow: none;
        }
        &::placeholder {
          color: rgba(158, 158, 158, 0.54);
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
