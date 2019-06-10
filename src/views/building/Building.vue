<template>
  <FormCard @save="save">
    <div class="form-row">
      <div class="form-field">
        <label>Building ID</label>
        <input type="text" placeholder="342434" readonly v-model="data.buildingId">
      </div>

      <div class="form-field">
        <label>Building Name</label>
        <input type="text" placeholder="Steinberg" v-model="data.buildingName">
      </div>
      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Street</label>
        <input type="text" placeholder="Oraniendamm" v-model="data.street">
      </div>

      <div class="form-field">
        <label>Number of Entrances</label>
        <input type="text" placeholder="2" v-model="data.numberOfEntrances">
      </div>

      <div class="form-field">
        <label>Category</label>
        <select v-model="data.category">
          <option value="apartment building">Apartment Building</option>
          <option value="industry building">Industry Building</option>
          <option value="school">School</option>
          <option value="univercity">Univercity</option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Street Number</label>
        <input type="text" placeholder="6 - 10" v-model="data.streetNumber">
        <!-- <select>
          <option value="Heat">6 - 10</option>
        </select>-->
      </div>

      <div class="form-field">
        <label>Number of Floors</label>
        <input type="text" placeholder="5" v-model="data.numberOfFloors">
      </div>

      <div class="form-field">
        <label>Heating Area Total (m^2)</label>
        <input type="text" placeholder="1250" v-model="data.heatingAreaTotal">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Zip Code</label>
        <input type="text" placeholder="13469" v-model="data.zipCode">
      </div>

      <div class="form-field">
        <label>Number of Apartments</label>
        <input type="text" placeholder="32" v-model="data.numberOfApartments">
      </div>

      <div class="form-field">
        <label>Year</label>
        <input type="text" placeholder="1980" v-model="data.year">
        <!-- <select>
          <option value="Heat">1980</option>
        </select>-->
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Place</label>
        <input type="text" placeholder="Berlin" v-model="data.place">
      </div>
      <hr>
    </div>

    <div class="form-row">
      <div class="form-field col-2">
        <label>Comment</label>
        <textarea v-model="data.comment"></textarea>
      </div>
    </div>
  </FormCard>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FormCard from '@/components/FormCard.vue';
import DatePicker from '@/components/DatePicker.vue';
import Rating from '@/components/Rating.vue';
import { Building } from '@/services/api/models/building/building';
import * as api from '@/services/api';

@Component({
  components: { FormCard, DatePicker, Rating },
})
export default class extends Vue {
  data = new Building();

  save() {
    api.building.postBuilding(this.data);
  }
}
</script>

<style lang="scss" scoped>
</style>
 