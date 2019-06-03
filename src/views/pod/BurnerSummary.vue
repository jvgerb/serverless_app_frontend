<template>
  <SummaryPageWrap>
    <div class="col">
    <div>
      <span>Component Type</span>
      <span class="second-text"> Burner</span>
    </div>
    <div>
      <span>Manufacturer</span>
      <span class="second-text"> Weishaupt</span>
    </div>
    <div>
      <span>Designation Type</span>
      <span class="second-text"> G5/1-DZD</span>
    </div>
    <hr>

    <div>
      <span>List Price Net</span>
      <span class="second-text"> $2,700</span>
    </div>
    <div>
      <span>Burner Purchase Net Price</span>
      <span class="second-text"> $2,000</span>
    </div>
    <div>
      <span>Burner Serial Number</span>
      <span class="second-text"> No</span>
    </div>
    <hr>

    <div>
      <span>Burner Purchase Date</span>
      <span class="second-text"> 01.01.1999</span>
    </div>
    <div>
      <span>Burner Warranty Until </span>
      <span class="second-text"> 31.12.2006</span>
    </div>
    <hr>

    <div>
      <span>Boiler Purchase From</span>
      <span class="second-text"> B&amp;O</span>
    </div>
    <div>
      <span>Boiler Installation Date</span>
      <span class="second-text"> 1.1.2005</span>
    </div></div><div class="col">
    <div>
      <span>Operation Mode Burner</span>
      <span class="second-text"> Modulating</span>
    </div>
    <div>
      <span>Oil Jet Size</span>
      <span class="second-text"> No Data</span>
    </div>
    <div>
      <span>Oil Jet Pressure</span>
      <span class="second-text"> No Data</span>
    </div>
    <div>
      <span>Combustion Type</span>
      <span class="second-text"> LAS</span>
    </div>
    <div>
      <span>Combustion Air Supply</span>
      <span class="second-text"> room-air-dependent</span>
    </div>
    <div>
      <span>Burner Capacity</span>
      <span class="second-text"> 940 kW</span>
    </div>
    <div>
      <span>Adjusted Capacity</span>
      <span class="second-text"> 600 kW</span>
    </div>
    <div>
      <span>Lower Modulation Limit</span>
      <span class="second-text"> 0</span>
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
