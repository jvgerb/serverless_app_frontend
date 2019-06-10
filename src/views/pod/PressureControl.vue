<template>
  <FormCard @save="save">
    <div class="form-row">
      <div class="form-field">
        <label>Pressure Control ID</label>
        <input type="text" placeholder="pressure_control_1">
      </div>

      <div class="form-field">
        <label>Component Type</label>
        <input type="text" placeholder="pressure_control">
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
        <input type="text" placeholder="DSH143">
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
        <label>Physical Pressure Control Type</label>
        <input type="text" placeholder="safety valve">
      </div>

      <div class="form-field">
        <label>Response Pressure</label>
        <input type="text" placeholder="5 Bar">
      </div>

      <div class="form-field">
        <label>DN</label>
        <input type="text" placeholder="50 DN">
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
 