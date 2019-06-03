<template>
  <SummaryPageWrap>
    <div class="col">
    <div>
      <span>Component Type</span>
      <span class="second-text"> Expansion_tank</span>
    </div>
    <div>
      <span>Manufacturer</span>
      <span class="second-text"> Reflex Winkelmann</span>
    </div>
    <div>
      <span>Designation Type</span>
      <span class="second-text"> N400</span>
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
      <span class="second-text"> Reflex Winkelmann</span>
    </div>
    <div>
      <span>Installation Date</span>
      <span class="second-text"> 1.1.2005</span>
    </div>
    <hr>

    <div>
      <span>Volume Expansion Tank</span>
      <span class="second-text"> 400</span>
    </div>
    <div>
      <span>System Pressure</span>
      <span class="second-text"> 1,5 Bar</span>
    </div>
    <div>
      <span>Expansion Tank</span>
      <span class="second-text"> MAG</span>
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
