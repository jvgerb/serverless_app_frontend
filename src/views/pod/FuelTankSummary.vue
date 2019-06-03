<template>
  <SummaryPageWrap>
    <div class="col">
    <div>
      <span>Fuel Tank ID</span>
      <span class="second-text"> fuel_tank_1</span>
    </div>
    <div>
      <span>Component Type</span>
      <span class="second-text"> fuel_tank</span>
    </div>
    <div>
      <span>Manufacturer</span>
      <span class="second-text"> viessmann</span>
    </div>
    <hr>

    <div>
      <span>Designation</span>
      <span class="second-text"> Gas Line 2000</span>
    </div>
    <div>
      <span>List Price Net</span>
      <span class="second-text"> $2,345.00</span>
    </div>
    <div>
      <span>Net Purchase Price</span>
      <span class="second-text"> $2,345.00</span>
    </div>
    <div>
      <span>Serial Number</span>
      <span class="second-text"> 3wwQe7-01 K</span>
    </div>
    <div>
      <span>Purchase From</span>
      <span class="second-text"> viessmann</span>
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
      <span>Fuel Tank Type</span>
      <span class="second-text"> metal</span>
    </div>
    <div>
      <span>Number of Segments</span>
      <span class="second-text"> 1</span>
    </div>
    <div>
      <span>Total Volume</span>
      <span class="second-text"> 2000 l</span>
    </div>
    <div>
      <span>Installation Type</span>
      <span class="second-text"> aboveground</span>
    </div>
    <div>
      <span>Connected</span>
      <span class="second-text"> Yes</span>
    </div>
    <div>
      <span>Fuel Category</span>
      <span class="second-text"> Gas</span>
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
