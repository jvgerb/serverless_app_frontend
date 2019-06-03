<template>
  <SummaryPageWrap>
    <div class="col">
    <div>
      <span>Hydraulic Switch ID</span>
      <span class="second-text"> hydraulic_switch_1</span>
    </div>
    <div>
      <span>Component Type</span>
      <span class="second-text"> hydraulic_switch</span>
    </div>
    <div>
      <span>Manufacturer</span>
      <span class="second-text"> Magra</span>
    </div>
    <hr>

    <div>
      <span>Designation</span>
      <span class="second-text"> WST</span>
    </div>
    <div>
      <span>List Price Net</span>
      <span class="second-text"> $1,900</span>
    </div>
    <div>
      <span>Net Purchase Price</span>
      <span class="second-text"> $300</span>
    </div>
    <div>
      <span>Serial Number</span>
      <span class="second-text"> 2W367K-2A</span>
    </div>
    <div>
      <span>Purchase From</span>
      <span class="second-text"> Magra</span>
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
      <span>Pipe Cross Section</span>
      <span class="second-text"> 25 DN</span>
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
