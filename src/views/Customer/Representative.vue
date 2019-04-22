<template>
  <FormCard>
    <div class="form-row">
      <div class="form-field">
        <label>Appointed</label>
        <select>
          <option value="Heat">- Select Option -</option>
        </select>
      </div>

      <div class="form-field">
        <label>Organization Name</label>
        <input type="text">
      </div>

      <div class="form-field">
        <label>Type</label>
        <input type="text">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Street</label>
        <input type="text">
      </div>

      <div class="form-field">
        <label>Street Number</label>
        <input type="text">
      </div>

      <div class="form-field">
        <label>Zip Code</label>
        <input type="text">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Place</label>
        <input type="text">
      </div>

      <div class="form-field">
        <label>Quality of Relationship</label>
        <Rating></Rating>
      </div>
      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Contact Person Title</label>
        <select>
          <option value="Heat">- Select Option -</option>
        </select>
      </div>

      <div class="form-field">
        <label>Contact Person Title Addon</label>
        <input type="text">
      </div>

      <div class="form-field">
        <label>Contact Person First Name</label>
        <input type="text">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Contact Person Middle Name</label>
        <input type="text">
      </div>

      <div class="form-field">
        <label>Contact Person Surname</label>
        <input type="text">
      </div>

      <div class="form-field">
        <label>Contact Person Function</label>
        <select>
          <option value="Heat"></option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Contact Person Email</label>
        <input type="text">
      </div>

      <div class="form-field">
        <label>Contact Person Telefon</label>
        <input type="text">
      </div>

      <div class="form-field">
        <label>Contact Person Mobile</label>
        <input type="text">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Contact person fax</label>
        <input type="text">
      </div>

      <div class="form-field">
        <label>Contact Person Birthday</label>
        <input type="text">
      </div>

      <div class="form-field">
        <label>Contact Person Gender</label>
        <input type="text">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Contact Person Marital Status</label>
        <select>
          <option value="Heat">- Select Option -</option>
        </select>
      </div>

      <div class="form-field">
        <label>Contact Person Political Orientation</label>
        <input type="text">
      </div>

      <div class="form-field">
        <label>Contact Person Religion</label>
        <select>
          <option value="Heat">- Select Religion -</option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Contact Person hobby</label>
        <input type="text">
      </div>

      <div class="form-field">
        <label>Comment</label>
        <input type="text">
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
</style>
