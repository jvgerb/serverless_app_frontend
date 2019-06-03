<template>
  <ListPageWrap :headers="headers" :items="items" :loading="loading">
    <template v-slot:filter-template>
      <div class="form-field">
        <select>
          <option value="Heat">POD ID</option>
        </select>
        <div class="arrow-divider"></div>
      </div>
      <div class="form-field">
        <select>
          <option value="Heat">Report Category</option>
        </select>
        <div class="arrow-divider"></div>
      </div>
      <div class="form-field">
        <select>
          <option value="Heat">Date</option>
        </select>
        <i class="icon-calendar"></i>

        <div class="arrow-divider"></div>
      </div>
    </template>
    <template v-slot:table-template="slotScope">
      <td>{{ slotScope.props.item['pODID'] }}</td>
      <td>
        <i class="icon-calendar"></i>
        {{ slotScope.props.item['reportCreatedOn'] }}
      </td>
      <td>{{ slotScope.props.item['createdBy'] }}</td>
      <td>{{ slotScope.props.item['reference'] }}</td>
      <td>{{ slotScope.props.item['reportApprovedBy'] }}</td>
      <td>
        <i class="icon-calendar"></i>
        {{ slotScope.props.item['approvedOn'] }}
      </td>
      <td>{{ slotScope.props.item['actionRequired'] }}</td>
      <td>
        <i class="icon-calendar"></i>
        {{ slotScope.props.item['actionDue'] }}
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

@Component({
  components: { ListPageWrap, FormCard, Rating },
})
export default class extends Vue {
  headers = [
    { text: 'POD ID', value: 'pODID' },
    { text: 'Report Created On', value: 'reportCreatedOn' },
    { text: 'Created by', value: 'createdBy' },
    { text: 'Reference', value: 'reference' },
    { text: 'Report Approved By', value: 'reportApprovedBy' },
    { text: 'Approved On', value: 'approvedOn' },
    { text: 'Action Required', value: 'actionRequired' },
    { text: 'Action Due', value: 'actionDue' },
    { text: 'Action', value: 'action' },
  ];
  items = [...Array(100)].map((x, i) => ({
    pODID: 'POD-2344',
    reportCreatedOn: '20.3.2004',
    createdBy: 'John Doe',
    reference: 'Monthly Inspection Supplier',
    reportApprovedBy: 'John doe',
    approvedOn: '31.12.2004',
    actionRequired: 'Change Filter Pump',
    actionDue: '31.12.2004',
  }));
}
</script>

<style lang="scss" scoped>
td:nth-child(1) {
  color: var(--accent-color);
}
</style>

