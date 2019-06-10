<template>
  <FormCard @save="save">
    <div class="form-row">
      <div class="form-field">
        <label>Component Type</label>
        <input type="text" placeholder="Fitting">
      </div>

      <div class="form-field">
        <label>Manufacturer</label>
        <input type="text" placeholder="Honeywell centra">
      </div>

      <div class="form-field">
        <label>Designation Type</label>
        <input type="text" placeholder="DR50FA">
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>List Price Net</label>
        <input type="text" placeholder="$3,243.00">
      </div>

      <div class="form-field">
        <label>Net Purchase Price</label>
        <input type="text" placeholder="$2,345.00">
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
        <DatePicker placeholder="01.01.1999"></DatePicker>
      </div>

      <div class="form-field">
        <label>Warranty Until</label>
        <DatePicker placeholder="31.12.2004"></DatePicker>
      </div>

      <div class="form-field">
        <label>Purchase From</label>
        <input type="text" placeholder="Honeywell centra">
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
        <label>Fitting Type</label>
        <input type="text" placeholder="3-way mixer">
      </div>

      <div class="form-field">
        <label>Type</label>
        <input type="text" placeholder="Mixer">
      </div>

      <div class="form-field">
        <label>Nominal Diameter Fitting</label>
        <input type="text" placeholder="DN 50">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Leak Rate</label>
        <input type="text" placeholder="0.04">
      </div>

      <div class="form-field">
        <label>Kvs Value</label>
        <input type="text" placeholder="40,04">
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field col-2">
        <label>Comment</label>
        <input type="text" placeholder>
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
 