<template>
  <ListPageWrap :headers="headers" :items="items" :loading="loading">
    <template v-slot:filter-template>
      <div class="form-field">
        <select v-model="place" @change="update">
          <option value>Place</option>
          <option v-for="option in places" :value="option" :key="option">{{ option }}</option>
        </select>
        <i class="icon-place"></i>

        <div class="arrow-divider"></div>
      </div>
      <div class="form-field">
        <select v-model="buildingId" @change="update">
          <option value>Building ID</option>
          <option v-for="option in buildingIds" :value="option" :key="option">{{ option }}</option>
        </select>
        <div class="arrow-divider"></div>
      </div>
    </template>
    <template v-slot:table-template="slotScope">
      <td>{{ slotScope.props.item['podId'] }}</td>
      <td>{{ slotScope.props.item['place'] }}</td>
      <td>{{ slotScope.props.item['entranceZipCode'] }}</td>
      <td>{{ slotScope.props.item['streetAddress'] }}</td>
      <td>{{ slotScope.props.item['additionalAddressAttribute'] }}</td>
      <td>{{ slotScope.props.item['entranceStreetNumber'] }}</td>

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
  place = '';
  places: any[] = [];
  buildingId = '';
  buildingIds: any[] = [];

  headers = [
    { text: 'POD ID', value: 'podId' },
    { text: 'Place', value: 'place' },
    { text: 'Entrance Zip Code', value: 'entranceZipCode' },
    { text: 'Street Address', value: 'streetAddress' },
    {
      text: 'Additional Address Attribute',
      value: 'additionalAddressAttribute',
    },
    { text: 'Entrance Street Number', value: 'entranceStreetNumber' },
    { text: 'Action', value: 'action' },
  ];

  items = [];

  async update() {
    this.loading = true;
    this.items = await api.pod.getPODList(this.place, this.buildingId);
    this.loading = false;
  }

  async created() {
    await this.update();
    this.places = [...new Set(this.items.map((x: any) => x.data.place))];
    this.buildingIds = [
      ...new Set(this.items.map((x: any) => x.data.buildingId)),
    ];
  }
}
</script>

<style lang="scss" scoped>
td:nth-child(1) {
  color: var(--accent-color);
}
</style>

