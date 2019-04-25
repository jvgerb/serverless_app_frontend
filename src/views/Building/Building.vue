<template>
  <FormCard>
    <div class="form-row">
      <div class="form-field">
        <label>Building ID</label>
        <input type="text" placeholder="342434">
      </div>

      <div class="form-field">
        <label>Building Name</label>
        <input type="text" placeholder="Steinberg">
      </div>
      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Street</label>
        <input type="text" placeholder="Oraniendamm">
      </div>

      <div class="form-field">
        <label>Number of Entrances</label>
        <input type="text" placeholder="2">
      </div>

      <div class="form-field">
        <label>Category</label>
        <select>
          <option value="Heat">Apartment Building</option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Street Number</label>
        <select>
          <option value="Heat">6 - 10</option>
        </select>
      </div>

      <div class="form-field">
        <label>Number of Floors</label>
        <input type="text" placeholder="5">
      </div>

      <div class="form-field">
        <label>heating_area_total (m^2)</label>
        <input type="text" placeholder="1250">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Zip Code</label>
        <input type="text" placeholder="13469">
      </div>

      <div class="form-field">
        <label>Number of Apartments</label>
        <input type="text" placeholder="32">
      </div>

      <div class="form-field">
        <label>Year</label>
        <select>
          <option value="Heat">1980</option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Place</label>
        <input type="text" placeholder="Berlin">
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

@Component({
  components: { FormCard, DatePicker, Rating },
})
export default class Building extends Vue {}
</script>

<style lang="scss" scoped>
</style>
 