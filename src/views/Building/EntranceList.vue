<template>
  <ListPageWrap :headers="headers" :items="items" :loading="loading">
    <template v-slot:filter-template>
      <div class="form-field">
        <select v-model="street" @change="update">
          <option value>Street</option>
          <option v-for="option in streets" :value="option" :key="option">{{ option }}</option>
        </select>
        <div class="arrow-divider"></div>
      </div>

      <div class="form-field">
        <select v-model="entranceId" @change="update">
          <option value>Entrance ID</option>
          <option v-for="option in entranceIds" :value="option" :key="option">{{ option }}</option>
        </select>
        <div class="arrow-divider"></div>
      </div>
    </template>
    <template v-slot:table-template="slotScope">
      <td style="color:var(--accent-color)">{{ slotScope.props.item['entranceId'] }}</td>
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
export default class EntranceList extends Vue {
  loading = false;

  street = '';
  streets: any[] = [];
  entranceId = '';
  entranceIds: any[] = [];

  headers = [
    { text: 'Entrance ID', value: 'entranceId' },
    { text: 'Entrance Description', value: 'entranceDescription' },
    { text: 'Entrance Street', value: 'entranceStreet' },
    { text: 'Entrance Street Number', value: 'entranceStreetNumber' },
    { text: 'Entrance Zip Code', value: 'entranceZipCode' },
    { text: 'Entrance Place', value: 'entrancePlace' },
    { text: 'Action', value: 'action', sortable: false },
  ];

  items = [];

  async update() {
    this.loading = true;
    this.items = await api.building.getEntranceList(
      this.street,
      this.entranceId
    );
    this.loading = false;
  }

  async created() {
    await this.update();
    this.streets = [
      ...new Set(this.items.map((x: any) => x.data.entrance_street)),
    ];

    this.entranceIds = [
      ...new Set(this.items.map((x: any) => x.data.entrance_id)),
    ];
  }
}
</script>

<style lang="scss" scoped>
</style>