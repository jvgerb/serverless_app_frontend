<template>
  <SummaryPageWrap>
    <div class="col">
    <div>
      <span>Pressure Control ID</span>
      <span class="second-text"> pressure_control_1</span>
    </div>
    <div>
      <span>Component Type</span>
      <span class="second-text"> pressure_control</span>
    </div>
    <div>
      <span>Manufacturer</span>
      <span class="second-text"> Sauter</span>
    </div>
    <hr>

    <div>
      <span>Designation</span>
      <span class="second-text"> DSH143</span>
    </div>
    <div>
      <span>List Price Net</span>
      <span class="second-text"> $1,900</span>
    </div>
    <div>
      <span>Net Purchase Price</span>
      <span class="second-text"> $15</span>
    </div>
    <div>
      <span>Serial Number</span>
      <span class="second-text"> 2W367K-2A</span>
    </div>
    <div>
      <span>Purchase From</span>
      <span class="second-text"> Sauter</span>
    </div>
    <hr>

    <div>
      <span>Warranty Until</span>
      <span class="second-text"> 31.12.2004</span>
    </div>
    <div>
      <span>Installation Date</span>
      <span class="second-text"> 1.1.2005</span>
    </div>
    <hr>

    <div>
      <span>Physical Pressure Control Type</span>
      <span class="second-text"> safety valve</span>
    </div>
    <div>
      <span>Response Pressure</span>
      <span class="second-text"> 5 Bar</span>
    </div>
    <div>
      <span>DN</span>
      <span class="second-text"> 50 DN</span>
    </div>
    <hr>

    <div class="comment-span">
      <span>Comment</span>
      <span class="second-text"> Lorem ipsum dolor ________</span>
    </div></div>
  </SummaryPageWrap>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SummaryPageWrap from '@/components/SummaryPageWrap.vue';

@Component({
  components: { SummaryPageWrap },
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
</style>
