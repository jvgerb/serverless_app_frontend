<template>
  <FormCard>
    <div class="form-row">
      <div class="form-field">
        <label>Customer Contract ID</label>
        <input type="text" placeholder="ENN-000123">
      </div>
      <div class="form-field">
        <label>Contract Product</label>
        <select>
          <option value="Heat">Heat</option>
          <option value="Heat">Heat 2</option>
          <option value="Heat">Heat 3</option>
        </select>
      </div>
      <div class="form-field">
        <label>Customer</label>
        <input type="text">
      </div>

      <hr>
    </div>
    <div class="form-row">
      <div class="form-field">
        <label>Customer</label>
        <DatePicker></DatePicker>
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
export default class Customer extends Vue {}
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars';
</style>
