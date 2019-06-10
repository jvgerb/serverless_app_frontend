<template>
  <ListPageWrap :headers="headers" :items="items" :loading="loading">
    <template v-slot:filter-template>
      <div class="form-field">
        <select v-model="placeZip" @change="update">
          <option value>Place</option>
          <option v-for="option in placeZips" :value="option" :key="option">{{ option }}</option>
        </select>
        <i class="icon-place"></i>
        <div class="arrow-divider"></div>
      </div>

      <div class="form-field">
        <select v-model="industrySector" @change="update">
          <option value>Industry Sector</option>
          <option v-for="option in industrySectors" :value="option" :key="option">{{ option }}</option>
        </select>
        <div class="arrow-divider"></div>
      </div>

      <div class="form-field">
        <select v-model="supplierType" @change="update">
          <option value>Supplier Type</option>
          <option v-for="option in supplierTypes" :value="option" :key="option">{{ option }}</option>
        </select>
        <div class="arrow-divider"></div>
      </div>
    </template>
    <template v-slot:table-template="slotScope">
      <td>{{ slotScope.props.item['supplierId'] }}</td>
      <td>{{ slotScope.props.item['suppliersName'] }}</td>
      <td>
        <i class="icon-internet"></i>
        {{ slotScope.props.item['homepage'] }}
      </td>
      <td>
          <Rating v-model="slotScope.props.item.qualityOfRelationship" :readonly="true"></Rating>
      </td>
      <td>
        <i class="icon-place"></i>
        {{ slotScope.props.item['place'] }}
      </td>
      <td>{{ slotScope.props.item['zipCode'] }}</td>
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
import supplier from '../../services/api/supplier';

@Component({
  components: { ListPageWrap, FormCard, Rating },
})
export default class SupplierList extends Vue {
  loading = false;  placeZip = '';
  placeZips: any[] = [];
  industrySector = '';
  industrySectors: any[] = [];
  supplierType = '';
  supplierTypes: any[] = [];

  headers = [
    { text: 'Supplier ID', value: 'supplierId' },
    { text: 'Supplier’s Name', value: 'suppliersName' },
    { text: 'Homepage', value: 'homepage' },
    { text: 'Quality of Relationship', value: 'qualityOfRelationship' },
    { text: 'Place', value: 'place' },
    { text: 'Zip Code', value: 'zipCode' },
    { text: 'Action', value: 'action', sortable: false },
  ];
  items = [];

  async update() {
    this.loading = true;
    this.items = await api.supplier.getSupplierList(
      this.placeZip,
      this.industrySector,
      this.supplierType
    );
    this.loading = false;
  }

  async created() {
    await this.update();
    this.placeZips = [
      ...new Set(this.items.map((x: any) => x.data.supplier_address_search)),
    ];
    this.industrySectors = [
      ...new Set(this.items.map((x: any) => x.data.supplier_industry_sector)),
    ];
    this.supplierTypes = [
      ...new Set(this.items.map((x: any) => x.data.supplier_type)),
    ];
  }
}
</script>

<style lang="scss" scoped>
td:nth-child(3) i {
  color: var(--accent-color);
}
</style>