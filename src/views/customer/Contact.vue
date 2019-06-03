<template>
  <FormCard @save="save">
    <div class="form-row">
      <div class="form-field">
        <label>Customer ID</label>
        <input type="text" placeholder v-model="data.customerId">
      </div>
      <div class="form-field">
        <label>Function</label>
        <select v-model="data.functionName">
          <option value="Sales Manager">Sales Manager</option>
          <option value="Supervisor">Supervisor</option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Salutation</label>
        <select v-model="data.salutation">
          <option value>- Select Option -</option>
        </select>
      </div>

      <div class="form-field">
        <label>Title</label>
        <input type="text" v-model="data.title">
      </div>

      <div class="form-field">
        <label>AddOn</label>
        <input type="text" v-model="data.addOn">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>First Name</label>
        <input type="text" placeholder="Albrecht" v-model="data.firstName">
      </div>

      <div class="form-field">
        <label>Middle Name</label>
        <input type="text" placeholder="Von Roden" v-model="data.middleName">
      </div>

      <div class="form-field">
        <label>Surname</label>
        <input type="text" placeholder="HV" v-model="data.surname">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Email</label>
        <input type="text" v-model="data.email">
      </div>

      <div class="form-field">
        <label>Telefon</label>
        <input type="text" v-model="data.telefon">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Mobile</label>
        <input type="text" v-model="data.mobile">
      </div>

      <div class="form-field">
        <label>Fax</label>
        <input type="text" v-model="data.fax">
      </div>
      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Birthday</label>
        <DatePicker placeholder="01.10.2005" v-model="data.birthday"></DatePicker>
      </div>
      <div class="form-field">
        <label>Religion</label>
        <select v-model="data.religion">
          <option value>- Select Religion -</option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Gender</label>
        <select v-model="data.gender">
          <option value>- Select Gender -</option>
        </select>
      </div>
      <div class="form-field">
        <label>Political Orientation</label>
        <select v-model="data.politicalOrientation">
          <option value>- Select Political Orientation -</option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Marital Status</label>
        <select v-model="data.maritalStatus">
          <option value>- Select Status -</option>
        </select>
      </div>
      <div class="form-field">
        <label>Hobby</label>
        <input type="text" v-model="data.hobby">
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
import { ContactPerson } from '@/services/api/models/customer/contact-person';
import * as api from '@/services/api';

@Component({
  components: { FormCard, DatePicker },
})
export default class extends Vue {
  data = new ContactPerson();

  save() {
    api.customer.postContactPerson(this.data);
  }
}
</script>

<style lang="scss" scoped>
</style>
