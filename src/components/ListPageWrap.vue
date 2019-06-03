<template>
  <FormCard class="list-page-wrap">
    <div class="filter-panel">
      <h3>Filter By</h3>
      <div class="form-row">
        <slot name="filter-template"></slot>
      </div>
    </div>
    <v-data-table
      :loading="loading"
      :headers="headers"
      :items="items"
      :pagination.sync="pagination"
      :rows-per-page-items="rowsPerPageItems"
      hide-actions
    >
      <template v-slot:items="props">
        <slot :props="props" name="table-template"></slot>
      </template>
    </v-data-table>
    <div class="pagination">
      <div class="spacer"></div>
      <i class="icon-previous" @click="prevPage()"></i>
      <span>{{pagination.page}} von {{pages}}</span>
      <i class="icon-next" @click="nextPage()"></i>
    </div>
  </FormCard>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import FormCard from '@/components/FormCard.vue';
import Rating from '@/components/Rating.vue';

@Component({
  components: { FormCard, Rating },
})
export default class ListPageWrap extends Vue {
  @Prop() headers!: any[];
  @Prop() items!: any[];
  @Prop() loading!: boolean;

  pagination: any = { rowsPerPage: 10 };
  rowsPerPageItems = [8, 10, 15];

  get pages() {
    if (
      this.pagination.rowsPerPage == null ||
      this.pagination.totalItems == null
    )
      return 0;

    return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage);
  }

  nextPage() {
    this.pagination.page = Math.min(this.pagination.page + 1, this.pages);
  }

  prevPage() {
    this.pagination.page = Math.max(this.pagination.page - 1, 1);
  }
}
</script>

<style lang="scss">
.list-page-wrap {
  padding: 0;
  .filter-panel {
    padding: 16px 24px 24px;
  }

  .form-row {
    padding-left: 50px;
  }

  .form-field {
    width: 220px;
    &:first-child {
      width: 220px - 12px;
      select ~ i {
        left: 12px;
      }
    }
    select {
      height: 45px;
      border-radius: 9px;
      border: solid 2px #e8e8e8;
      padding-left: 36px;
      color: black;
      background-position: calc(100% - 15px);
      padding-right: 50px;
      &::after {
        content: ' ';
      }
    }
    select ~ i {
      position: absolute;
      left: 24px;
      top: calc(50% - 8px);
      color: var(--icon-color);
      font-size: 16px;
    }
    .arrow-divider {
      position: absolute;
      top: calc(50% - 15px);
      right: 42px;
      width: 1px;
      height: 30px;
      background: #e8e8e8;
    }
  }
}

table.v-table {
  thead {
    tr {
      height: 44px;
      letter-spacing: 1.25px;
    }
    tr:first-child {
      border-top: 1px solid rgba(0, 0, 0, 0.12);
      border-bottom: none !important;
      box-shadow: 0 2px 3px #00000021;
    }
    th {
      font-weight: bold;
    }
  }
  tbody {
    td {
      font-size: 12px;
      height: 34px;
      white-space: nowrap;
      i {
        font-size: 16px;
        margin-right: 10px;
        color: var(--icon-color);
        // &:hover {
        //   color: var(--accent-color);
        // }
      }
      &.actions i {
        margin-right: 20px;
        cursor: pointer;
        color: var(--accent-color);
        &:last-of-type {
          margin-right: 0;
        }
      }
    }
    tr {
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    }
  }
}

.pagination {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;
  padding: 24px;
  > * {
    font-size: 12px;
  }
  i {
    color: var(--accent-color);
    cursor: pointer;
  }
}
</style>
