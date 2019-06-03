<template>
  <FormCard>
    <div class="form-row">
      <div class="form-field">
        <label>Customer ID</label>
        <input type="text" placeholder="ENN-000123" v-model="data.customerId">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Customer Contract ID</label>
        <input type="text" placeholder="ENN-000123" v-model="data.customerContractId" readonly>
      </div>

      <div class="form-field">
        <label>Contract Product</label>
        <!-- <select>
          <option value="Heat">Heat</option>
        </select>-->
        <input type="text" placeholder="ENN-000123" v-model="data.contractProduct">
      </div>

      <div class="form-field">
        <label>Product Category Type</label>
        <select v-model="data.productCategoryType">
          <option value="Heat"></option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Signed On</label>
        <DatePicker placeholder="15.11.2008" v-model="data.signedOn"></DatePicker>
      </div>

      <div class="form-field">
        <label>Signed By</label>
        <input type="text" v-model="data.signedBy">
      </div>

      <div class="form-field">
        <label>Contract Period (Month)</label>
        <input type="text" v-model="data.contractPeriodMonth">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Contract Start Date</label>
        <DatePicker placeholder="01.01.2009" v-model="data.contractStartDate"></DatePicker>
      </div>

      <div class="form-field">
        <label>Notice Period (Month)</label>
        <input type="text" placeholder="9" v-model="data.noticePeriodMonth">
      </div>

      <div class="form-field">
        <label>Automatic Contract Renewal in Month</label>
        <input type="text" placeholder="60" v-model="data.automaticContractRenewalInMonth">
      </div>
      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Contract Valid to (Calculated)</label>
        <DatePicker placeholder="31.12.2014" v-model="data.contractValidToCalculated"></DatePicker>
      </div>

      <div class="form-field">
        <label>Possible Termination Date</label>
        <select v-model="data.automaticContractRenewalInMonth">
          <option value="end of year">End of Year</option>
        </select>
      </div>

      <div class="form-field">
        <label>Contract Terminated</label>
        <select v-model="data.contractTerminated">
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Notice Given On</label>
        <DatePicker placeholder="15.2.2018" v-model="data.noticeGivenOn"></DatePicker>
      </div>

      <div class="form-field">
        <label>Notice Given To</label>
        <DatePicker placeholder="31.12.2018" v-model="data.noticeGivenTo"></DatePicker>
      </div>

      <div class="form-field">
        <label>Contract Term Comment</label>
        <input type="text" placeholder="60" v-model="data.contractTermComment">
      </div>
      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Consumption Price (Start Value)</label>
        <input type="text" placeholder="45" v-model="data.consumptionPriceStartValue">
      </div>

      <div class="form-field">
        <label>Consumption Price Adjustment</label>
        <select v-model="data.consumptionPriceAdjustment">
          <option value="quartely">Quartely</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      <div class="form-field">
        <label>Consumption Unit</label>
        <select v-model="data.consumptionUnit">
          <option value="EUR/kW">EUR/MWh</option>
          <option value="EUR/MWh">EUR/MWh</option>
        </select>
      </div>
      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Capacity Price (Start Value)</label>
        <input type="text" placeholder="40" v-model="data.capacityPriceStartValue">
      </div>

      <div class="form-field">
        <label>Capacity Price Unit</label>
        <select v-model="data.capacityPriceUnit">
          <option value="EUR/kW">EUR/kW</option>
          <option value="EUR/MWh">EUR/kW</option>
        </select>
      </div>

      <div class="form-field">
        <label>Capacity Start Value</label>
        <input type="text" placeholder="340" v-model="data.capacityStartValue">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Capacity Price (Start Value)</label>
        <input type="text" placeholder="40" v-model="data.capacityPriceStartValue">
      </div>

      <div class="form-field">
        <label>Capacity Price Adjustment</label>
        <select v-model="data.capacityPriceAdjustment">
          <option value="quartely">Quartely</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <hr>
    </div>

    <div class="form-row">
      <div class="form-field col-2">
        <label>Customer Contract Comment</label>
        <textarea v-model="data.customerContractComment"></textarea>
      </div>
    </div>
  </FormCard>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FormCard from '@/components/FormCard.vue';
import DatePicker from '@/components/DatePicker.vue';
import { Contract } from '@/services/api/models/customer/contract';
import * as api from '@/services/api';

@Component({
  components: { FormCard, DatePicker },
})
export default class extends Vue {
  data = new Contract();

  save() {
    api.customer.postContract(this.data);
  }
}
</script>

<style lang="scss" scoped>
</style>
