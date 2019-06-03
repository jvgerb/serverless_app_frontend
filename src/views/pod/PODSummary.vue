<template>
  <SummaryPageWrap>
    <div class="col">
    <div>
      <span>POD ID</span>
      <span class="second-text"> POD_2501</span>
    </div>
    <div>
      <span>Street Address</span>
      <span class="second-text"> Oraniendamm</span>
    </div>
    <div>
      <span>Additional Attribute</span>
      <span class="second-text"> Side Entrance</span>
    </div>
    <div>
      <span>Street Number</span>
      <span class="second-text"> 6</span>
    </div>
    <div>
      <span>Zip Code</span>
      <span class="second-text"> 13469</span>
    </div>
    <div>
      <span>Place</span>
      <span class="second-text"> Berlin</span>
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
