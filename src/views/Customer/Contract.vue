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
        </select>
      </div>

      <div class="form-field">
        <label>Product Category Type</label>
        <select>
          <option value="Heat"></option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Signed On</label>
        <DatePicker placeholder="15.11.2008"></DatePicker>
      </div>

      <div class="form-field">
        <label>Signed By</label>
        <input type="text">
      </div>

      <div class="form-field">
        <label>Contract Period (Month)</label>
        <input type="text">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Contract Start Date</label>
        <DatePicker placeholder="01.01.2009"></DatePicker>
      </div>

      <div class="form-field">
        <label>Notice Period (Month)</label>
        <input type="text" placeholder="9">
      </div>

      <div class="form-field">
        <label>Automatic Contract Renewal in Month</label>
        <input type="text" placeholder="60">
      </div>
      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Contract Valid to (Calculated)</label>
        <DatePicker placeholder="31.12.2014"></DatePicker>
      </div>

      <div class="form-field">
        <label>Possible Termination Date</label>
        <select>
          <option value="Heat">- Select Option -</option>
        </select>
      </div>

      <div class="form-field">
        <label>Contract Terminated</label>
        <select>
          <option value="Heat">No</option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Notice Given On</label>
        <DatePicker placeholder="15.2.2018"></DatePicker>
      </div>

      <div class="form-field">
        <label>Notice Given To</label>
        <DatePicker placeholder="31.12.2018"></DatePicker>
      </div>

      <div class="form-field">
        <label>Contract Term Comment</label>
        <input type="text" placeholder="60">
      </div>
      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Consumption Price (Start Value)</label>
        <input type="text" placeholder="45">
      </div>

      <div class="form-field">
        <label>Consumption Price Adjustment</label>
        <select>
          <option value="Heat">Quarterly</option>
        </select>
      </div>

      <div class="form-field">
        <label>Consumption Unit</label>
        <select>
          <option value="Heat">EUR/MWh</option>
        </select>
      </div>
      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Capacity Price (Start Value)</label>
        <input type="text" placeholder="40">
      </div>

      <div class="form-field">
        <label>Capacity Price Unit</label>
        <select>
          <option value="Heat">EUR/kW</option>
        </select>
      </div>

      <div class="form-field">
        <label>Capacity Start Value</label>
        <input type="text" placeholder="340">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Capacity Price (Start Value)</label>
        <input type="text" placeholder="40">
      </div>

      <div class="form-field">
        <label>Capacity Price Adjustment</label>
        <select>
          <option value="Heat">Quartely</option>
        </select>
      </div>
      <hr>
    </div>

    <div class="form-row">
      <div class="form-field col-2">
        <label>Customer Contract Comment</label>
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
