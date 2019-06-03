<template>
  <SummaryPageWrap>
    <div class="col">
    <div>
      <span>Component Type</span>
      <span class="second-text"> Exhaust System</span>
    </div>
    <div>
      <span>Manufacturer</span>
      <span class="second-text"> Unknown</span>
    </div>
    <div>
      <span>Designation Type</span>
      <span class="second-text"> Z7 / FU</span>
    </div>
    <hr>

    <div>
      <span>House Connection Station List Price Net</span>
      <span class="second-text"> $2,700</span>
    </div>
    <div>
      <span>House Connection Station Purchase Price</span>
      <span class="second-text"> $2,000</span>
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
    <div>
      <span>Installation Date</span>
      <span class="second-text"> 1.1.2005</span>
    </div>
    <hr>

    <div>
      <span>Dimension</span>
      <span class="second-text"> 100</span>
    </div>
    <div>
      <span>Material Exhaust System</span>
      <span class="second-text"> Copper</span>
    </div>
    <div>
      <span>Air Exhaust System</span>
      <span class="second-text"> No</span>
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
