<template>
  <FormCard @save="save">
    <div class="form-row">
      <div class="form-field">
        <label>Boiler ID</label>
        <input type="text" placeholder="boiler_1">
      </div>

      <div class="form-field">
        <label>Component Type</label>
        <select>
          <option value="Heat">Boiler</option>
        </select>
      </div>

      <div class="form-field">
        <label>Manufacturer</label>
        <input type="text" placeholder="Buderus">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Designation Type ID</label>
        <input type="text" placeholder="Logano Plus SE625">
      </div>

      <div class="form-field">
        <label>List Price Net</label>
        <input type="text" placeholder="$5,000">
      </div>

      <div class="form-field">
        <label>Net Purchase Price</label>
        <input type="text" placeholder="$4,500">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Serial Number</label>
        <input type="text" placeholder="12Z4K212337">
      </div>

      <div class="form-field">
        <label>Purchase Date</label>
        <DatePicker placeholder="01.01.1999"></DatePicker>
      </div>

      <div class="form-field">
        <label>Purchase From</label>
        <input type="text" placeholder="B&O">
      </div>
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

      <div class="form-field">
        <label>Interface Protocol</label>
        <input type="text" placeholder="proprietary protocol">
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Fuel Category</label>
        <input type="text" placeholder="Gas">
      </div>

      <div class="form-field">
        <label>Boiler Type</label>
        <input type="text" placeholder="NT">
      </div>

      <div class="form-field">
        <label>Burner Intern</label>
        <input type="text" placeholder="No">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Max Capacity</label>
        <input type="text" placeholder="748 kW">
      </div>

      <div class="form-field">
        <label>Wa ter Volume</label>
        <input type="text" placeholder="1122 liter">
      </div>

      <div class="form-field">
        <label>Length</label>
        <input type="text" placeholder="1000 mm">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Width</label>
        <input type="text" placeholder="1000 mm">
      </div>

      <div class="form-field">
        <label>Height</label>
        <input type="text" placeholder="750 mm">
      </div>

      <div class="form-field">
        <label>Radiation Losses</label>
        <input type="text" placeholder="10%">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Heat Input</label>
        <input type="text" placeholder="340kW">
      </div>

      <div class="form-field">
        <label>Standby Loss</label>
        <input type="text" placeholder="5%">
      </div>

      <div class="form-field">
        <label>Boiler Material</label>
        <input type="text" placeholder="stainless_steel">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Heat Exchanger</label>
        <input type="text" placeholder="No">
      </div>

      <div class="form-field">
        <label>Technical Design</label>
        <input type="text" placeholder="No Data">
      </div>

      <div class="form-field">
        <label>Combustion Efficiency</label>
        <input type="text" placeholder="80%">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Boiler Efficiency</label>
        <input type="text" placeholder="75%">
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Minimum Volume Flow</label>
        <input type="text" placeholder="150 l/h">
      </div>

      <div class="form-field">
        <label>Minimum Return Flow Value</label>
        <input type="text" placeholder="80 l/h">
      </div>

      <div class="form-field">
        <label>Internal Pump</label>
        <input type="text" placeholder="Yes">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Cascade</label>
        <input type="text" placeholder="No">
      </div>

      <div class="form-field">
        <label>Multi boiler system</label>
        <input type="text" placeholder="No">
      </div>

      <div class="form-field">
        <label>Exhaust Gas loss</label>
        <input type="text" placeholder="10%">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Heat Exchanger Principle</label>
        <input type="text" placeholder="Crossflow">
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field col-2">
        <label>Comment</label>
        <textarea></textarea>
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
 