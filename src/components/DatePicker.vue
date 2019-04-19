<template>
  <div class="date-picker">
    <input type="text">
    <i class="icon-no-icon"></i>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class DatePicker extends Vue {}
</script>

<style lang="scss" scoped>
.date-picker {
  width: 100%;
  position: relative;
  > input {
    width: 100%;
    padding-right: 30px;
  }

  > i {
    position: absolute;
    font-size: 16px;
    top: calc(50% - 8px);
    right: -8px;
  }
}
</style>
