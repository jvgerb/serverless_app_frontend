<template>
  <ListPageWrap :headers="headers" :items="items" :loading="loading">
    <template v-slot:filter-template>
      <div class="form-field">
        <select v-model="buildingName" @change="update">
          <option value>Building Name</option>
          <option v-for="option in buildingNames" :value="option" :key="option">{{ option}}</option>
        </select>
        <div class="arrow-divider"></div>
      </div>

      <div class="form-field">
        <select v-model="category" @change="update">
          <option value>Category</option>
          <option v-for="option in categories" :value="option" :key="option">{{ option | capitalize }}</option>
        </select>
        <div class="arrow-divider"></div>
      </div>
    </template>
    <template v-slot:table-template="slotScope">
      <td style="color:var(--accent-color)">{{ slotScope.props.item['buildingId'] }}</td>
      <td
        v-for="(item, index) in headers.slice(1, -1)"
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
export default class BuildingList extends Vue {
  loading = false;

  buildingName = '';
  buildingNames: any[] = [];
  category = '';
  categories: any[] = [];

  headers = [
    { text: 'Building ID', value: 'buildingId' },
    { text: 'Building Name', value: 'buildingName' },
    { text: 'Category', value: 'category' },
    { text: 'Year', value: 'year' },
    { text: 'Number of Entrances', value: 'numberOfEntrances' },
    { text: 'Number of Floors', value: 'numberOfFloors' },
    { text: 'Number of Apartments', value: 'numberOfApartments' },
    { text: 'Action', value: 'action', sortable: false },
  ];
  items = [];

  async update() {
    this.loading = true;
    this.items = await api.building.getBuildingList(
      this.buildingName,
      this.category
    );
    this.loading = false;
  }

  async created() {
    await this.update();
    this.buildingNames = [
      ...new Set(this.items.map((x: any) => x.data.building_name)),
    ];

    this.categories = [
      ...new Set(this.items.map((x: any) => x.data.building_category)),
    ];
  }
}
</script>

<style lang="scss" scoped>
</style>