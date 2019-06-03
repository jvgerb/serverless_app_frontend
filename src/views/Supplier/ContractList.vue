<template>
  <ListPageWrap :headers="headers" :items="items" :loading="loading">
    <template v-slot:filter-template>
      <div class="form-field">
        <select v-model="product" @change="update">
          <option value>Product</option>
          <option v-for="option in products" :value="option" :key="option">{{ option }}</option>
        </select>
        <div class="arrow-divider"></div>
      </div>

      <div class="form-field">
        <select v-model="categoryType" @change="update">
          <option value>Category Type</option>
          <option v-for="option in categoryTypes" :value="option" :key="option">{{ option }}</option>
        </select>
        <div class="arrow-divider"></div>
      </div>
    </template>
    <template v-slot:table-template="slotScope">
      <td>{{ slotScope.props.item['contractID'] }}</td>
      <td>{{ slotScope.props.item['product'] }}</td>
      <td>
        <i class="icon-calendar"></i>
        {{ slotScope.props.item['signedOn'] }}
      </td>
      <td>{{ slotScope.props.item['signedBy'] }}</td>
      <td>{{ slotScope.props.item['contractPeriodMonth'] }}</td>
      <td>
        <i class="icon-calendar"></i>
        {{ slotScope.props.item['validTo'] }}
      </td>
      <td>{{ slotScope.props.item['possibleTerminationDate'] }}</td>
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
  loading = false;  product = '';
  products: any[] = [];
  categoryType = '';
  categoryTypes: any[] = [];

  headers = [
    { text: 'Contract ID', value: 'contractID' },
    { text: 'Product', value: 'product' },
    { text: 'Signed On', value: 'signedOn' },
    { text: 'Signed By', value: 'signedBy' },
    { text: 'Contract Period (Month)', value: 'contractPeriodMonth' },
    { text: 'Valid To', value: 'validTo' },
    { text: 'Possible Termination Date', value: 'possibleTerminationDate' },
    { text: 'Action', value: 'action', sortable: false },
  ];

  items = [];

  async update() {
    this.loading = true;
    this.items = (await api.supplier.getContractList(
      this.product,
      this.categoryType
    )).map((x: any, i: number) => ({
      number: (i + 1).toString().padStart(3, '0'),
      ...x,
    }));
    this.loading = false;
  }

  async created() {
    await this.update();
    this.products = [
      ...new Set(this.items.map((x: any) => x.data.contract_product)),
    ];

    this.categoryTypes = [
      ...new Set(
        this.items.map((x: any) => x.data.contract_product_category_type)
      ),
    ];
  }
}
</script>

<style lang="scss" scoped>
td:nth-child(1) {
  color: var(--accent-color);
}
</style>