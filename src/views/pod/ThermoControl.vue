<template>
  <FormCard @save="save">
    <div class="form-row">
      <div class="form-field">
        <label>Thermocontrol ID</label>
        <input type="text" placeholder="thermo_control_1">
      </div>

      <div class="form-field">
        <label>Component Type</label>
        <input type="text" placeholder="thermo_control">
      </div>

      <div class="form-field">
        <label>Manufacturer</label>
        <input type="text" placeholder="Sauter">
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Designation</label>
        <input type="text" placeholder="DDD123">
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
        <input type="text" placeholder="2W367K-2A">
      </div>

      <div class="form-field">
        <label>Purchase From</label>
        <input type="text" placeholder="Sauter">
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Warranty Until</label>
        <DatePicker placeholder="Warranty Until"></DatePicker>
      </div>

      <div class="form-field">
        <label>Installation Date</label>
        <DatePicker placeholder="1.1.2005"></DatePicker>
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Thermostatic Temperature Control Type</label>
        <input type="text" placeholder="safety temperature limiter">
      </div>

      <div class="form-field">
        <label>Response Temperature</label>
        <input type="text" placeholder="4 Bar">
      </div>

      <div class="form-field">
        <label>DN</label>
        <input type="text" placeholder="50 DN">
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
import * as api from '@/services/api';

@Component({
  components: { FormCard, DatePicker, Rating },
})
export default class extends Vue {
  // data = new Model();

  save() {
    // api.entity.post(this.data);
  }
}
</script>

<style lang="scss" scoped>
</style>
 