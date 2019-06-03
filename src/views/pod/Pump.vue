<template>
  <FormCard>
    <div class="form-row">
      <div class="form-field">
        <label>Component Type</label>
        <input type="text" placeholder="Circulation_pump">
      </div>

      <div class="form-field">
        <label>Manufacturer</label>
        <input type="text" placeholder="Grundfos">
      </div>

      <div class="form-field">
        <label>Designation Type</label>
        <input type="text" placeholder="Magna3">
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>List Price Net</label>
        <input type="text" placeholder="$3,243.00">
      </div>

      <div class="form-field">
        <label>Net Price Purchase</label>
        <input type="text" placeholder="$3,243.00">
      </div>

      <div class="form-field">
        <label>Serial Number</label>
        <input type="text" placeholder="RHQQ-W*34556/">
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

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Purchase From</label>
        <input type="text" placeholder="Grundfos">
      </div>

      <div class="form-field">
        <label>Installation Date</label>
        <input type="text" placeholder="1.1.2005">
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Interface Protocol</label>
        <input type="text" placeholder="Genibus">
      </div>

      <div class="form-field">
        <label>Circulation Pump</label>
        <input type="text" placeholder="Digital">
      </div>

      <div class="form-field">
        <label>Use Case Pump</label>
        <input type="text" placeholder="Heating Circuit">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Control Type</label>
        <input type="text" placeholder="Auto">
      </div>

      <div class="form-field">
        <label>Circulated Type</label>
        <input type="text" placeholder="3,5m">
      </div>

      <div class="form-field">
        <label>Operating Hours Per year</label>
        <input type="text" placeholder="2460h">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Pn</label>
        <input type="text" placeholder="50">
      </div>

      <div class="form-field">
        <label>Maximum Height</label>
        <input type="text" placeholder="9,5m">
      </div>

      <div class="form-field">
        <label>Max Flow Rate</label>
        <input type="text" placeholder="300 l">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Fitting Length</label>
        <input type="text" placeholder="300mm">
      </div>

      <div class="form-field">
        <label>300mm</label>
        <input type="text" placeholder="steel">
      </div>

      <div class="form-field">
        <label>Electrical Power Input</label>
        <input type="text" placeholder="24v">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>p1 min</label>
        <input type="text" placeholder="5 W">
      </div>

      <div class="form-field">
        <label>p1 max</label>
        <input type="text" placeholder="30 W">
      </div>

      <div class="form-field">
        <label>Readable</label>
        <input type="text" placeholder="Yes">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field col-2">
        <label>Comment</label>
        <textarea placeholder></textarea>
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
 