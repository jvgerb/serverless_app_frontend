<template>
  <SummaryPageWrap>
    <div class="col">
    <div>
      <span>Component Type</span>
      <span class="second-text"> Fitting</span>
    </div>
    <div>
      <span>Manufacturer</span>
      <span class="second-text"> Honeywell centra</span>
    </div>
    <div>
      <span>Designation Type</span>
      <span class="second-text"> DR50FA</span>
    </div>
    <hr>

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
    <hr>

    <div>
      <span>Purchase Date</span>
      <span class="second-text"> 01.01.1999</span>
    </div>
    <div>
      <span>Warranty Until </span>
      <span class="second-text"> 31.12.2006</span>
    </div>
    <div>
      <span>Purchase From</span>
      <span class="second-text"> Honeywell centra</span>
    </div>
    <div>
      <span>Installation Date</span>
      <span class="second-text"> 1.1.2005</span>
    </div>
    <hr>

    <div>
      <span>Fitting Type</span>
      <span class="second-text"> 3-way mixer</span>
    </div>
    <div>
      <span>Type</span>
      <span class="second-text"> Mixer</span>
    </div>
    <div>
      <span>Nominal Diameter Fitting</span>
      <span class="second-text"> DN 50</span>
    </div>
    <div>
      <span>Leak Rate</span>
      <span class="second-text"> 0.04</span>
    </div>
    <div>
      <span>Kvs Value</span>
      <span class="second-text"> 40,04</span>
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
