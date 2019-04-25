<template>
  <ListPageWrap :headers="headers" :items="items">
    <template v-slot:filter-template>
      <div class="form-field">
        <select>
          <option value="Heat">Product</option>
        </select>
        <div class="arrow-divider"></div>
      </div>

      <div class="form-field">
        <select>
          <option value="Heat">Category Type</option>
        </select>
        <div class="arrow-divider"></div>
      </div>
    </template>
    <template v-slot:table-template="slotScope">
      <td>{{ slotScope.props.item['contractID'] }}</td>
      <td>
        <i class="icon-internet"></i>
        {{ slotScope.props.item['product'] }}
      </td>
      <td>
        <i class="icon-calendar"></i>
        {{ slotScope.props.item['signedOn'] }}
      </td>
      <td>{{ slotScope.props.item['signedBy'] }}</td>
      <td>{{ slotScope.props.item['contractPeriodMonth'] }}</td>
      <td>
        <i class="icon-calendar"></i>
        {{ slotScope.props.item['validTo'] }}
      </td>
      <td>{{ slotScope.props.item['possibleTerminationDate'] }}</td>
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
export default class ContractList extends Vue {
  headers = [
    { text: 'Contract ID', value: 'contractID' },
    { text: 'Product', value: 'product' },
    { text: 'Signed On', value: 'signedOn' },
    { text: 'Signed By', value: 'signedBy' },
    { text: 'Contract Period (Month)', value: 'contractPeriodMonth' },
    { text: 'Valid To', value: 'validTo' },
    { text: 'Possible Termination Date', value: 'possibleTerminationDate' },
    { text: 'Action', value: 'action', sortable: false },
  ];
  items = [...Array(100)].map((x, i) => ({
    contractID: 'ENN-000123',
    product: 'Heat',
    signedOn: '15.11.2008',
    signedBy: 'John Doe, ABC LLP, Berlin',
    contractPeriodMonth: '60',
    validTo: '15.11.2008',
    possibleTerminationDate: 'End of Year',
  }));
}
</script>

<style lang="scss" scoped>
td:nth-child(1) {
  color: var(--accent-color);
}
</style>
