<template>
  <div>
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
          <Rating v-model="slotScope.props.item.relationshipQuality" :readonly="true"></Rating>
        </td>
        <td class="actions">
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <i class="icon-billing-address" v-on="on" @click="billingDialogVisible=true"></i>
            </template>
            <span>Billing Addres</span>
          </v-tooltip>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <i class="icon-delivery-address" v-on="on" @click="deliveryDialogVisible=true"></i>
            </template>
            <span>Delivery Addres</span>
          </v-tooltip>
        </td>
      </template>
    </ListPageWrap>
    <v-dialog v-model="billingDialogVisible" width="940">
      <v-card>
        <v-card-title primary-title>
          <i class="icon-delivery-address"></i>
          <span>Customer Delivery Address</span>
          <i class="icon-close" @click="billingDialogVisible=false"></i>
        </v-card-title>

        <div class="dialog-container">
          <div class="list-item">
            <span>Customer ID</span>
            <span>001</span>
            <a>
              <i class="icon-edit"></i> Edit
            </a>
          </div>
          <div class="list-item">
            <span>Street</span>
            <span>Lorem ipsum dolor</span>
            <a>
              <i class="icon-edit"></i> Edit
            </a>
          </div>
          <div class="list-item">
            <span>Street Number</span>
            <span>Lorem ipsum</span>
            <a>
              <i class="icon-edit"></i> Edit
            </a>
          </div>
          <div class="list-item">
            <span>Zip Code</span>
            <span>1234</span>
            <a>
              <i class="icon-edit"></i> Edit
            </a>
          </div>
          <div class="list-item">
            <span>Place</span>
            <span>
              <i class="icon-location"></i>Berlin
            </span>
            <a>
              <i class="icon-edit"></i> Edit
            </a>
          </div>
        </div>
      </v-card>
    </v-dialog>
    <v-dialog v-model="deliveryDialogVisible" width="940">
      <v-card>
        <v-card-title primary-title>
          <i class="icon-delivery-address"></i>
          <span>Customer Delivery Address</span>
          <i class="icon-close" @click="deliveryDialogVisible=false"></i>
        </v-card-title>

        <div class="dialog-container">
          <div class="list-item">
            <span>Customer ID</span>
            <span>001</span>
            <a>
              <i class="icon-edit"></i> Edit
            </a>
          </div>
          <div class="list-item">
            <span>Street</span>
            <span>Lorem ipsum dolor</span>
            <a>
              <i class="icon-edit"></i> Edit
            </a>
          </div>
          <div class="list-item">
            <span>Street Number</span>
            <span>Lorem ipsum</span>
            <a>
              <i class="icon-edit"></i> Edit
            </a>
          </div>
          <div class="list-item">
            <span>Zip Code</span>
            <span>1234</span>
            <a>
              <i class="icon-edit"></i> Edit
            </a>
          </div>
          <div class="list-item">
            <span>Place</span>
            <span>
              <i class="icon-location"></i>Berlin
            </span>
            <a>
              <i class="icon-edit"></i> Edit
            </a>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
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
export default class CustomerList extends Vue {
  loading = false;  billingDialogVisible = false;
  deliveryDialogVisible = false;

  placeZip = '';
  type = '';

  places: any[] = [];

  headers = [
    { text: 'Customer ID', value: 'customerId' },
    { text: 'Customer Type', value: 'customerType' },
    { text: 'Customer Organization Name', value: 'customerOrganizationName' },
    { text: 'Customer’s Name', value: 'customersName' },
    { text: 'Relationship Quality', value: 'relationshipQuality' },
    { text: 'Action', value: 'action', sortable: false },
  ];
  items = [];

  async update() {
    this.loading = true;
    this.items = await api.customer.getCustomerList(this.placeZip, this.type);
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
.actions i {
  color: var(--icon-color) !important;
}

.v-card__title--primary {
  .icon-delivery-address {
    font-size: 16px;
    margin-right: 10px;
  }
}

.dialog-container {
  width: 940px;
  padding: 0 70px;
  .list-item {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    grid-template-columns: 1fr 1fr auto;
    height: 40px;
    font-size: 12px;
    & > * {
      display: grid;
      grid-auto-flow: column;
      justify-content: left;
      i {
        margin-right: 6px;
      }
    }
    span:first-child {
      letter-spacing: 1.25px;
      font-weight: 500;
    }
    span:nth-child(2) {
      color: #cdc0b8;
    }
    a:last-child {
      color: var(--accent-color);
      width: 50px;
      cursor: pointer;
    }
    i {
      font-size: 16px;
    }
  }
}
</style>