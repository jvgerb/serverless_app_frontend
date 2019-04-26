<template>
  <ListPageWrap :headers="headers" :items="items">
    <template v-slot:filter-template>
      <div class="form-field">
        <select>
          <option value="Heat">Building Name</option>
        </select>
        <div class="arrow-divider"></div>
      </div>

      <div class="form-field">
        <select>
          <option value="Heat">Category</option>
        </select>
        <div class="arrow-divider"></div>
      </div>
    </template>
    <template v-slot:table-template="slotScope">
      <td
        v-for="(item, index) in headers.slice(0, -1)"
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
    </table-template>
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
export default class BuildingList extends Vue {
  headers = [
    { text: 'Building ID', value: 'buildingID' },
    { text: 'Building Name', value: 'buildingName' },
    { text: 'Category', value: 'category' },
    { text: 'Year', value: 'year' },
    { text: 'Number of Entrances', value: 'numberOfEntrances' },
    { text: 'Number of Floors', value: 'numberOfFloors' },
    { text: 'Number of Apartments', value: 'numberOfApartments' },
    { text: 'Action', value: 'action', sortable: false },
  ];
  items = [...Array(100)].map((x, i) => ({
    buildingID: '342434',
    buildingName: 'Steinberg',
    category: 'Apartment Building',
    year: '1980',
    numberOfEntrances: '2',
    numberOfFloors: '5',
    numberOfApartments: '32',
  }));
}
</script>

<style lang="scss" scoped>
</style>
