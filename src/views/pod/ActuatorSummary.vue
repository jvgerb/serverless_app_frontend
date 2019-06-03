<template>
  <SummaryPageWrap>
    <div class="col">
    <div>
      <span>Component Type</span>
      <span class="second-text"> Actuator</span>
    </div>
    <div>
      <span>Manufacturer</span>
      <span class="second-text"> Honeywell centra</span>
    </div>
    <div>
      <span>Designation Type</span>
      <span class="second-text"> VMM20</span>
    </div>
    <hr>

    <div>
      <span>List Price Net</span>
      <span class="second-text"> $343.00</span>
    </div>
    <div>
      <span>Net Purchase Price</span>
      <span class="second-text"> $243.00</span>
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
      <span>Installation Date</span>
      <span class="second-text"> 1.1.2005</span>
    </div>
    <hr>

    <div>
      <span>Power Supply Voltage</span>
      <span class="second-text"> 230 V</span>
    </div>
    <div>
      <span>Operation Principle</span>
      <span class="second-text"> Electric</span>
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
