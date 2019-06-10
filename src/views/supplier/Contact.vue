<template>
  <FormCard @save="save">
    <div class="form-row">
      <div class="form-field">
        <label>Salutation</label>
        <input type="text" v-model="data.salutation">
      </div>

      <div class="form-field">
        <label>Title</label>
        <select v-model="data.title">
          <option value="Mrs.">Mrs.</option>
          <option value="Mr.">Mr.</option>
        </select>
      </div>

      <div class="form-field">
        <label>Title Add-on</label>
        <input type="text" v-model="data.titleAddOn">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>First Name</label>
        <input type="text" v-model="data.firstName">
      </div>

      <div class="form-field">
        <label>Middle Name</label>
        <input type="text" v-model="data.middleName">
      </div>

      <div class="form-field">
        <label>Surname</label>
        <input type="text" v-model="data.surname">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Function</label>
        <select v-model="data.functionName">
          <option value="Sales Manager">Sales Manager</option>
          <option value="Supervisor">Supervisor</option>
        </select>
      </div>

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
        <label>Gender</label>
        <select v-model="data.gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div class="form-field">
        <label>Marital Status</label>
        <select v-model="data.maritalStatus">
          <option value="single">Single</option>
          <option value="divorced">Divorced</option>
          <option value="married">Married</option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Political Orientation</label>
        <select v-model="data.politicalOrientation">
          <option value="left wing">Left Wing</option>
          <option value="right wing">Right Wing</option>
          <option value="not sure">Not Sure</option>
        </select>
      </div>

      <div class="form-field">
        <label>Religion</label>
        <select v-model="data.religion">
          <option value="judaite">Judaite</option>
          <option value="muslim">Muslim</option>
          <option value="christian">Christian</option>
          <option value="Hare Krishna">Hare Krishna</option>
        </select>
      </div>

      <div class="form-field">
        <label>Hobby</label>
        <input type="text" v-model="data.hobby">
      </div>
    </div>
  </FormCard>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FormCard from '@/components/FormCard.vue';
import DatePicker from '@/components/DatePicker.vue';
import { ContactPerson } from '@/services/api/models/supplier/contact-person';
import * as api from '@/services/api';

@Component({
  components: { FormCard, DatePicker },
})
export default class extends Vue {
  data = new ContactPerson();

  save() {
    api.supplier.postContactPerson(this.data);
  }
}
</script>

<style lang="scss" scoped>
</style>
