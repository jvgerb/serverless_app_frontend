<template>
  <FormCard @save="save">
    <div class="form-row">
      <div class="form-field">
        <label>Component Type</label>
        <input type="text" placeholder="Burner">
      </div>

      <div class="form-field">
        <label>Manufacturer</label>
        <select>
          <option value="Heat">Weishaupt</option>
        </select>
      </div>

      <div class="form-field">
        <label>Designation Type</label>
        <input type="text" placeholder="G5/1-DZD">
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>List Price Net</label>
        <input type="text" placeholder="$2,700">
      </div>

      <div class="form-field">
        <label>Burner Purchase Net Price</label>
        <input type="text" placeholder="$2,000">
      </div>

      <div class="form-field">
        <label>Burner Serial Number</label>
        <input type="text" placeholder="2W367K-2A">
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Burner Purchase Date</label>
        <DatePicker placeholder="01.01.1999"></DatePicker>
      </div>

      <div class="form-field">
        <label>Burner Warranty Until</label>
        <DatePicker placeholder="31.12.2006"></DatePicker>
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Boiler Purchase From</label>
        <input type="text" placeholder="Boiler Purchase From">
      </div>

      <div class="form-field">
        <label>Boiler Installation Date</label>
        <DatePicker placeholder="1.1.2005"></DatePicker>
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Operation Mode Burner</label>
        <input type="text" placeholder="Operation Mode Burner">
      </div>

      <div class="form-field">
        <label>Oil Jet Size</label>
        <input type="text" placeholder="No Data">
      </div>

      <div class="form-field">
        <label>Oil Jet Pressure</label>
        <input type="text" placeholder="No Data">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Combustion Type</label>
        <input type="text" placeholder="LAS">
      </div>

      <div class="form-field">
        <label>Combustion Air Supply</label>
        <input type="text" placeholder="room-air-dependent">
      </div>

      <div class="form-field">
        <label>Burner Capacity</label>
        <input type="text" placeholder="940 kW">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Adjusted Capacity</label>
        <input type="text" placeholder="600 kW">
      </div>

      <div class="form-field">
        <label>Lower Modulation Limit</label>
        <input type="text" placeholder="0">
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
 