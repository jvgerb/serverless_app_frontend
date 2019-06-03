<template>
  <FormCard>
    <div class="form-row">
      <div class="form-field">
        <label>Water Storage ID</label>
        <input type="text" placeholder="Water_storage_1">
      </div>

      <div class="form-field">
        <label>Component Type</label>
        <select>
          <option value="Heat">water_storage</option>
        </select>
      </div>

      <div class="form-field">
        <label>Manufacturer</label>
        <input type="text" placeholder="Huch">
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Designation</label>
        <input type="text" placeholder="HPS 300">
      </div>

      <div class="form-field">
        <label>List price Net</label>
        <input type="text" placeholder="$1,900">
      </div>

      <div class="form-field">
        <label>Net Purchase Price</label>
        <input type="text" placeholder="$15">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Serial Number</label>
        <input type="text" placeholder="n Z3xgYo">
      </div>

      <div class="form-field">
        <label>Purchase From</label>
        <input type="text" placeholder="Huch">
      </div>

      <div class="form-field">
        <label>Purchase Date</label>
        <DatePicker placeholder="01.01.1999"></DatePicker>
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
        <label>Storage Type</label>
        <input type="text" placeholder="storage charging system">
      </div>

      <div class="form-field">
        <label>Use Case</label>
        <input type="text" placeholder="drinking water">
      </div>

      <div class="form-field">
        <label>Statutory Temperature Specification</label>
        <input type="text" placeholder="60 °C">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Leading Storage</label>
        <input type="text" placeholder="Yes">
      </div>

      <div class="form-field">
        <label>Circuit Type</label>
        <input type="text" placeholder="No Data">
      </div>

      <div class="form-field">
        <label>Storage Volume</label>
        <input type="text" placeholder="300 l">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>NL Number</label>
        <input type="text" placeholder="60">
      </div>

      <div class="form-field">
        <label>Material</label>
        <input type="text" placeholder="Stainless Steel">
      </div>

      <div class="form-field">
        <label>Continuous Output</label>
        <input type="text" placeholder="3 kW">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Peak Output</label>
        <input type="text" placeholder="5 kW">
      </div>

      <div class="form-field">
        <label>Switch On Sensor Position</label>
        <input type="text" placeholder="on top">
      </div>

      <div class="form-field">
        <label>Switch On Sensor Hysteresis</label>
        <input type="text" placeholder="middle">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Switch Off Sensor Position</label>
        <input type="text" placeholder="On top">
      </div>

      <div class="form-field">
        <label>Switch On Sensor Hysteresis</label>
        <input type="text" placeholder="middle">
      </div>

      <div class="form-field">
        <label>Reference Sensor Position</label>
        <input type="text" placeholder="On top">
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
 