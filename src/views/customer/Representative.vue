<template>
  <FormCard>
    <div class="form-row">
      <div class="form-field">
        <label>Customer ID</label>
        <input type="text" placeholder v-model="data.customerId">
      </div>
      <div class="form-field">
        <label>Appointed</label>
        <select v-model="data.appotinted">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div class="form-field">
        <label>Organization Name</label>
        <input type="text" v-model="data.organizationName">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Type</label>
        <input type="text" v-model="data.type">
      </div>
      <div class="form-field">
        <label>Street</label>
        <input type="text" v-model="data.street">
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

      <div class="form-field">
        <label>Quality of Relationship</label>
        <Rating v-model="data.qualityOfRelationship"></Rating>
      </div>
      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Contact Person Title</label>
        <!-- <select>
          <option value="Heat">- Select Option -</option>
        </select>-->
        <input type="text" placeholder v-model="data.contactPersonTitle">
      </div>

      <div class="form-field">
        <label>Contact Person Title Addon</label>
        <input type="text" v-model="data.contactPersonTitleAddon">
      </div>

      <div class="form-field">
        <label>Contact Person First Name</label>
        <input type="text" v-model="data.сontactPersonFirstName">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Contact Person Middle Name</label>
        <input type="text" v-model="data.сontactPersonMiddleName">
      </div>

      <div class="form-field">
        <label>Contact Person Surname</label>
        <input type="text" v-model="data.сontactPersonSurname">
      </div>

      <div class="form-field">
        <label>Contact Person Function</label>
        <select v-model="data.сontactPersonFunction">
          <option value></option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Contact Person Email</label>
        <input type="text" v-model="data.сontactPersonEmail">
      </div>

      <div class="form-field">
        <label>Contact Person Telefon</label>
        <input type="text" v-model="data.сontactPersonTelefon">
      </div>

      <div class="form-field">
        <label>Contact Person Mobile</label>
        <input type="text" v-model="data.сontactPersonMobile">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Contact Person Fax</label>
        <input type="text" v-model="data.сontactPersonFax">
      </div>

      <div class="form-field">
        <label>Contact Person Birthday</label>
        <input type="text" v-model="data.сontactPersonBirthday">
      </div>

      <div class="form-field">
        <label>Contact Person Gender</label>
        <input type="text" v-model="data.сontactPersonGender">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Contact Person Marital Status</label>
        <select v-model="data.сontactPersonMartialStatus">
          <option value>- Select Option -</option>
        </select>
      </div>

      <div class="form-field">
        <label>Contact Person Political Orientation</label>
        <input type="text" v-model="data.сontactPersonPoliticalOrientation">
      </div>

      <div class="form-field">
        <label>Contact Person Religion</label>
        <select v-model="data.сontactPersonReligion">
          <option value>- Select Religion -</option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Contact Person Hobby</label>
        <input type="text" v-model="data.сontactPersonHobby">
      </div>

      <div class="form-field">
        <label>Comment</label>
        <input type="text" v-model="data.comment">
      </div>
    </div>
  </FormCard>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FormCard from '@/components/FormCard.vue';
import DatePicker from '@/components/DatePicker.vue';
import Rating from '@/components/Rating.vue';
import { Representative } from '@/services/api/models/customer/representative';
import * as api from '@/services/api';

@Component({
  components: { FormCard, DatePicker, Rating },
})
export default class extends Vue {
  data = new Representative();

  save() {
    api.customer.postRepresentative(this.data);
  }
}
</script>

<style lang="scss" scoped>
</style>
