<template>
  <SummaryPageWrap>
    <div class="col">
    <div>
      <span>Distribution Network ID</span>
      <span class="second-text"> distribution_network_1</span>
    </div>
    <div>
      <span>Distribution Network Type</span>
      <span class="second-text"> Generation</span>
    </div>
    <div>
      <span>Distribution Network Name</span>
      <span class="second-text"> EK1</span>
    </div>
    <div>
      <span>Hydraulic Circuite Tpe</span>
      <span class="second-text"> Gravity System</span>
    </div>
    <div>
      <span>Distribution Classification</span>
      <span class="second-text"> Heat Network</span>
    </div>
    <div>
      <span>Distribution Assignment</span>
      <span class="second-text"> Intern</span>
    </div>
    <div>
      <span>Length</span>
      <span class="second-text"> 100</span>
    </div>
    <div>
      <span>Material</span>
      <span class="second-text"> Copper</span>
    </div>
    <div>
      <span>Flow Rate Type</span>
      <span class="second-text"> Variable</span>
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
