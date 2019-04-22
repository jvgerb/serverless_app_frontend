<template>
  <FormCard>
    <div class="col">
      <h5>Customer ID</h5>

      <div class="form-field col-3">
        <label>Contact Person Religion</label>
        <input type="text" placeholder="19">
      </div>

      <div class="form-field col-3">
        <label>Customer type</label>
        <select>
          <option value="Heat">- Select Religion -</option>
        </select>
      </div>

      <div class="form-field col-3">
        <label>Customer Organisation Name</label>
        <input type="text">
      </div>

      <div class="form-field col-3">
        <label>Customer’s Name (First &amp; Last)</label>
        <input type="text">
      </div>

      <div class="form-field col-3">
        <label>Customer Organisation Homepage</label>
        <input type="text" placeholder="http://">
      </div>

      <div class="form-field col-3">
        <label>Customer Quality of Relationship</label>
        <Rating></Rating>
      </div>
    </div>
    <div class="col">
      <h5>Customer Billing Address</h5>

      <div class="form-field col-3">
        <label>Street</label>
        <select>
          <option value="Heat">Herr</option>
        </select>
      </div>

      <div class="form-field col-3">
        <label>Street Number</label>
        <input type="text" placeholder="Von Roden">
      </div>

      <div class="form-field col-3">
        <label>Zip Code</label>
        <input type="text" placeholder="Von Roden">
      </div>

      <div class="form-field col-3">
        <label>Place</label>
        <input type="text" placeholder="Von Roden">
      </div>
    </div>
    <div class="col">
      <h5>Customer Delivery Address</h5>

      <div class="form-field col-3">
        <label>Street</label>
        <select>
          <option value="Heat">Herr</option>
        </select>
      </div>

      <div class="form-field col-3">
        <label>Street Number</label>
        <input type="text" placeholder="Von Roden">
      </div>

      <div class="form-field col-3">
        <label>Zip Code</label>
        <input type="text" placeholder="Von Roden">
      </div>

      <div class="form-field col-3">
        <label>Place</label>
        <input type="text" placeholder="Von Roden">
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
export default class Customer extends Vue {}
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
  }
}
</style>
