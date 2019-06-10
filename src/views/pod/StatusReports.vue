<template>
  <ListPageWrap :headers="headers" :items="items" :loading="loading">
    <template v-slot:filter-template>
      <div class="form-field">
      <select v-model="podId" @change="update">
        <option value="">POD ID</option>
        <option v-for="option in podIds" :value="option" :key="option">{{ option }}</option>
      </select>
      <div class="arrow-divider"></div>
    </div><div class="form-field">
      <select v-model="reportCategory" @change="update">
        <option value="">Report Category</option>
        <option v-for="option in reportCategories" :value="option" :key="option">{{ option }}</option>
      </select>
      <div class="arrow-divider"></div>
    </div><div class="form-field">
      <select v-model="date" @change="update">
        <option value="">Date</option>
        <option v-for="option in dates" :value="option" :key="option">{{ option }}</option>
      </select>
<i class="icon-calendar"></i>

      <div class="arrow-divider"></div>
    </div>
    </template>
    <template v-slot:table-template="slotScope">
      <td>
      {{ slotScope.props.item['podId'] }}
    </td>
<td>
<i class="icon-calendar"></i>

      {{ slotScope.props.item['reportCreatedOn'] }}
    </td>
<td>
      {{ slotScope.props.item['createdBy'] }}
    </td>
<td>
      {{ slotScope.props.item['reference'] }}
    </td>
<td>
      {{ slotScope.props.item['reportApprovedBy'] }}
    </td>
<td>
<i class="icon-calendar"></i>

      {{ slotScope.props.item['approvedOn'] }}
    </td>
<td>
      {{ slotScope.props.item['actionRequired'] }}
    </td>
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
import * as api from '@/services/api';

@Component({
  components: { ListPageWrap, FormCard, Rating },
})
export default class extends Vue {
  loading = false;
  podId = ''; podIds: any[] = [];
reportCategory = ''; reportCategories: any[] = [];
date = ''; dates: any[] = [];

    headers = [
    { text: 'POD ID', value: 'podId' },
{ text: 'Report Created On', value: 'reportCreatedOn' },
{ text: 'Created by', value: 'createdBy' },
{ text: 'Reference', value: 'reference' },
{ text: 'Report Approved By', value: 'reportApprovedBy' },
{ text: 'Approved On', value: 'approvedOn' },
{ text: 'Action Required', value: 'actionRequired' },
{ text: 'Action Due', value: 'actionDue' },
{ text: 'Action', value: 'action' },

  ];

  items = [];

  async update() {
    this.loading = true;
    this.items = await api.pod.getStatusReports(this.podId,this.reportCategory,this.date);
    this.loading = false;
  }

  async created() {
    await this.update();
    this.podIds = [...new Set(this.items.map((x: any) => x.data.podId))];
this.reportCategories = [...new Set(this.items.map((x: any) => x.data.reportCategory))];
this.dates = [...new Set(this.items.map((x: any) => x.data.date))];
  }
}
</script>

<style lang="scss" scoped>
td:nth-child(1) {
    color: var(--accent-color);
  }
</style>

