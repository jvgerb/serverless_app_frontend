<template>
  <ListPageWrap :headers="headers" :items="items" :loading="loading">
    <template v-slot:filter-template>
      <div class="form-field">
        <select v-model="functionName" @change="update">
          <option value>Function</option>
          <option v-for="option in functionNames" :value="option" :key="option">{{ option }}</option>
        </select>
        <div class="arrow-divider"></div>
      </div>
    </template>
    <template v-slot:table-template="slotScope">
      <td
        v-for="(item, index) in headers.slice(0, -3)"
        :key="index"
      >{{ slotScope.props.item[item.value] }}</td>
      <td>
        <i class="icon-email"></i>
        {{ slotScope.props.item['email'] }}
      </td>
      <td>
        <i class="icon-phone"></i>
        {{ slotScope.props.item['phone'] }}
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
export default class ContactList extends Vue {
  loading = false;
  functionName = '';
  functionNames: any[] = [];
  headers = [
    { text: '#', value: 'number' },
    { text: 'First Name', value: 'firstName' },
    { text: 'Middle Name', value: 'middleName' },
    { text: 'Surname', value: 'surname' },
    { text: 'Email', value: 'email' },
    { text: 'Phone', value: 'phone' },
    { text: 'Action', value: 'action', sortable: false },
  ];
  items = [];

  async update() {
    this.loading = true;
    this.items = (await api.supplier.getContactPersonList(
      this.functionName
    )).map((x: any, i: number) => ({
      number: (i + 1).toString().padStart(3, '0'),
      ...x,
    }));
    this.loading = false;
  }

  async created() {
    await this.update();

    this.functionNames = [
      ...new Set(
        this.items.map(
          (x: any) =>
            x.data.supplier_contact_person.supplier_contact_person_function
        )
      ),
    ];
  }
}
</script>

<style lang="scss" scoped>
</style>