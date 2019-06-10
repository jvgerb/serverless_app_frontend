<template>
  <FormCard @save="save">
    <div class="form-row">
      <div class="form-field">
        <label>Component Type</label>
        <input type="text" placeholder="distribution_block">
      </div>

      <div class="form-field">
        <label>Manufacturer</label>
        <input type="text" placeholder="Magra">
      </div>

      <div class="form-field">
        <label>Designation</label>
        <input type="text" placeholder="Sinus">
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>List Price Net</label>
        <input type="text" placeholder="$2,700">
      </div>

      <div class="form-field">
        <label>Purchase Price Net</label>
        <input type="text" placeholder="$2,000">
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
        <DatePicker placeholder="31.12.2004"></DatePicker>
      </div>

      <div class="form-field">
        <label>Purchase From</label>
        <DatePicker placeholder="Magra"></DatePicker>
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Magra</label>
        <input type="text" placeholder="1.1.2005">
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Block Type</label>
        <input type="text" placeholder="Pressure afflicted">
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field col-2">
        <label>Comment</label>
        <textarea placeholder="No"></textarea>
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
 