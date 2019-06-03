<template>
  <ListPageWrap :headers="headers" :items="items" :loading="loading">
    <template v-slot:filter-template>
      <div class="form-field">
        <select>
          <option value="Heat">Burner ID</option>
        </select>
        <div class="arrow-divider"></div>
      </div>
      <div class="form-field">
        <select>
          <option value="Heat">Operation Mode</option>
        </select>
        <div class="arrow-divider"></div>
      </div>
      <div class="form-field">
        <select>
          <option value="Heat">Capacity</option>
        </select>
        <div class="arrow-divider"></div>
      </div>
    </template>
    <template v-slot:table-template="slotScope">
      <td>{{ slotScope.props.item['supplierID'] }}</td>
      <td>
        <i class="icon-calendar"></i>
        {{ slotScope.props.item['repairDate'] }}
      </td>
      <td>{{ slotScope.props.item['maintenanceInvID'] }}</td>
      <td>
        <i class="icon-checkmark" style="color:#a1c55b"></i>
        {{ slotScope.props.item['repairReportFiled'] }}
      </td>
      <td>{{ slotScope.props.item['reportApprovedBy'] }}</td>
      <td>
        <i class="icon-calendar"></i>
        {{ slotScope.props.item['approvedOn'] }}
      </td>
      <td>{{ slotScope.props.item['repairReason'] }}</td>
      <td>{{ slotScope.props.item['repairCost'] }}</td>

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

@Component({
  components: { ListPageWrap, FormCard, Rating },
})
export default class extends Vue {
  loading = false;
  headers = [
    { text: 'Supplier ID', value: 'supplierID' },
    { text: 'Repair Date', value: 'repairDate' },
    { text: 'Maintenance inv ID', value: 'maintenanceInvID' },
    { text: 'Repair Report Filed', value: 'repairReportFiled' },
    { text: 'Report Approved By', value: 'reportApprovedBy' },
    { text: 'Approved On', value: 'approvedOn' },
    { text: 'Repair Reason', value: 'repairReason' },
    { text: 'Repair Cost', value: 'repairCost' },
    { text: 'Action', value: 'action' },
  ];
  items = [...Array(100)].map((x, i) => ({
    supplierID: 'SKM',
    repairDate: 'placeholder',
    maintenanceInvID: '215',
    repairReportFiled: 'Yes',
    reportApprovedBy: 'Worker',
    approvedOn: '31.12.2004',
    repairReason: 'Malfunction',
    repairCost: '200€',
  }));
}
</script>

<style lang="scss" scoped>
td:nth-child(1) {
  color: var(--accent-color);
}
</style>

