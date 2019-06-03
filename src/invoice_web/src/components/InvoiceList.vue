<template>
  <v-app id="invoice-list-page" class="font-family--energicos">
    <div class="wizard-header container">
      <div class="wizard-info">
        <h4 class="wizard-title">Invoice Generator</h4>
        <p class="category">List of all invoices that have already been processed.</p>
      </div>
      <div class="logout">
        <v-btn
          class="button--logout font-family--energicos"
          color="#C30016"
          depressed
          small
          @click="handleLogout"
        >Logout</v-btn>
      </div>

    </div>

    <div class="invoice-infos container">
      <widget-info :number="invoices_processing" title="Invoices being processed"/>
      <widget-info :number="invoices_processed" title="Invoices processed"/>
      <widget-info :number="invoices_to_be_processed" title="Invoices to be processed"/>
    </div>

    <div class="table-wrapper">

      <v-toolbar color="white">
        <v-flex>
          <v-card-title>
            <v-btn color="#e1e4ea" depressed small @click="handleProcessInvoices">{{ type === 'dryRun' ? 'Dry Run' : 'Send and Upload' }}</v-btn>
            <v-btn color="#e1e4ea" depressed small @click="handleCreateInvoice">Create invoice</v-btn>
            <v-btn color="#e1e4ea" depressed small @click="handleDownload">Download</v-btn>
          </v-card-title>
        </v-flex>

        <v-flex sm1 d-flex>
          <v-select
            class="font-size--dropdown"
            v-model="type"
            :items="items"
            placeholder="Type"
            color="#C30016"
            @change="handleSelect"
          ></v-select>
        </v-flex>
      </v-toolbar>

      <v-toolbar dark color="#C30016">
        <v-toolbar-title class="white--text">Invoice List</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field color="#fff" v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
        <v-menu offset-y :nudge-left="170" :close-on-content-click="false">
          <v-btn icon slot="activator">
            <v-icon>more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile v-for="(item) in headers" :key="item.value" @click="changeSort(item.value)">
              <v-list-tile-title>
                {{ item.text }}
                <v-icon v-if="pagination.sortBy === item.value">
                  {{ pagination.descending ? 'arrow_downward':'arrow_upward' }}
                </v-icon>
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
          </v-menu>
      </v-toolbar>

      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="desserts"
        :search="search"
        :pagination.sync="pagination"
        select-all
        item-key="invoice_id"
        class="elevation-1"
      >
        <template v-slot:headers="props">
          <tr>
            <th>
              <v-checkbox
                :input-value="props.all"
                :indeterminate="props.indeterminate"
                primary
                hide-details
                @click.stop="toggleAll"
              ></v-checkbox>
            </th>
            <th
              class="table-header"
              v-for="header in props.headers"
              :key="header.text"
              @click="changeSort(header.value)"
            >
              {{ header.text }}
            </th>
          </tr>
        </template>
        <template v-slot:items="props">
          <tr :active="props.selected" @click="props.selected = !props.selected">
            <td>
              <v-checkbox
                :input-value="props.selected"
                primary
                hide-details
              ></v-checkbox>
            </td>
            <td class="text-xs-left">{{ props.item.invoice_id }}</td>
            <td class="text-xs-left">{{ props.item.sent ? 'Yes' : 'No' }}</td>
            <td class="text-xs-left">{{ props.item.status }}</td>
            <td class="text-xs-left">{{ props.item.type }}</td>
            <td class="text-xs-left">{{ formatDate(props.item.email_send_date ? new Date(props.item.email_send_date) : null, 'DD.MM.YYYY HH:mm') }}</td>
            <td class="justify-center layout px-0">
              <v-icon
                small
                class="mr-2"
                @click="viewInvoice(props.item)"
              >
                visibility
              </v-icon>
              <v-icon
                small
                @click="download(props.item)"
              >
                archive
              </v-icon>
            </td>
          </tr>
        </template>
      </v-data-table>
    </div>
    <loading :show="show" :label="loadingTitle"></loading>
  </v-app>
</template>

