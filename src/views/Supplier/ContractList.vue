<template>
  <ListPageWrap :headers="headers" :items="items">
    <template v-slot:filter-template>
      <div class="form-field">
        <select>
          <option value="Heat">Contract Product</option>
        </select>
        <i class="icon-warmth-heat"></i>
        <div class="arrow-divider"></div>
      </div>

      <div class="form-field">
        <select>
          <option value="Heat">Type</option>
        </select>
        <div class="arrow-divider"></div>
      </div>

      <div class="form-field">
        <select>
          <option value="Heat">Valid To</option>
        </select>
        <i class="icon-calendar"></i>
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
export default class ContractList extends Vue {
  headers = [
    { text: 'Contract ID', value: 'contractID' },
    { text: 'Contract Period', value: 'contractPeriod' },
    { text: 'Signed On', value: 'signedOn' },
    { text: 'Signed By', value: 'signedBy' },
    { text: 'Consumption Unit', value: 'consumptionUnit' },
    { text: 'Notice Given On', value: 'noticeGivenOn' },
    { text: 'Notice Given To', value: 'noticeGivenTo' },
    { text: 'Capacity Start Value', value: 'capacityStartValue' },
    { text: 'Action', value: 'action', sortable: false },
  ];
  items = [...Array(100)].map((x, i) => ({
    contractID: 'ENN-000123',
    contractPeriod: '60',
    signedOn: '15.11.2008',
    signedBy: 'John Doe',
    consumptionUnit: 'EUR/MWh',
    noticeGivenOn: '15.2.2018',
    noticeGivenTo: '31.12.2018',
    capacityStartValue: '340',
  }));
}
</script>

<style lang="scss" scoped>
td:nth-child(2) {
  color: var(--accent-color);
}
</style>
