<template>
  <ListPageWrap :headers="headers" :items="items">
    <template v-slot:filter-template>
      <div class="form-field">
        <select>
          <option value="Heat">Street Number</option>
        </select>
        <div class="arrow-divider"></div>
      </div>

      <div class="form-field">
        <select>
          <option value="Heat">Entrance ID</option>
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
export default class EntranceList extends Vue {
  headers = [
    { text: 'Entrance ID', value: 'entranceID' },
    { text: 'Entrance Description', value: 'entranceDescription' },
    { text: 'Entrance Street', value: 'entranceStreet' },
    { text: 'Entrance Street Number', value: 'entranceStreetNumber' },
    { text: 'Entrance Zip Code', value: 'entranceZipCode' },
    { text: 'Entrance Place', value: 'entrancePlace' },
    { text: 'Action', value: 'action', sortable: false },
  ];
  items = [...Array(100)].map((x, i) => ({
    entranceID: 'entrance_1',
    entranceDescription: 'Side entrance',
    entranceStreet: 'Oraniendamm',
    entranceStreetNumber: '8',
    entranceZipCode: '13469',
    entrancePlace: 'Berlin',
  }));
}
</script>

<style lang="scss" scoped>
</style>
