<template>
  <ListPageWrap :headers="headers" :items="items">
    <template v-slot:filter-template>
      <div class="form-field">
        <select>
          <option value="Heat">Location</option>
        </select>
        <i class="icon-location"></i>
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
        <Rating></Rating>
      </td>
      <td class="actions">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <i class="icon-billing-address" v-on="on"></i>
          </template>
          <span>Billing Addres</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <i class="icon-delivery-address" v-on="on"></i>
          </template>
          <span>Delivery Addres</span>
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
export default class CustomerList extends Vue {
  headers = [
    { text: 'Customer ID', value: 'customerId' },
    { text: 'Customer Type', value: 'customerType' },
    { text: 'Customer Organisation Name', value: 'customerOrganisationName' },
    { text: 'Customer’s Name', value: 'customersName' },
    { text: 'Relationship Quality', value: 'relationshipQuality' },
    { text: 'Action', value: 'action', sortable: false },
  ];
  items = [...Array(100)].map((x, i) => ({
    customerId: i + 1,
    customerType: 'Type 1',
    customerOrganisationName: 'K57',
    customersName: 'Baer&Ollenroth',
  }));
}
</script>

<style lang="scss" scoped>
.actions i {
  color: var(--icon-color) !important;
}
</style>
