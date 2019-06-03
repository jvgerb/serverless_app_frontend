<template>
  <SummaryPageWrap>
    <div class="col">
    <div>
      <span>Thermocontrol iD</span>
      <span class="second-text"> thermo_control_1</span>
    </div>
    <div>
      <span>Component Type</span>
      <span class="second-text"> thermo_control</span>
    </div>
    <div>
      <span>Manufacturer</span>
      <span class="second-text"> Sauter</span>
    </div>
    <hr>

    <div>
      <span>Designation</span>
      <span class="second-text"> DDD123</span>
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
      <span>Thermostatic Temperature Control Type</span>
      <span class="second-text"> safety temp limiter</span>
    </div>
    <div>
      <span>Response Temperature</span>
      <span class="second-text"> 4 Bar</span>
    </div>
    <div>
      <span>DN</span>
      <span class="second-text"> 50 DN</span>
    </div>
    <div>
      <span>Primary Entry Temp Manufacture Value</span>
      <span class="second-text"> 50 Degree</span>
    </div>
    <div>
      <span>Primary Exit Temp Manufacture Value</span>
      <span class="second-text"> 50 Degree</span>
    </div>
    <div>
      <span>Secondary Volume Flow Manufacture Value</span>
      <span class="second-text"> 40m³</span>
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
