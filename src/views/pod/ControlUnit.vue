<template>
  <FormCard>
    <div class="form-row">
      <div class="form-field">
        <label>Control Unit ID</label>
        <input type="text" placeholder="control_unit_1">
      </div>

      <div class="form-field">
        <label>Component Type</label>
        <input type="text" placeholder="control_unit">
      </div>

      <div class="form-field">
        <label>Manufacturer</label>
        <input type="text" placeholder="Buderus">
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>List Price Net</label>
        <input type="text" placeholder="$2,700">
      </div>

      <div class="form-field">
        <label>Unit Purchase Price Net</label>
        <input type="text" placeholder="$2,000">
      </div>

      <div class="form-field">
        <label>Designation</label>
        <input type="text" placeholder="R4311">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Serial Number</label>
        <input type="text" placeholder="2W367K-2A">
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Purchase Date</label>
        <DatePicker placeholder="01.01.1999"></DatePicker>
      </div>

      <div class="form-field">
        <label>Warranty Until</label>
        <DatePicker placeholder="31.12.2004"></DatePicker>
      </div>

      <div class="form-field">
        <label>Boiler Installation Date</label>
        <DatePicker placeholder="1.1.2005"></DatePicker>
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Interface Protocol</label>
        <input type="text" placeholder="modbus rs485">
      </div>

      <div class="form-field">
        <label>Control Unit Analog/Digital?</label>
        <input type="text" placeholder="Analog">
      </div>

      <div class="form-field">
        <label>Operation Mode</label>
        <input type="text" placeholder="Auto">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Remote Control</label>
        <input type="text" placeholder="Remote Control">
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field col-2">
        <label>Comment</label>
        <DatePicker placeholder></DatePicker>
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
export default class extends Vue {}
</script>

<style lang="scss" scoped>
</style>
 