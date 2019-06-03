<template>
  <FormCard>
    <div class="form-row">
      <div class="form-field">
        <label>Supplier ID</label>
        <input type="text">
      </div>

      <div class="form-field">
        <label>Type</label>
        <select>
          <option value="Partner">Partner</option>
        </select>
      </div>

      <div class="form-field">
        <label>Industry Sector</label>
        <select>
          <option value="Electricity">Electricity</option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Name</label>
        <input type="text">
      </div>

      <div class="form-field">
        <label>Street Address</label>
        <input type="text">
      </div>

      <div class="form-field">
        <label>Street Number</label>
        <input type="text">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Zip Code</label>
        <input type="text">
      </div>

      <div class="form-field">
        <label>Place</label>
        <input type="text">
      </div>
      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Quality of Relationship</label>
        <Rating></Rating>
      </div>

      <div class="form-field">
        <label>Homepage</label>
        <input type="text" placeholder="http://">
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
export default class Supplier extends Vue {}
</script>

<style lang="scss" scoped>
</style>
 