<script>
import moment from 'moment';
import swal from 'sweetalert';
import { mapGetters, mapActions } from 'vuex';

import loading from 'vue-full-loading';

import { clearStorage } from '@/services/serviceStorage';

import WidgetInfo from './Commons/WidgetInfo';

function fetchWidgetData() {
  this.getInvoicesCountByStatus({
    status: 'processing',
    field: 'invoices_processing',
    type: this.type
  });
  this.getInvoicesCountByStatus({
    status: 'done',
    field: 'invoices_processed',
    type: this.type
  });
  this.getInvoicesCountByStatus({
    status: 'idle',
    field: 'invoices_to_be_processed',
    type: this.type
  });
}

function onCreated() {
  this.interval = setInterval(() => {
    fetchWidgetData.bind(this)();
  }, 15000);
  fetchWidgetData.bind(this)();
}

function onDestroy() {
  clearInterval(this.interval);
}

export default {
  name: 'InvoiceList',
  components: {
    loading,
    'widget-info': WidgetInfo
  },
  data: () => ({
    dialog: false,
    headers: [
      {
        text: 'Invoice Id',
        align: 'left',
        value: 'invoice_id',
        sortable: false
      },
      {
        text: 'Sent',
        align: 'left',
        value: 'sent',
        sortable: false
      },
      {
        text: 'Status',
        align: 'left',
        value: 'status',
        sortable: false
      },
      {
        text: 'Type',
        align: 'left',
        value: 'type',
        sortable: false
      },
      {
        text: 'Process date',
        value: 'email_send_date',
        align: 'left',
        sortable: false
      },
      {
        text: 'Actions',
        align: 'center',
        value: 'actions',
        sortable: false
      }
    ],
    items: ['release', 'dryRun'],
    desserts: [],
    defaultItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    },
    pagination: {
      sortBy: 'invoice_id'
    },
    selected: [],
    search: '',
    isMobile: false,
    show: false,
    loadingTitle: '',
    type: 'release'
  }),

  computed: mapGetters([
    'invoices_processing',
    'invoices_processed',
    'invoices_to_be_processed'
  ]),

  methods: {
    ...mapActions([
      'getInvoicesCountByStatus',
      'getInvoicesPagination',
      'saveInvoiceQueueSend',
      'saveInvoiceQueueRelease',
      'downloadPDF'
    ]),

    async initialize () {
      this.show = true;
      this.loadingTitle = 'Wait! Processing...';

      const { data } = await this.getInvoicesPagination(this.type);
      this.desserts = data;

      this.show = false;
    },

    formatDate(value, format) {
      if (value == null) {
        return '';
      }

      return moment(value).format(format);
    },

    viewInvoice (item) {
      this.$router.push({ path: `/Invoice/${item.invoice_id}` });
    },

    handleDownload () {
      swal('Are you sure you want to do this?', {
        buttons: ['Cancel', 'Yes']
      }).then(async (value) => {
        if (value && this.selected.length > 0) {
          const invoiceList = this.selected.map((item) => item.invoice_id);
          this.show = true;
          this.loadingTitle = 'Wait! This process may take a while...';

          const params = {
            ids: invoiceList
          };

          try {
            const response = await this.downloadPDF(params);

            const url = window.URL.createObjectURL(new Blob([response], {
              type: invoiceList.length > 1 ? 'application/zip' : 'application/pdf'
            }));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', invoiceList.length > 1 ? 'invoices.zip' : `${invoiceList[0]}.pdf`);
            document.body.appendChild(link);
            link.click();

            this.show = false;

            this.selected = [];
          } catch (error) {
            this.show = false;
            // eslint-disable-next-line
            console.error('Error downloading invoice', error);
          }
        }
      });
    },

    async download ({ invoice_id }) {
      this.show = true;
      this.loadingTitle = 'Wait! Processing...';

      try {
        const response = await this.downloadPDF({ ids: [ invoice_id ] });

        const url = window.URL.createObjectURL(new Blob([response], { type: 'application/pdf' }));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${invoice_id}.pdf`);
        document.body.appendChild(link);
        link.click();

        this.show = false;

        this.selected = [];
      } catch (error) {
        this.show = false;
        // eslint-disable-next-line
        console.error(`Error downloading invoice ${invoice_id}`, error);
      }
    },

    toggleAll () {
      if (this.selected.length) {
        this.selected = [];
      } else {
        this.selected = this.desserts.slice();
      }
    },

    changeSort (column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending
      } else {
        this.pagination.sortBy = column
        this.pagination.descending = false
      }
    },

    handleCreateInvoice () {
      this.$router.push({ path: '/InvoiceCreate' });
    },

    handleProcessInvoices () {
      swal('Are you sure you want to do this?', {
        buttons: ['Cancel', 'Yes']
      }).then((value) => {
        if (value && this.selected.length > 0) {
          const ids = this.selected.map((item) => item.invoice_id);
          if (this.type === 'dryRun') {
            this.saveInvoiceQueueSend(ids).then(() => this.selected = []);
          } else {
            this.saveInvoiceQueueRelease(ids).then(() => this.selected = []);
          }

        }
      });
    },

    async handleSelect () {
      await this.initialize()
    },

    async handleLogout () {
      await clearStorage();
      this.$router.push({ path: '/Auth' });
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

  },

  async beforeMount () {
    await this.initialize()
  },

  created: onCreated,
  destroyed: onDestroy
};
</script>

<style lang="scss" scoped>

.wizard-header {
  padding-bottom: 0px;
  display: grid;

  grid-template-columns: 100% 0%;
  grid-template-rows: auto;
  grid-template-areas: "info logout";
}

.wizard-info {
  grid-area: info;
}

.logout {
  display: flex;
  grid-area: logout;
  justify-content: flex-end;
}

.wizard-title {
  font-family: 'energicos-regular';
  font-size: 18px;
  color: #2c3e50 !important;
}

.category {
  font-family: 'energicos-regular';
  color: #2c3e50 !important;
}

.invoice-list-page {
  font-family: 'energicos-regular';
  color: #2c3e50 !important;
}

.stats-number,
.stats-title{
  color: #2c3e50;
}

.theme--light.application {
  background: white;
}

.table-wrapper {
  position: relative;
  margin-top: 50px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: calc(100% - 220px);
}

table.v-table thead th:last-child {
  text-align: center !important;
}

.invoice-infos {
  display: flex;
  justify-content: space-around;
}

.mobile {
  color: #333;
}

@media screen and (max-width: 768px) {
  .mobile table.v-table tr {
    max-width: 100%;
    position: relative;
    display: block;
  }

  .mobile table.v-table tr:nth-child(odd) {
    border-left: 6px solid deeppink;
  }

  .mobile table.v-table tr:nth-child(even) {
    border-left: 6px solid cyan;
  }

  .mobile table.v-table tr td {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #f5f5f5;
    height: auto;
    padding: 10px;
  }

  .mobile table.v-table tr td ul li:before {
    content: attr(data-label);
    padding-right: 0.5em;
    text-align: left;
    display: block;
    color: #999;
  }
  .v-datatable__actions__select {
    width: 50%;
    margin: 0px;
    justify-content: flex-start;
  }
  .mobile .theme--light.v-table tbody tr:hover:not(.v-datatable__expand-row) {
    background: transparent;
  }
}
.flex-content {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.flex-item {
  padding: 5px;
  width: 50%;
  height: 40px;
  font-weight: bold;
}

.v-datatable tr td:last-child {
  display: flex;
  align-items: center;
  justify-items: center;
}

.elevation-1 {
  overflow: auto;
  display: grid;
  grid-template-rows: auto 60px;

  margin-bottom: 50px;
  font-family: 'energicos-regular';
  font-size: 14px;
}

.v-btn {
  text-transform: none;
}

.font-family--energicos {
  font-family: 'energicos-regular';
}

.table-header {
  font-family: 'energicos-bold';
  text-align: left;
}

.font-size--dropdown {
  font-size: 14px;
}

.button--logout {
  color: #fff;
}

</style>
