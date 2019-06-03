<template>
  <SummaryPageWrap>
    <div class="col">
    <div>
      <span>Boiler ID</span>
      <span class="second-text"> boiler_1</span>
    </div>
    <div>
      <span>Component Type</span>
      <span class="second-text"> Boiler</span>
    </div>
    <div>
      <span>Manufacturer</span>
      <span class="second-text"> Buderus</span>
    </div>
    <div>
      <span>Designation Type</span>
      <span class="second-text"> Logano Plus SE625</span>
    </div>
    <div>
      <span>List Price Net</span>
      <span class="second-text"> $5,000</span>
    </div>
    <div>
      <span>Net Purchase Price</span>
      <span class="second-text"> $4,500</span>
    </div>
    <div>
      <span>Serial Number</span>
      <span class="second-text"> 12Z4K212337</span>
    </div>
    <div>
      <span>Purchase Date</span>
      <span class="second-text"> 01.01.1999</span>
    </div>
    <div>
      <span>Purchase From</span>
      <span class="second-text"> B&amp;O</span>
    </div>
    <div>
      <span>Warranty Until</span>
      <span class="second-text"> 31.12.2004</span>
    </div>
    <div>
      <span>Installation Date</span>
      <span class="second-text"> 1.1.2005</span>
    </div>
    <div>
      <span>Interface Protocol</span>
      <span class="second-text"> proprietary protocol</span>
    </div></div><div class="col">
    <div>
      <span>Fuel Category</span>
      <span class="second-text"> Gas</span>
    </div>
    <div>
      <span>Boiler Type</span>
      <span class="second-text"> NT</span>
    </div>
    <div>
      <span>Burner Intern</span>
      <span class="second-text"> No</span>
    </div>
    <div>
      <span>Maximum Capacity</span>
      <span class="second-text"> 748 kW</span>
    </div>
    <div>
      <span>Water Volume</span>
      <span class="second-text"> 1122 liter</span>
    </div>
    <div>
      <span>Length</span>
      <span class="second-text"> 1000 mm</span>
    </div>
    <div>
      <span>Width</span>
      <span class="second-text"> 1000 mm</span>
    </div>
    <div>
      <span>Height</span>
      <span class="second-text"> 750 mm</span>
    </div>
    <div>
      <span>Radiation Losses</span>
      <span class="second-text"> 10%</span>
    </div>
    <div>
      <span>Heat Input</span>
      <span class="second-text"> 340kW</span>
    </div>
    <div>
      <span>Standby Loss</span>
      <span class="second-text"> 5%</span>
    </div>
    <div>
      <span>Boiler Material</span>
      <span class="second-text"> stainless_steel</span>
    </div>
    <div>
      <span>Heat Exchanger</span>
      <span class="second-text"> No</span>
    </div>
    <div>
      <span>Technical Design</span>
      <span class="second-text"> No Data</span>
    </div>
    <div>
      <span>Combustion Efficiency</span>
      <span class="second-text"> 80%</span>
    </div>
    <div>
      <span>Boiler Efficiency </span>
      <span class="second-text"> 75%</span>
    </div></div><div class="col">
    <div>
      <span>Minimum Volume Flow</span>
      <span class="second-text"> 150 l/h</span>
    </div>
    <div>
      <span>Minimum Return Flow Value </span>
      <span class="second-text"> 80 l/h</span>
    </div>
    <div>
      <span>Internal Pump</span>
      <span class="second-text"> Yes</span>
    </div>
    <div>
      <span>Cascade</span>
      <span class="second-text"> No</span>
    </div>
    <div>
      <span>Multi Boiler System</span>
      <span class="second-text"> No</span>
    </div>
    <div>
      <span>Exhaust Gas Loss</span>
      <span class="second-text"> 10%</span>
    </div>
    <div>
      <span>Heat Exchanger Principle</span>
      <span class="second-text"> Crossflow</span>
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
