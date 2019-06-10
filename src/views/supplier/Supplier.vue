<template>
  <FormCard @save="save">
    <div class="form-row">
      <div class="form-field">
        <label>Supplier ID</label>
        <input type="text" readonly v-model="data.supplierId">
      </div>

      <div class="form-field">
        <label>Type</label>
        <select v-model="data.type">
          <option value="Partner">Partner</option>
          <option value="Company">Company</option>
        </select>
      </div>

      <div class="form-field">
        <label>Industry Sector</label>
        <select v-model="data.industySector">
          <option value="Electricity">Electricity</option>
          <option value="Oil & Gas">Oil & Gas</option>
          <option value="Water">Water</option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Name</label>
        <input type="text" v-model="data.name">
      </div>

      <div class="form-field">
        <label>Street Address</label>
        <input type="text" v-model="data.streeetAddress">
      </div>

      <div class="form-field">
        <label>Street Number</label>
        <input type="text" v-model="data.streetNumber">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Zip Code</label>
        <input type="text" v-model="data.zipCode">
      </div>

      <div class="form-field">
        <label>Place</label>
        <input type="text" v-model="data.place">
      </div>
      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Quality of Relationship</label>
        <Rating v-model="data.qualityOfRelationship"></Rating>
      </div>

      <div class="form-field">
        <label>Homepage</label>
        <input type="text" placeholder="http://" v-model="data.homepage">
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
import { Supplier } from '@/services/api/models/supplier/supplier';
import * as api from '@/services/api';

@Component({
  components: { FormCard, DatePicker, Rating },
})
export default class extends Vue {
  data = new Supplier();

  save() {
    api.supplier.postSupplier(this.data);
  }
}
</script>

<style lang="scss" scoped>
</style>
 