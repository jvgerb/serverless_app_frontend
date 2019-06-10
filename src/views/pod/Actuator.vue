<template>
  <FormCard @save="save">
    <div class="form-row">
      <div class="form-field">
        <label>Component Type</label>
        <input type="text" placeholder="Actuator">
      </div>

      <div class="form-field">
        <label>Manufacturer</label>
        <input type="text" placeholder="Honeywell centra">
      </div>

      <div class="form-field">
        <label>Designation Type</label>
        <input type="text" placeholder="VMM20">
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>List Price Net</label>
        <input type="text" placeholder="$343.00">
      </div>

      <div class="form-field">
        <label>Purchase Net Price</label>
        <input type="text" placeholder="$243.00">
      </div>

      <div class="form-field">
        <label>Serial Number</label>
        <input type="text" placeholder="RHQQ-W*34556/">
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Purchase Date</label>
        <DatePicker placeholder="Purchase Date"></DatePicker>
      </div>

      <div class="form-field">
        <label>Warranty Until</label>
        <DatePicker placeholder="31.12.2004"></DatePicker>
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Installation Date</label>
        <DatePicker placeholder="1.1.2005"></DatePicker>
      </div>
      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Power Supply Voltage</label>
        <input type="text" placeholder="230 V">
      </div>

      <div class="form-field">
        <label>Operation Principle</label>
        <input type="text" placeholder="Electric">
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
 