<template>
  <ListPageWrap :headers="headers" :items="items" :loading="loading">
    <template v-slot:filter-template>
      <div class="form-field">
        <select v-model="product" @change="update">
          <option value>Contract Product</option>
          <option v-for="option in products" :value="option" :key="option">{{ option }}</option>
        </select>
        <i class="icon-warmth-heat"></i>
        <div class="arrow-divider"></div>
      </div>

      <div class="form-field">
        <select v-model="partnerType" @change="update">
          <option value>Type</option>
          <option v-for="option in partnerTypes" :value="option" :key="option">{{ option }}</option>
        </select>
        <div class="arrow-divider"></div>
      </div>

      <div class="form-field">
        <select>
          <option value="Heat">Valid To</option>
        </select>
        <i class="icon-calendar"></i>
        <div class="arrow-divider"></div>
      </div>
    </template>
    <template v-slot:table-template="slotScope">
      <td
        v-for="(item, index) in headers.slice(0, -1)"
        :key="index"
      >{{ slotScope.props.item[item.value] }}</td>
      <td class="actions">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <i class="icon-edit" v-on="on"></i>
          </template>
          <span>Edit</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <i class="icon-delete" v-on="on"></i>
          </template>
          <span>Delete</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <i class="icon-view-more" v-on="on"></i>
          </template>
          <span>More</span>
        </v-tooltip>
      </td>
    </template>
  </ListPageWrap>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ListPageWrap from '@/components/ListPageWrap.vue';
import FormCard from '@/components/FormCard.vue';
import Rating from '@/components/Rating.vue';
import * as api from '@/services/api';
@Component({
  components: { ListPageWrap, FormCard, Rating },
})
export default class ContractList extends Vue {
  loading = false;
  product = '';
  products: any[] = [];
  partnerTypes: any[] = [];
  partnerType = '';

  headers = [
    { text: 'Contract ID', value: 'contractId' },
    { text: 'Contract Period', value: 'contractPeriod' },
    { text: 'Signed On', value: 'signedOn' },
    { text: 'Signed By', value: 'signedBy' },
    { text: 'Consumption Unit', value: 'consumptionUnit' },
    { text: 'Notice Given On', value: 'noticeGivenOn' },
    { text: 'Notice Given To', value: 'noticeGivenTo' },
    { text: 'Capacity Start Value', value: 'capacityStartValue' },
    { text: 'Action', value: 'action', sortable: false },
  ];

  items = [];

  async update() {
    this.loading = true;
    this.items = await api.customer.getContractList(
      this.product,
      this.partnerType,
      ''
    );
    this.loading = false;
  }

  async created() {
    await this.update();
    this.products = [
      ...new Set(this.items.map((x: any) => x.data.contract_product)),
    ];

    this.partnerTypes = [
      ...new Set(this.items.map((x: any) => x.data.contract_partner_type)),
    ];
  }
}
</script>

<style lang="scss" scoped>
td:nth-child(2) {
  color: var(--accent-color);
}
</style>