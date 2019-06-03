<template>
  <SummaryPageWrap>
    <div class="col">
    <div>
      <span>Component Type</span>
      <span class="second-text"> Distric_heating_station</span>
    </div>
    <div>
      <span>Manufacturer</span>
      <span class="second-text"> PEWO</span>
    </div>
    <div>
      <span>Designation Type</span>
      <span class="second-text"> G5/1-DZD</span>
    </div>
    <hr>

    <div>
      <span>List Price Net</span>
      <span class="second-text"> 7,500$</span>
    </div>
    <div>
      <span>Burner Purchase Net Price</span>
      <span class="second-text"> 4,300$</span>
    </div>
    <div>
      <span>Serial Number</span>
      <span class="second-text"> 2W367K-2A</span>
    </div>
    <hr>

    <div>
      <span>Purchase Date</span>
      <span class="second-text"> 01.01.1999</span>
    </div>
    <div>
      <span>Warranty Until </span>
      <span class="second-text"> 31.12.2006</span>
    </div>
    <hr>

    <div>
      <span>Purchase From</span>
      <span class="second-text"> PEWO</span>
    </div>
    <div>
      <span>Installation Date</span>
      <span class="second-text"> 1.1.2005</span>
    </div></div><div class="col">
    <div>
      <span>Principle</span>
      <span class="second-text"> No Data</span>
    </div>
    <div>
      <span>Flow Temperature</span>
      <span class="second-text"> 120 °C</span>
    </div>
    <div>
      <span>Return Temperature</span>
      <span class="second-text"> 50 °C</span>
    </div>
    <div>
      <span>Temperature Difference</span>
      <span class="second-text"> 70 °C</span>
    </div>
    <div>
      <span>Capacity</span>
      <span class="second-text"> 550 kW</span>
    </div>
    <div>
      <span>Maximum Capacity</span>
      <span class="second-text"> 750 kW</span>
    </div>
    <div>
      <span>Flow Rate</span>
      <span class="second-text"> 6m³/h</span>
    </div>
    <div>
      <span>Static Pressure</span>
      <span class="second-text"> 16 bar</span>
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
