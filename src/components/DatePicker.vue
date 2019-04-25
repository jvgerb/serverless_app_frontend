<template>
  <div class="date-picker">
    <input type="text" :placeholder="placeholder">
    <i class="icon-calendar"></i>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class DatePicker extends Vue {
  @Prop() placeholder!: string;
}
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
    right: 12px;
    color: var(--icon-color);
  }
}
</style>
