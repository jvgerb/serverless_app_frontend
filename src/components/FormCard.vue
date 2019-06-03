<template>
  <div class="form-card">
    <button class="save-btn" @click="save">
      <i class="icon-floppy"></i>
      <span>Save</span>
    </button>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class FormCard extends Vue {
  @Emit()
  save(){

  }
}
</script>

<style lang="scss">
.form-card {
  padding: 50px 70px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 2px #979797;
  .save-btn {
    position: absolute;
    top: 100px;
    right: 28px;
    width: 104px;
    height: 45px;
    background: var(--accent-color);
    border-radius: 4px;
    color: white;
    letter-spacing: 0.75px;
    font-size: 13px;
    transition: all 0.4s;
    &:hover {
      filter: contrast(2);
    }
    &:active {
      filter: contrast(.8);
    }
    i {
      font-size: 18px;
      margin-right: 10px;
      vertical-align: bottom;
    }
  }
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
    position: relative;
    box-sizing: border-box;
    margin-top: 15px;
    padding-left: 12px;
    font-size: 12px;
    width: calc(100% / 3);
    &:first-child {
      padding-left: 0;
      width: calc(100% / 3 - 12px);
    }
    &.col-2 {
      width: calc(100% / 3 * 2);
    }
    &.col-3 {
      width: 100%;
    }
    label {
      width: 100%;
      display: inline-block;
      margin-bottom: 7px;
      letter-spacing: 1.25px;
      font-weight: 500;
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
