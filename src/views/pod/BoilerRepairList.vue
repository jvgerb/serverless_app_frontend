<template>
  <ListPageWrap :headers="headers" :items="items" :loading="loading">
    <template v-slot:filter-template>
      <div class="form-field">
      <select v-model="dateRepaired" @change="update">
        <option value="">Date Repaired</option>
        <option v-for="option in dateRepaireds" :value="option" :key="option">{{ option }}</option>
      </select>
      <div class="arrow-divider"></div>
    </div><div class="form-field">
      <select v-model="boilerType" @change="update">
        <option value="">Boiler Type</option>
        <option v-for="option in boilerTypes" :value="option" :key="option">{{ option }}</option>
      </select>
      <div class="arrow-divider"></div>
    </div><div class="form-field">
      <select v-model="boilerId" @change="update">
        <option value="">Boiler ID</option>
        <option v-for="option in boilerIds" :value="option" :key="option">{{ option }}</option>
      </select>
      <div class="arrow-divider"></div>
    </div>
    </template>
    <template v-slot:table-template="slotScope">
      <td>
<i class="icon-calendar"></i>

      {{ slotScope.props.item['repairDate'] }}
    </td>
<td>
      {{ slotScope.props.item['supplierId'] }}
    </td>
<td>
      {{ slotScope.props.item['maintenanceInvId'] }}
    </td>
<td>
<i class="icon-checkmark" style="color:#a1c55b"></i>

      {{ slotScope.props.item['repairReportFiled'] }}
    </td>
<td>
      {{ slotScope.props.item['reportApprovedBy'] }}
    </td>
<td>
<i class="icon-calendar"></i>

      {{ slotScope.props.item['approvedOn'] }}
    </td>
<td>
      {{ slotScope.props.item['repairReason'] }}
    </td>
<td>
      {{ slotScope.props.item['repairCost'] }}
    </td>

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
  dateRepaired = ''; dateRepaireds: any[] = [];
boilerType = ''; boilerTypes: any[] = [];
boilerId = ''; boilerIds: any[] = [];

    headers = [
    { text: 'Repair Date', value: 'repairDate' },
{ text: 'Supplier ID', value: 'supplierId' },
{ text: 'Maintenance inv ID', value: 'maintenanceInvId' },
{ text: 'Repair Report Filed', value: 'repairReportFiled' },
{ text: 'Report Approved By', value: 'reportApprovedBy' },
{ text: 'Approved On', value: 'approvedOn' },
{ text: 'Repair Reason', value: 'repairReason' },
{ text: 'Repair Cost', value: 'repairCost' },
{ text: 'Action', value: 'action' },

  ];

  items = [];

  async update() {
    this.loading = true;
    this.items = await api.pod.getBoilerRepairList(this.dateRepaired,this.boilerType,this.boilerId);
    this.loading = false;
  }

  async created() {
    await this.update();
    this.dateRepaireds = [...new Set(this.items.map((x: any) => x.data.dateRepaired))];
this.boilerTypes = [...new Set(this.items.map((x: any) => x.data.boilerType))];
this.boilerIds = [...new Set(this.items.map((x: any) => x.data.boilerId))];
  }
}
</script>

<style lang="scss" scoped>
td:nth-child(2) {
    color: var(--accent-color);
  }
</style>

