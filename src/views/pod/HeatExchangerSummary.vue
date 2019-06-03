<template>
  <SummaryPageWrap>
    <div class="col">
    <div>
      <span>Heat Exchanger ID</span>
      <span class="second-text"> heat_exchanger_1</span>
    </div>
    <div>
      <span>Component Type</span>
      <span class="second-text"> heat_exchanger</span>
    </div>
    <div>
      <span>Manufacturer</span>
      <span class="second-text"> Buderus</span>
    </div>
    <hr>

    <div>
      <span>Designation</span>
      <span class="second-text"> Logalux LSP</span>
    </div>
    <div>
      <span>List Price Net</span>
      <span class="second-text"> $3,243.00</span>
    </div>
    <div>
      <span>Net Purchase Price</span>
      <span class="second-text"> $2,345.00</span>
    </div>
    <div>
      <span>Serial Number</span>
      <span class="second-text"> RHQQ-W*34556/</span>
    </div>
    <div>
      <span>Purchase From</span>
      <span class="second-text"> Buderus</span>
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
      <span>Model</span>
      <span class="second-text"> plate heat exchanger</span>
    </div>
    <div>
      <span>Standard Capacity</span>
      <span class="second-text"> 10 kW</span>
    </div>
    <div>
      <span>Primary Volume Flow Manufacture Value</span>
      <span class="second-text"> 100 l</span>
    </div>
    <div>
      <span>Primary Entry Temp Manufacture Value</span>
      <span class="second-text"> 60 degree</span>
    </div>
    <div>
      <span>Primary Exit Temp Manufacture Value</span>
      <span class="second-text"> 50 degree</span>
    </div>
    <div>
      <span>Secondary Volume Flow Manufacture Value</span>
      <span class="second-text"> 40m³</span>
    </div>
    <div>
      <span>Secondary Entry Temp Manufacture Value</span>
      <span class="second-text"> 60 degree</span>
    </div>
    <div>
      <span>Secondary Exit Temp Manufacture Value</span>
      <span class="second-text"> 50 degree</span>
    </div>
    <div>
      <span>Principle</span>
      <span class="second-text"> Cross Flow</span>
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
