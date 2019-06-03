<template>
  <FormCard @save="save">
    <div class="col">
      <h5>Customer ID</h5>

      <div class="form-field col-3">
        <label>Customer ID</label>
        <input type="text" placeholder="19" v-model="data.customerId" readonly>
      </div>

      <div class="form-field col-3">
        <label>Customer type</label>
        <select>
          <option value="contact">Contact</option>
          <option value="company">Company</option>
        </select>
      </div>

      <div class="form-field col-3">
        <label>Customer Organization Name</label>
        <input type="text"  v-model="data.customerOrganizationName">
      </div>

      <div class="form-field col-3">
        <label>Customer’s Name (First &amp; Last)</label>
        <input type="text" v-model="data.customersName">
      </div>

      <div class="form-field col-3">
        <label>Customer Organization Homepage</label>
        <input type="text" placeholder="http://" v-model="data.customerOrganizationHomepage">
      </div>

      <div class="form-field col-3">
        <label>Customer Quality of Relationship</label>
        <Rating :value="data.customerQualityOfRelationship"></Rating>
      </div>
    </div>
    <div class="col">
      <h5>Customer Billing Address</h5>

      <div class="form-field col-3">
        <label>Street</label>
        <!-- <select>
          <option value="Heat">Herr</option>
        </select> -->
        <input type="text" placeholder="Herr"  v-model="data.billingAddressStreet">
      </div>

      <div class="form-field col-3">
        <label>Street Number</label>
        <input type="text" placeholder="Von Roden" v-model="data.billingAddressStreetNumber">
      </div>

      <div class="form-field col-3">
        <label>Zip Code</label>
        <input type="text" placeholder="Von Roden" v-model="data.billingAddressZipCode">
      </div>

      <div class="form-field col-3">
        <label>Place</label>
        <input type="text" placeholder="Von Roden" v-model="data.billingAddressPlace">
      </div>
    </div>
    <div class="col">
      <h5>Customer Delivery Address</h5>

      <div class="form-field col-3">
        <label>Street</label>
        <!-- <select>
          <option value="Heat">Herr</option>
        </select> -->
        <input type="text" placeholder="Herr"  v-model="data.deliveryAddressStreet">
      </div>

      <div class="form-field col-3">
        <label>Street Number</label>
        <input type="text" placeholder="Von Roden" v-model="data.deliveryAddressStreetNumber">
      </div>

      <div class="form-field col-3">
        <label>Zip Code</label>
        <input type="text" placeholder="Von Roden" v-model="data.deliveryAddressZipCode">
      </div>

      <div class="form-field col-3">
        <label>Place</label>
        <input type="text" placeholder="Von Roden" v-model="data.deliveryAddressPlace">
      </div>
    </div>
  </FormCard>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FormCard from '@/components/FormCard.vue';
import DatePicker from '@/components/DatePicker.vue';
import Rating from '@/components/Rating.vue';
import {Customer as CustomerModel} from '@/services/api/models/customer/customer';
import * as api from '@/services/api';

@Component({
  components: { FormCard, DatePicker, Rating },
})
export default class Customer extends Vue {
data:CustomerModel = new CustomerModel()

save(){
  api.customer.postCustomer(this.data);
}

}
</script>

<style lang="scss" scoped>
.form-card {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: '. . .';
  padding: 0;
  overflow: hidden;
  .form-field {
    padding: 0;
  }
}
.col {
  padding: 0 30px 30px;
  border-left: solid 1px #e7e7e7;
  &:first-child {
    border-left: none;
  }

  h5 {
    margin: 0;
    font-size: 14px;
    padding: 18px 30px;
    margin: 0 -30px;
    background-color: #f8f8f8;
    color: var(--accent-color);
    box-shadow: 0px 1px 3px #d4d4d4;
    letter-spacing: 1.5px;
    font-weight: bold;
  }
}
</style>
