<template>
  <FormCard>
    <div class="form-row">
      <div class="form-field">
        <label>Component Type</label>
        <input type="text" placeholder="district_heating_station">
      </div>

      <div class="form-field">
        <label>Manufacturer</label>
        <input type="text" placeholder="PEWO">
      </div>

      <div class="form-field">
        <label>Designation Type</label>
        <input type="text" placeholder="5,500$">
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>List Price Net</label>
        <input type="text" placeholder="7,500$">
      </div>

      <div class="form-field">
        <label>Purchase Net Price</label>
        <input type="text" placeholder="4,300$">
      </div>

      <div class="form-field">
        <label>Serial Number</label>
        <input type="text" placeholder="2W367K-2A">
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Purchase Date</label>
        <DatePicker placeholder="01.01.1999"></DatePicker>
      </div>

      <div class="form-field">
        <label>Warranty Until</label>
        <DatePicker placeholder="31.12.2006"></DatePicker>
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Purchase From</label>
        <input type="text" placeholder="PEWO">
      </div>

      <div class="form-field">
        <label>Installation Date</label>
        <DatePicker placeholder="1.1.2005"></DatePicker>
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Principle</label>
        <input type="text" placeholder="No Data">
      </div>

      <div class="form-field">
        <label>Flow Temperature</label>
        <input type="text" placeholder="120 °C">
      </div>

      <div class="form-field">
        <label>Return Temperature</label>
        <input type="text" placeholder="50 °C">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Temperature Difference</label>
        <input type="text" placeholder="70 °C">
      </div>

      <div class="form-field">
        <label>Capacity</label>
        <input type="text" placeholder="550 kW">
      </div>

      <div class="form-field">
        <label>Maximum Capacity</label>
        <input type="text" placeholder="750 kW">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Flow Rate</label>
        <input type="text" placeholder="6m³/h">
      </div>

      <div class="form-field">
        <label>Static Pressure</label>
        <input type="text" placeholder="16 bar">
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
 