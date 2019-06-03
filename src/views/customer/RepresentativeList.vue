<template>
  <ListPageWrap :headers="headers" :items="items" :loading="loading">
    <template v-slot:filter-template>
      <div class="form-field">
        <select v-model="placeZip" @change="update">
          <option value>Place</option>
          <option v-for="place in places" :value="place" :key="place">{{ place }}</option>
        </select>
        <i class="icon-location"></i>
        <div class="arrow-divider"></div>
      </div>

      <div class="form-field">
        <select v-model="type" @change="update">
          <option value>Type</option>
          <option value="contact">Contact</option>
          <option value="company">Company</option>
        </select>
        <div class="arrow-divider"></div>
      </div>
    </template>
    <template v-slot:table-template="slotScope">
      <td
        v-for="(item, index) in headers.slice(0, -2)"
        :key="index"
      >{{ slotScope.props.item[item.value] }}</td>
      <td>
        <i class="icon-place"></i>
        {{ slotScope.props.item['place'] }}
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
export default class RepresentativeList extends Vue {
  loading = false;  placeZip = '';
  type = '';

  places: any[] = [];

  headers = [
    { text: '#', value: 'number' },
    { text: 'Organization Name', value: 'organizationName' },
    { text: 'Appointed', value: 'appointed' },
    { text: 'Type', value: 'type' },
    { text: 'Street', value: 'street' },
    { text: 'Street Number', value: 'streetNumber' },
    { text: 'Zip Code', value: 'zipCode' },
    { text: 'Place', value: 'place' },
    { text: 'Action', value: 'action', sortable: false },
  ];
  items = [];

  async update() {
    this.loading = true;
    this.items = (await api.customer.getRepresentativeList(
      this.placeZip,
      this.type
    )).map((x: any, i: number) => ({
      number: (i + 1).toString().padStart(3, '0'),
      ...x,
    }));
    this.loading = false;
  }

  async created() {
    await this.update();
    this.places = this.items.map(
      (x: any) => x.data.customer_delivery_address_search
    );
    this.places = [...new Set(this.places)];
  }
}
</script>

<style lang="scss" scoped>
td:nth-child(2) {
  color: var(--accent-color);
}
</style>