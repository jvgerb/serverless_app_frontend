<template>
  <FormCard @save="save">
    <div class="form-row">
      <div class="form-field">
        <label>Contract ID</label>
        <input type="text" placeholder="ENN-000123" readonly v-model="data.contractId">
      </div>

      <div class="form-field">
        <label>Contract Product</label>
        <input type="text" v-model="data.contractProduct">
      </div>

      <div class="form-field">
        <label>Category Type</label>
        <input type="text" v-model="data.categoryType">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Signed On</label>
        <DatePicker placeholder="01.10.2005" v-model="data.signedOn"></DatePicker>
      </div>

      <div class="form-field">
        <label>Signed By</label>
        <input type="text" placeholder="John Doe" v-model="data.signedBy">
      </div>
      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Contract Period (Month)</label>
        <input type="text" v-model="data.contractPeriodMonth">
      </div>

      <div class="form-field">
        <label>Start Date</label>
        <DatePicker placeholder="01.10.2005" v-model="data.startDate"></DatePicker>
      </div>

      <div class="form-field">
        <label>Notice Period (Month)</label>
        <input type="text" v-model="data.noticePeriodMonth">
      </div>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Automatic Contract Renewal in Month</label>
        <input type="text" v-model="data.automaticContractRenewalInMonth">
      </div>

      <div class="form-field">
        <label>Contract Valid to (Calculated)</label>
        <DatePicker placeholder="01.10.2005" v-model="data.contractValidToCalculated"></DatePicker>
      </div>

      <div class="form-field">
        <label>Possible Termination Date</label>
        <input type="text" v-model="data.possibleTerminationDate">
      </div>
      <hr>
    </div>

    <div class="form-row">
      <div class="form-field">
        <label>Contract Terminated</label>
        <select v-model="data.contractTerminated">
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>

      <div class="form-field">
        <label>Notice Given On</label>
        <DatePicker placeholder="15.02.2018" v-model="data.noticeGivenOn"></DatePicker>
      </div>

      <div class="form-field">
        <label>Notice Given To</label>
        <DatePicker placeholder="31.12.2018" v-model="data.noticeGivenTo"></DatePicker>
      </div>

      <hr>
    </div>

    <div class="form-row">
      <div class="form-field col-2">
        <label>Contract Term Comment</label>
        <textarea v-model="data.contractTermComment"></textarea>
      </div>
    </div>
  </FormCard>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FormCard from '@/components/FormCard.vue';
import DatePicker from '@/components/DatePicker.vue';
import { Contract } from '@/services/api/models/supplier/contract';
import * as api from '@/services/api';

@Component({
  components: { FormCard, DatePicker },
})
export default class extends Vue {
  data = new Contract();

  save() {
    api.supplier.postContract(this.data);
  }
}
</script>

<style lang="scss" scoped>
</style>
