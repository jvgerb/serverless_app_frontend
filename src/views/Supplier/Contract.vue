<template>
  <FormCard>
    <div class="form-row">
      <div class="form-field">
        <label>Contract ID</label>
        <input type="text" placeholder="ENN-000123">
      </div>

      <div class="form-field">
        <label>Contract Product</label>
        <input type="text">
      </div>

      <div class="form-field">
        <label>Category Type</label>
        <input type="text">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Signed On</label>
        <DatePicker placeholder="01.10.2005"></DatePicker>
      </div>

      <div class="form-field">
        <label>Signed By</label>
        <input type="text" placeholder="John Doe">
      </div>
      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Contract Period (Month)</label>
        <input type="text">
      </div>

      <div class="form-field">
        <label>Start Date</label>
        <DatePicker placeholder="01.10.2005"></DatePicker>
      </div>

      <div class="form-field">
        <label>Notice Period (Month)</label>
        <input type="text">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Automatic Contract Renewal in Month</label>
        <input type="text">
      </div>

      <div class="form-field">
        <label>Contract Valid to (Calculated)</label>
        <DatePicker placeholder="01.10.2005"></DatePicker>
      </div>

      <div class="form-field">
        <label>Possible Termination Date</label>
        <input type="text">
      </div>
      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Contract Terminated</label>
        <select>
          <option value="Heat">No</option>
        </select>
      </div>

      <div class="form-field">
        <label>Notice Given On</label>
        <DatePicker placeholder="15.02.2018"></DatePicker>
      </div>

      <div class="form-field">
        <label>Notice Given To</label>
        <DatePicker placeholder="31.12.2018"></DatePicker>
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field col-2">
        <label>Contract Term Comment</label>
        <textarea></textarea>
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
export default class Contract extends Vue {}
</script>

<style lang="scss" scoped>
</style>
