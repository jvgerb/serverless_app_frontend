<template>
  <ListPageWrap :headers="headers" :items="items">
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
          <option value="Heat">Type</option>
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
export default class RepresentativeList extends Vue {
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
  items = [...Array(100)].map((x, i) => ({
    number: i + 1,
    organizationName: 'Energicos GmBH',
    appointed: 'Yes',
    type: 'Lorem',
    street: 'Genslerstraße 84',
    streetNumber: 'Platz 18',
    zipCode: '13359',
    place: 'Ostbevern',
  }));
}
</script>

<style lang="scss" scoped>
td:nth-child(2) {
  color: var(--accent-color);
}
</style>
