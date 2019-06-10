<template>
  <FormCard @save="save">
    <div class="form-row">
      <div class="form-field">
        <label>Building ID</label>
        <input type="text" placeholder readonly v-model="data.buildingId">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Entrance ID</label>
        <input type="text" placeholder="entrance_1" v-model="data.entranceId">
      </div>

      <div class="form-field">
        <label>Description</label>
        <input type="text" placeholder="Side Entrance" v-model="data.description">
      </div>

      <div class="form-field">
        <label>Street</label>
        <input type="text" placeholder="Oraniendamm" v-model="data.street">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Street Number</label>
        <input type="text" placeholder="8" v-model="data.streetNumber">
      </div>

      <div class="form-field">
        <label>Zip Code</label>
        <input type="text" placeholder="13469" v-model="data.zipCode">
      </div>

      <div class="form-field">
        <label>Place</label>
        <input type="text" placeholder="Berlin" v-model="data.place">
      </div>
    </div>
  </FormCard>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FormCard from '@/components/FormCard.vue';
import DatePicker from '@/components/DatePicker.vue';
import Rating from '@/components/Rating.vue';
import { Entrance } from '@/services/api/models/building/entrance';
import * as api from '@/services/api';

@Component({
  components: { FormCard, DatePicker, Rating },
})
export default class extends Vue {
  data = new Entrance();

  save() {
    api.building.postEntrance(this.data);
  }
}
</script>

<style lang="scss" scoped>
</style>
 