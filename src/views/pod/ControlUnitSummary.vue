<template>
  <SummaryPageWrap>
    <div class="col">
    <div>
      <span>Control Unit ID</span>
      <span class="second-text"> control_unit_1</span>
    </div>
    <div>
      <span>Component Type</span>
      <span class="second-text"> control_unit</span>
    </div>
    <div>
      <span>Manufacturer</span>
      <span class="second-text"> Buderus</span>
    </div>
    <hr>

    <div>
      <span>List Price Net</span>
      <span class="second-text"> $2,700</span>
    </div>
    <div>
      <span>Unit Purchase Net Price</span>
      <span class="second-text"> $2,000</span>
    </div>
    <div>
      <span>Designation</span>
      <span class="second-text"> R4311</span>
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
      <span>Boiler Installation Date</span>
      <span class="second-text"> 1.1.2005</span>
    </div>
    <hr>

    <div>
      <span>Interface Protocol</span>
      <span class="second-text"> modbus rs485</span>
    </div>
    <div>
      <span>Control Unit Analog/Digital?</span>
      <span class="second-text"> Analog</span>
    </div>
    <div>
      <span>Operation Mode</span>
      <span class="second-text"> Auto</span>
    </div>
    <div>
      <span>Remote Control</span>
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
