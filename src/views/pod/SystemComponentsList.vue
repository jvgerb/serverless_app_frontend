<template>
  <ListPageWrap :headers="headers" :items="items" :loading="loading">
    <template v-slot:filter-template>
      <div class="form-field">
      <select v-model="buildingId" @change="update">
        <option value="">Building ID</option>
        <option v-for="option in buildingIds" :value="option" :key="option">{{ option }}</option>
      </select>
      <div class="arrow-divider"></div>
    </div><div class="form-field">
      <select v-model="podId" @change="update">
        <option value="">POD ID</option>
        <option v-for="option in podIds" :value="option" :key="option">{{ option }}</option>
      </select>
      <div class="arrow-divider"></div>
    </div><div class="form-field">
      <select v-model="networkId" @change="update">
        <option value="">Network ID</option>
        <option v-for="option in networkIds" :value="option" :key="option">{{ option }}</option>
      </select>
      <div class="arrow-divider"></div>
    </div>
    </template>
    <template v-slot:table-template="slotScope">
      <td>
      {{ slotScope.props.item['component'] }}
    </td>
<td>
      {{ slotScope.props.item['designation'] }}
    </td>
<td>
      {{ slotScope.props.item['serialNumber'] }}
    </td>
<td>
<i class="icon-calendar"></i>

      {{ slotScope.props.item['purchaseDate'] }}
    </td>
<td>
<i class="icon-calendar"></i>

      {{ slotScope.props.item['warrantyUntil'] }}
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
  buildingId = ''; buildingIds: any[] = [];
podId = ''; podIds: any[] = [];
networkId = ''; networkIds: any[] = [];

    headers = [
    { text: 'Component', value: 'component' },
{ text: 'Designation', value: 'designation' },
{ text: 'Serial Number', value: 'serialNumber' },
{ text: 'Purchase Date', value: 'purchaseDate' },
{ text: 'Warranty Until', value: 'warrantyUntil' },
{ text: 'Action', value: 'action' },

  ];

  items = [];

  async update() {
    this.loading = true;
    this.items = await api.pod.getSystemComponentsList(this.buildingId,this.podId,this.networkId);
    this.loading = false;
  }

  async created() {
    await this.update();
    this.buildingIds = [...new Set(this.items.map((x: any) => x.data.buildingId))];
this.podIds = [...new Set(this.items.map((x: any) => x.data.podId))];
this.networkIds = [...new Set(this.items.map((x: any) => x.data.networkId))];
  }
}
</script>

<style lang="scss" scoped>
td:nth-child(1) {
    color: var(--accent-color);
  }
</style>

