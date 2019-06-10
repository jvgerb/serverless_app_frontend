<template>
  <ListPageWrap :headers="headers" :items="items" :loading="loading">
    <template v-slot:filter-template>
      <div class="form-field">
        <select v-model="manufacturer" @change="update">
          <option value>Manufacturer</option>
          <option v-for="option in manufacturers" :value="option" :key="option">{{ option }}</option>
        </select>
        <div class="arrow-divider"></div>
      </div>
      <div class="form-field">
        <select v-model="designationType" @change="update">
          <option value>Designation Type</option>
          <option v-for="option in designationTypes" :value="option" :key="option">{{ option }}</option>
        </select>
        <div class="arrow-divider"></div>
      </div>
      <div class="form-field">
        <select v-model="distributionBlock" @change="update">
          <option value>Distribution Block</option>
          <option v-for="option in distributionBlocks" :value="option" :key="option">{{ option }}</option>
        </select>
        <div class="arrow-divider"></div>
      </div>
    </template>
    <template v-slot:table-template="slotScope">
      <td>{{ slotScope.props.item['manufacturer'] }}</td>
      <td>{{ slotScope.props.item['designation'] }}</td>
      <td>{{ slotScope.props.item['serialNumber'] }}</td>
      <td>
        <i class="icon-calendar"></i>
        {{ slotScope.props.item['purchaseDate'] }}
      </td>
      <td>{{ slotScope.props.item['warrantyUntil'] }}</td>
      <td>{{ slotScope.props.item['blockType'] }}</td>
      <td>{{ slotScope.props.item['netPurchasePrice'] }}</td>

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
export default class extends Vue {
  loading = false;
  manufacturer = '';
  manufacturers: any[] = [];
  designationType = '';
  designationTypes: any[] = [];
  distributionBlock = '';
  distributionBlocks: any[] = [];

  headers = [
    { text: 'Manufacturer', value: 'manufacturer' },
    { text: 'Designation', value: 'designation' },
    { text: 'Serial Number', value: 'serialNumber' },
    { text: 'Purchase Date', value: 'purchaseDate' },
    { text: 'Warranty Until', value: 'warrantyUntil' },
    { text: 'Block Type', value: 'blockType' },
    { text: 'Net purchase Price', value: 'netPurchasePrice' },
    { text: 'Action', value: 'action' },
  ];

  items = [];

  async update() {
    this.loading = true;
    this.items = await api.pod.getDistributionBlockList(
      this.manufacturer,
      this.designationType,
      this.distributionBlock
    );
    this.loading = false;
  }

  async created() {
    await this.update();
    this.manufacturers = [
      ...new Set(this.items.map((x: any) => x.data.component_manufacturer)),
    ];
    this.designationTypes = [
      ...new Set(
        this.items.map((x: any) => x.data.component_base_info.type_designation)
      ),
    ];
    this.distributionBlocks = [
      ...new Set(
        this.items.map(
          (x: any) => x.data.distribution_block_info.distribution_block_type
        )
      ),
    ];
  }
}
</script>
