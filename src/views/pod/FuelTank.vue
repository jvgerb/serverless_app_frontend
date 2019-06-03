<template>
  <FormCard>
    <div class="form-row">
      <div class="form-field">
        <label>Fuel Tank ID</label>
        <input type="text" placeholder="fuel_tank_1">
      </div>

      <div class="form-field">
        <label>Component Type</label>
        <input type="text" placeholder="fuel_tank">
      </div>

      <div class="form-field">
        <label>Manufacturer</label>
        <input type="text" placeholder="viessmann">
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Designation</label>
        <input type="text" placeholder="Gas Line 2000">
      </div>

      <div class="form-field">
        <label>List price Net</label>
        <input type="text" placeholder="$2,345.00">
      </div>

      <div class="form-field">
        <label>Net Purchase Price</label>
        <input type="text" placeholder="$2,345.00">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Serial Number</label>
        <input type="text" placeholder="3wwQe7-01 K">
      </div>

      <div class="form-field">
        <label>Purchase From</label>
        <input type="text" placeholder="viessmann">
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Warranty Until</label>
        <DatePicker placeholder="31.12.2004"></DatePicker>
      </div>

      <div class="form-field">
        <label>Installation Date</label>
        <DatePicker placeholder="1.1.2005"></DatePicker>
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Fuel Tank Type</label>
        <input type="text" placeholder="metal">
      </div>

      <div class="form-field">
        <label>Number of Segments</label>
        <input type="text" placeholder="1">
      </div>

      <div class="form-field">
        <label>Total Volume</label>
        <input type="text" placeholder="2000 l">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Installation Type</label>
        <input type="text" placeholder="aboveground">
      </div>

      <div class="form-field">
        <label>Connected</label>
        <input type="text" placeholder="Yes">
      </div>

      <div class="form-field">
        <label>Fuel Category</label>
        <input type="text" placeholder="Gas">
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field col-2">
        <label>Comment</label>
        <textarea placeholder></textarea>
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
export default class extends Vue {}
</script>

<style lang="scss" scoped>
</style>
 