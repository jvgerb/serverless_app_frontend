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
          <option value="Heat">Industry Sector</option>
        </select>
        <div class="arrow-divider"></div>
      </div>

      <div class="form-field">
        <select>
          <option value="Heat">Supplier Type</option>
        </select>
        <div class="arrow-divider"></div>
      </div>
    </template>
    <template v-slot:table-template="slotScope">
      <td>{{ slotScope.props.item['supplierID'] }}</td>
      <td>{{ slotScope.props.item['supplierName'] }}</td>
      <td>
        <i class="icon-internet"></i>
        {{ slotScope.props.item['homepage'] }}
      </td>
      <td>
        <Rating></Rating>
      </td>
      <td>
        <i class="icon-place"></i>
        {{ slotScope.props.item['place'] }}
      </td>
      <td>{{ slotScope.props.item['zipCode'] }}</td>
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
export default class SupplierList extends Vue {
  headers = [
    { text: 'Supplier ID', value: 'supplierID' },
    { text: 'Supplier’s Name', value: 'supplierName' },
    { text: 'Homepage', value: 'homepage' },
    { text: 'Quality of Relationship', value: 'qualityOfRelationship' },
    { text: 'Place', value: 'place' },
    { text: 'Zip Code', value: 'zipCode' },
    { text: 'Action', value: 'action', sortable: false },
  ];
  items = [...Array(100)].map((x, i) => ({
    supplierID: '001',
    supplierName: 'John Doe',
    homepage: 'http://www.name.ext',
    qualityOfRelationship: 'Genslerstraße 84',
    place: 'Prag',
    zipCode: '80808',
  }));
}
</script>

<style lang="scss" scoped>
td:nth-child(3) i {
  color: var(--accent-color);
}
</style>
