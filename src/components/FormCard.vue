<template>
  <div class="form-card">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class FormCard extends Vue {}
</script>

<style lang="scss">
.form-card {
  padding: 50px 70px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 2px #979797;
  hr {
    margin: 18px 0 0 0;
    border: none;
    border-top: solid 2px #cdcdcd;
  }
  .form-row:first-child .form-field {
    margin-top: 0;
  }
  .form-field {
    display: inline-block;
    box-sizing: border-box;
    margin-top: 15px;
    padding-left: 24px;
    font-size: 12px;
    width: 33.333333333333336%;
    &:first-child {
      padding-left: 0;
    }
    &.col-2 {
      width: 66.66666666666667%;
    }
    &.col-3 {
      width: 100%;
    }
    label {
      width: 100%;
      display: inline-block;
      margin-bottom: 7px;
    }
    input,
    select,
    textarea {
      width: 100%;
      border: solid 1px #d3d0d0;
      border-radius: 4px;
      padding: 8px 10px;
      box-sizing: border-box;
    }
    select,
    input::placeholder,
    textarea::placeholder {
      color: #a6a8ab;
    }
  }
}
</style>
