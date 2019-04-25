<template>
  <FormCard>
    <div class="form-row">
      <div class="form-field">
        <label>Salutation</label>
        <input type="text">
      </div>

      <div class="form-field">
        <label>Title</label>
        <select>
          <option value="Heat">- Select Option -</option>
        </select>
      </div>

      <div class="form-field">
        <label>Title Add-on</label>
        <input type="text">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>First Name</label>
        <input type="text">
      </div>

      <div class="form-field">
        <label>Middle Name</label>
        <input type="text">
      </div>

      <div class="form-field">
        <label>Surname</label>
        <input type="text">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Function</label>
        <input type="text">
      </div>

      <div class="form-field">
        <label>Email</label>
        <input type="text">
      </div>

      <div class="form-field">
        <label>Telefon</label>
        <input type="text">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Mobile</label>
        <input type="text">
      </div>

      <div class="form-field">
        <label>Fax</label>
        <input type="text">
      </div>
      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Birthday</label>
        <DatePicker placeholder="01.10.2005"></DatePicker>
      </div>

      <div class="form-field">
        <label>Gender</label>
        <select>
          <option value="Heat">- Select Gender -</option>
        </select>
      </div>

      <div class="form-field">
        <label>Marital Status</label>
        <select>
          <option value="Heat">- Select Option -</option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Political Orientation</label>
        <select></select>
      </div>

      <div class="form-field">
        <label>Religion</label>
        <select>
          <option value="Heat">- Select Option -</option>
        </select>
      </div>

      <div class="form-field">
        <label>Hobby</label>
        <input type="text">
      </div>
    </div>
  </FormCard>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FormCard from '@/components/FormCard.vue';
import DatePicker from '@/components/DatePicker.vue';

@Component({
  components: { FormCard, DatePicker },
})
export default class Contact extends Vue {}
</script>

<style lang="scss" scoped>
</style>
