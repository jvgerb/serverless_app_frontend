<template>
  <ListPageWrap :headers="headers" :items="items" :loading="loading">
    <template v-slot:filter-template>
      <div class="form-field">
        <select>
          <option value="Heat">Place</option>
        </select>
        <i class="icon-place"></i>

        <div class="arrow-divider"></div>
      </div>
      <div class="form-field">
        <select>
          <option value="Heat">Building ID</option>
        </select>
        <div class="arrow-divider"></div>
      </div>
    </template>
    <template v-slot:table-template="slotScope">
      <td>{{ slotScope.props.item['pODID'] }}</td>
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

@Component({
  components: { ListPageWrap, FormCard, Rating },
})
export default class extends Vue {
  loading = false;
  headers = [
    { text: 'POD ID', value: 'pODID' },
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
  items = [...Array(100)].map((x, i) => ({
    pODID: 'POD_2501',
    place: 'Berlin',
    entranceZipCode: '13469',
    streetAddress: 'Oraniendamm',
    additionalAddressAttribute: 'Side Entrance',
    entranceStreetNumber: '6',
  }));
}
</script>

<style lang="scss" scoped>
td:nth-child(1) {
  color: var(--accent-color);
}
</style>

