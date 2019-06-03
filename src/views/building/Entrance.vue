<template>
  <FormCard>
    <div class="form-row">
      <div class="form-field">
        <label>Entrance ID</label>
        <input type="text" placeholder="entrance_1">
      </div>

      <div class="form-field">
        <label>Description</label>
        <input type="text" placeholder="Side Entrance">
      </div>

      <div class="form-field">
        <label>Street</label>
        <input type="text" placeholder="Oraniendamm">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Street Number</label>
        <input type="text" placeholder="8">
      </div>

      <div class="form-field">
        <label>Zip Code</label>
        <input type="text" placeholder="13469">
      </div>

      <div class="form-field">
        <label>Place</label>
        <input type="text" placeholder="Berlin">
      </div>
    </div>
  </FormCard>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FormCard from '@/components/FormCard.vue';
import DatePicker from '@/components/DatePicker.vue';
import Rating from '@/components/Rating.vue';

@Component({
  components: { FormCard, DatePicker, Rating },
})
export default class Entrance extends Vue {}
</script>

<style lang="scss" scoped>
</style>
 