<template>
  <SummaryPageWrap>
    <div class="col">
    <div>
      <span>Water Storage ID</span>
      <span class="second-text"> Water_storage_1</span>
    </div>
    <div>
      <span>Component Type</span>
      <span class="second-text"> water_storage</span>
    </div>
    <div>
      <span>Manufacturer</span>
      <span class="second-text"> Huch</span>
    </div>
    <hr>

    <div>
      <span>Designation</span>
      <span class="second-text"> HPS 300</span>
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
      <span class="second-text"> n Z3xgYo</span>
    </div>
    <div>
      <span>Purchase From</span>
      <span class="second-text"> Huch</span>
    </div>
    <div>
      <span>Purchase Date</span>
      <span class="second-text"> 01.01.1999</span>
    </div>
    <hr>

    <div>
      <span>Warranty Until</span>
      <span class="second-text"> 31.12.2004</span>
    </div>
    <div>
      <span>Installation Date</span>
      <span class="second-text"> 1.1.2005</span>
    </div></div><div class="col">
    <div>
      <span>Storage Type</span>
      <span class="second-text"> storage charging system</span>
    </div>
    <div>
      <span>Use Case</span>
      <span class="second-text"> drinking water</span>
    </div>
    <div>
      <span>Statutory Temperature Specification</span>
      <span class="second-text"> 60 °C</span>
    </div>
    <div>
      <span>Leading Storage</span>
      <span class="second-text"> Yes</span>
    </div>
    <div>
      <span>Circuit Type</span>
      <span class="second-text"> No Data</span>
    </div>
    <div>
      <span>Storage Volume</span>
      <span class="second-text"> 300 l</span>
    </div>
    <div>
      <span>NL Number</span>
      <span class="second-text"> 60</span>
    </div>
    <div>
      <span>Material</span>
      <span class="second-text"> Stainless Steel</span>
    </div>
    <div>
      <span>Continuous Output</span>
      <span class="second-text"> 3 kW</span>
    </div>
    <div>
      <span>Peak Output</span>
      <span class="second-text"> 5 kW</span>
    </div>
    <div>
      <span>Switch On Sensor Position</span>
      <span class="second-text"> on top</span>
    </div>
    <div>
      <span>Switch On Sensor Hysteresis</span>
      <span class="second-text"> middle</span>
    </div>
    <div>
      <span>Switch Off Sensor Position</span>
      <span class="second-text"> On top</span>
    </div>
    <div>
      <span>Switch On Sensor Hysteresis</span>
      <span class="second-text"> middle</span>
    </div>
    <div>
      <span>Reference Sensor Position</span>
      <span class="second-text"> On top</span>
    </div></div><div class="col">
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
