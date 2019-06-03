<template>
  <FormCard class="summary-page-wrap">
    <div class="filter-panel">
      <h3>Search By ID</h3>
      <div class="form-row">
        <div class="form-field">
          <div class="search-input">
            <input type="text" placeholder="Item ID">
            <i class="icon-search"></i>
            <div class="arrow-divider"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="inline-container">
      <slot></slot>
    </div>
  </FormCard>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import FormCard from '@/components/FormCard.vue';

@Component({
  components: { FormCard },
})
export default class ListPageWrap extends Vue {}
</script>

<style lang="scss">
.search-input {
  position: relative;
  > input {
    width: 100%;
    padding-left: 22px;
    padding-right: 30px;
    height: 45px;
    border-radius: 9px;
    border: solid 2px #e8e8e8 !important;
    color: black;
  }

  > i {
    position: absolute;
    font-size: 24px;
    top: calc(50% - 12px);
    right: 12px;
    color: #030303;
  }
}

.summary-page-wrap {
  padding: 0;
  .filter-panel {
    padding: 16px 24px 24px;
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.1);
  }

  .form-row {
    padding-left: 50px;
  }

  .form-field {
    width: 200px;
    &:first-child {
      select ~ i {
        left: 12px;
      }
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

.inline-container {
  padding: 24px 72px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;
}
</style>

<style lang="scss">
.summary-page-wrap .col {
  span {
    display: inline-block;
    width: 50%;
    font-size: 12px;
    line-height: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    &:first-child {
      letter-spacing: 1.25px;
      font-weight: 500;
    }
  }
  .second-text {
    color: #a6a8ab;
    letter-spacing: 0.75px;
  }
  hr {
    margin: 10px 0;
  }
  .comment-span {
    span:first-child {
      display: block;
    }
    .second-text {
      line-height: 1.5;
      width: 100%;
    }
  }
}
</style>
