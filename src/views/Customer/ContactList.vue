<template>
  <ListPageWrap :headers="headers" :items="items">
    <template v-slot:filter-template>
      <div class="form-field">
        <select>
          <option value="Heat">Phone</option>
        </select>
        <i class="icon-phone"></i>
        <div class="arrow-divider"></div>
      </div>

      <div class="form-field">
        <select>
          <option value="Heat">Function</option>
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
export default class ContactList extends Vue {
  headers = [
    { text: '#', value: 'number' },
    { text: 'First Name', value: 'firstName' },
    { text: 'Middle Name', value: 'middleName' },
    { text: 'Surname', value: 'surname' },
    { text: 'Email', value: 'email' },
    { text: 'Phone', value: 'phone' },
    { text: 'Action', value: 'action', sortable: false },
  ];
  items = [...Array(100)].map((x, i) => ({
    number:  (i + 1).toString().padStart( 3, '0'),
    firstName: 'John',
    middleName: 'Doe',
    surname: 'Baer',
    email: 'John.doe@email.com',
    phone: '0123 657 883',
  }));
}
</script>

<style lang="scss" scoped>
</style>
