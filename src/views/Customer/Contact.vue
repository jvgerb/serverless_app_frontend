<template>
  <FormCard>
    <div class="form-row">
      <div class="form-field">
        <label>Function</label>
        <select>
          <option value="Heat">- Select Option -</option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Salutation</label>
        <select>
          <option value="Heat">- Select Option -</option>
        </select>
      </div>

      <div class="form-field">
        <label>Title</label>
        <input type="text">
      </div>

      <div class="form-field">
        <label>AddOn</label>
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
        <DatePicker></DatePicker>
      </div>
      <div class="form-field">
        <label>Religion</label>
        <select>
          <option value="Heat">- Select Religion -</option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Gender</label>
        <select>
          <option value="Heat">- Select Gender -</option>
        </select>
      </div>
      <div class="form-field">
        <label>Political Orientation</label>
        <select>
          <option value="Heat">- Select Political Orientation -</option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Marital Status</label>
        <select>
          <option value="Heat">- Select Status -</option>
        </select>
      </div>
      <div class="form-field">
        <label>Hobby</label>
        <input type="text">
      </div>
      <hr>
    </div>

    <div class="form-row">
      <div class="form-field col-2">
        <label>Marital Status</label>
        <textarea></textarea>
      </div>
      <hr>
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
