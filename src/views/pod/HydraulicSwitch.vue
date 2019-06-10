<template>
  <FormCard @save="save">
    <div class="form-row">
      <div class="form-field">
        <label>Hydraulic Switch ID</label>
        <input type="text" placeholder="hydraulic_switch_1">
      </div>

      <div class="form-field">
        <label>Component Type</label>
        <input type="text" placeholder="hydraulic_switch">
      </div>

      <div class="form-field">
        <label>Manufacturer</label>
        <input type="text" placeholder="Magra">
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Designation</label>
        <input type="text" placeholder="WST">
      </div>

      <div class="form-field">
        <label>List price Net</label>
        <input type="text" placeholder="$1,900">
      </div>

      <div class="form-field">
        <label>Net Purchase Price</label>
        <input type="text" placeholder="$300">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Serial Number</label>
        <input type="text" placeholder="2W367K-2A">
      </div>

      <div class="form-field">
        <label>Purchase From</label>
        <input type="text" placeholder="Magra">
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
        <label>Pipe Cross Section</label>
        <input type="text" placeholder="25 DN">
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
 