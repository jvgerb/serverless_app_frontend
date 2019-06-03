<template>
  <SummaryPageWrap>
    <div class="col">
    <div>
      <span>Component Type</span>
      <span class="second-text"> Circulation_pump</span>
    </div>
    <div>
      <span>Manufacturer</span>
      <span class="second-text"> Grundfos</span>
    </div>
    <div>
      <span>Designation Type</span>
      <span class="second-text"> Magna3</span>
    </div>
    <hr>

    <div>
      <span>List Price Net</span>
      <span class="second-text"> $3,243.00</span>
    </div>
    <div>
      <span>Net Purchase Price</span>
      <span class="second-text"> $3,243.00</span>
    </div>
    <div>
      <span>Serial Number</span>
      <span class="second-text"> RHQQ-W*34556/</span>
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
      <span class="second-text"> Grundfos</span>
    </div>
    <div>
      <span>Installation Date</span>
      <span class="second-text"> 1.1.2005</span>
    </div></div><div class="col">
    <div>
      <span>Interface Protocol</span>
      <span class="second-text"> Genibus</span>
    </div>
    <div>
      <span>Circulation Pump</span>
      <span class="second-text"> Digital</span>
    </div>
    <div>
      <span>Use Case Pump</span>
      <span class="second-text"> Heating Circuit</span>
    </div>
    <div>
      <span>Control Type</span>
      <span class="second-text"> Auto</span>
    </div>
    <div>
      <span>Circulated Type</span>
      <span class="second-text"> 3,5m</span>
    </div>
    <div>
      <span>Opening Hours Per Year</span>
      <span class="second-text"> 2460h</span>
    </div>
    <div>
      <span>Pn</span>
      <span class="second-text"> 50</span>
    </div>
    <div>
      <span>Maximum Height</span>
      <span class="second-text"> 9,5m</span>
    </div>
    <div>
      <span>Maximum Flow Rate</span>
      <span class="second-text"> 300 l</span>
    </div>
    <div>
      <span>Fitting Length</span>
      <span class="second-text"> 300mm</span>
    </div>
    <div>
      <span>Material</span>
      <span class="second-text"> Steel</span>
    </div>
    <div>
      <span>Electrical Power Input</span>
      <span class="second-text"> 24v</span>
    </div>
    <div>
      <span>P1 Min</span>
      <span class="second-text"> 5 W</span>
    </div>
    <div>
      <span>P1 Max</span>
      <span class="second-text"> 30 W</span>
    </div>
    <div>
      <span>Readable</span>
      <span class="second-text"> Yes</span>
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
