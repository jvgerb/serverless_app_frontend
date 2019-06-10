<template>
  <FormCard @save="save">
    <div class="form-row">
      <div class="form-field">
        <label>Component Type</label>
        <input type="text" placeholder="expansion_tank">
      </div>

      <div class="form-field">
        <label>Manufacturer</label>
        <input type="text" placeholder="Reflex Winkelmann">
      </div>

      <div class="form-field">
        <label>Designation Type</label>
        <input type="text" placeholder="N400">
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
        <input type="text" placeholder="Reflex Winkelmann">
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
        <label>Volume Expansion Tank</label>
        <input type="text" placeholder="400">
      </div>

      <div class="form-field">
        <label>System Pressure</label>
        <input type="text" placeholder="1,5 Bar">
      </div>

      <div class="form-field">
        <label>Expansion Tank Type</label>
        <input type="text" placeholder="MAG">
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
 