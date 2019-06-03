<template>
  <FormCard>
    <div class="form-row">
      <div class="form-field">
        <label>Heat Exchanger ID</label>
        <input type="text" placeholder="heat_exchanger_1">
      </div>

      <div class="form-field">
        <label>Component Type</label>
        <select>
          <option value="Heat">heat_exchanger</option>
        </select>
      </div>

      <div class="form-field">
        <label>Manufacturer</label>
        <input type="text" placeholder="Buderus">
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Designation</label>
        <input type="text" placeholder="Logalux LSP">
      </div>

      <div class="form-field">
        <label>List price Net</label>
        <input type="text" placeholder="$3,243.00">
      </div>

      <div class="form-field">
        <label>Net Purchase Price</label>
        <input type="text" placeholder="$2,345.00">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Serial Number</label>
        <input type="text" placeholder="RHQQ-W*34556/">
      </div>

      <div class="form-field">
        <label>Purchase From</label>
        <input type="text" placeholder="Buderus">
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
        <label>Model</label>
        <input type="text" placeholder="plate heat exchanger">
      </div>

      <div class="form-field">
        <label>Standard Capacity</label>
        <input type="text" placeholder="10 kW">
      </div>

      <div class="form-field">
        <label>Primary Volume Flow Manufacture Value</label>
        <input type="text" placeholder="100 l">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Primary Entry Temperature Manufacture Value</label>
        <input type="text" placeholder="60 degree">
      </div>

      <div class="form-field">
        <label>Primary Exit Temperature Manufacture Value</label>
        <input type="text" placeholder="50 degree">
      </div>

      <div class="form-field">
        <label>Secondary Volume Flow Manufacture Value</label>
        <input type="text" placeholder="40m³">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Secondary Entry Temperature Manufacture Value</label>
        <input type="text" placeholder="60 degree">
      </div>

      <div class="form-field">
        <label>Secondary Exit Temperature Manufacture Value</label>
        <input type="text" placeholder="50 degree">
      </div>

      <div class="form-field">
        <label>Principle</label>
        <input type="text" placeholder="Principle">
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
 