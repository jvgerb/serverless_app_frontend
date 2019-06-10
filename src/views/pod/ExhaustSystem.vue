<template>
  <FormCard @save="save">
    <div class="form-row">
      <div class="form-field">
        <label>Component Type</label>
        <input type="text" placeholder="Exhaust System">
      </div>

      <div class="form-field">
        <label>Manufacturer</label>
        <input type="text" placeholder="Unknown">
      </div>

      <div class="form-field">
        <label>Designation Type</label>
        <input type="text" placeholder="Z7 / FU">
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>House Connection Station List Price Net</label>
        <input type="text" placeholder="$2,900">
      </div>

      <div class="form-field">
        <label>House Connection Station Purchase Price</label>
        <input type="text" placeholder="$2,500">
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
        <label>Dimension</label>
        <input type="text" placeholder="100">
      </div>

      <div class="form-field">
        <label>Material Exhaust System</label>
        <input type="text" placeholder="Copper">
      </div>

      <div class="form-field">
        <label>Air Exhaust System</label>
        <input type="text" placeholder="No">
      </div>
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
 