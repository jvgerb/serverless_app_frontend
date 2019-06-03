<template>
  <filter-bar>
    <filter-Left>
      <filter-wrapper>
        <filter-container>
          <filter-input
            type="text"
            :id="searchInput"
            v-model="filterText"
            @keyup.native.enter="doFilter"
            placeholder="Search by Rechnungsnummer..."
          />
          <button-done @click="resetFilter">
            <done-icon width="15px" v-if="filterText !== ''" />
          </button-done>
        </filter-container>
        <filter-search class="wizard-btn" @click="doFilter">
          <span class="glyphicon glyphicon-search"></span>
        </filter-search>
      </filter-wrapper>
    </filter-Left>

    <filter-advanced>
      <filter-advanced-link @click="showModal=true">Advanced Search</filter-advanced-link>
      <filter-clear-filters @click="resetFilter">Clear filters</filter-clear-filters>
    </filter-advanced>

    <transition name="fade">
      <modal v-if="showModal">
        <modal-invoice>
          <modal-header :color="getColor('strongRed')">
            <h4 class="wizard-title">Advanced search</h4>
          </modal-header>

          <form>
            <modal-wrapper>
              <modal-container>
                <modal-filters-wrapper>
                  <modal-filter-label>Sent email:</modal-filter-label>

                  <input type="radio" id="yes" value="true" v-model="filters.sent">
                  <modal-filter-label>Yes</modal-filter-label>

                  <input type="radio" id="no" value="false" v-model="filters.sent">
                  <modal-filter-label>No</modal-filter-label>
                </modal-filters-wrapper>

                <modal-filters-wrapper>
                  <modal-page-container>
                    <modal-page-label>Per Page:</modal-page-label>
                    <modal-select>
                      <select
                        v-model="perPage"
                        @change="$emit('change-per-page', $event.target.value)"
                      >
                        <option value=15>15</option>
                        <option value=50>50</option>
                        <option value=100>100</option>
                        <option value=500>500</option>
                        <option value=999999>All</option>
                      </select>
                    </modal-select>
                  </modal-page-container>
                </modal-filters-wrapper>
              </modal-container>
            </modal-wrapper>
          </form>

          <div class="buttonsArea">
            <button class="cancelPopupButton" @click="showModal=false">Cancel</button>
            <button class="sendPopupButton" @click="filterSave">Save</button>
          </div>
        </modal-invoice>
      </modal>
    </transition>
  </filter-bar>
</template>

<script>

// eslint-disable-next-line import/no-extraneous-dependencies
import Button from '@/styleguide/Button/Button';
import Done from '@/styleguide/Icons/Done';
import Modal from '@/styleguide/Modal/Modal';
import Header from '@/styleguide/Modal/Header';

import styled from 'vue-styled-components';
import * as _ from 'lodash';

import { color } from '../../styleguide/colors';

const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FilterLeft = styled.div`
  display: flex;
`;

const FilterLabel = styled.label`
  width: 72px;
  display: flex;
  align-items: center;

  margin-bottom: 0px;
  margin-right: 0.5rem;
  text-align: left;
`;

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  top: 0.1rem;
  width: 100%;
`;

const FilterContainer = styled.div`
  width: 100%;
`;

const FilterInput = styled.input`
  height: 34px;
  border-radius: 3px;
  position: relative;

  background-color: ${color('white')};
  border: solid 1px #bebebe;
  box-sizing: border-box;
  text-align: left;
  width: 100%;
`;

const FilterSearch = styled.button`
  .glyphicon {
    top: 3px;
  }
`;

const DoneIcon = styled(Done)`
  position: absolute;
  top: 1rem;
  right: 4rem;

  cursor: pointer;
`;

const ButtonDone = styled.button`
  display: contents;
`;

const FilterAdvanced = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: 20px;
`;

const FilterAdvancedLink = styled.a`
  font-family: 'energicos-regular';
  color: ${color('strongRed')};
  cursor: pointer;

  &:hover {
    color: ${color('strongRed')};
    text-decoration: none;
  }
`;

const FilterClearFilters = styled(FilterAdvancedLink)`
  margin-left: 2rem;
`;

const ModalInvoice = styled.div`
  width: 40%;
  height: 40%;
  background: ${color('white')};

  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: grid;
  grid-template-rows: 70px auto 50px;
  padding: 20px;

  .buttonsArea {
    display: flex;
    justify-content: space-between;
    padding: 10px 0px 0px 0px;

    button {
      background-color: rgb(195, 0, 23);
      border-color: rgb(195, 0, 23);
      color: white;

      box-sizing: border-box;
      border-width: 2px;
      font-size: 14px;
      font-weight: 600;
      padding: 6px 12px;
      min-width: 140px;
      line-height: 1.42857;
      border-radius: 4px;
      height: 40px;
    }

    &:hover {
      cursor: pointer;
    }

  }
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const ModalFilterLabel = styled.label`
  margin-bottom: 0;
  margin-right: 2rem;
`;

const ModalPageLabel = styled(ModalFilterLabel)`
  margin-right: 3rem;
`;

const ModalFiltersWrapper = styled.div`
  margin-left: 2rem;
  margin-bottom: 1rem;
`;

const ModalPageContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ModalSelect = styled.div`
  position: relative;
  display: block;

  line-height: 3;
  background: transparent;
  border-radius: .25em;

  select {
    height: 4rem;
    margin: 0;
    appearance: none;

    padding-right: 6rem;
    padding-left: 3rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    outline: 0;
    box-shadow: none;
    background: white;
    background-image: none;
    color: black;
    cursor: pointer;
  }

  select::-ms-expand {
    display: none;
  }

  &:after {
    content: '▼';
    position: absolute;
    height: 4rem;

    top: 0;
    right: 0;
    bottom: 0;
    padding-left: 1rem;
    padding-right: 1rem;
    background: #c30017;
    pointer-events: none;
    color: white;
  }

  &:hover::after {
    color: #f39c12;
  }

  &::after {
    -webkit-transition: .25s all ease;
    -o-transition: .25s all ease;
    transition: .25s all ease;
  }
`;

export default {
  components: {
    Button,
    FilterBar,
    FilterLeft,
    FilterLabel,
    FilterWrapper,
    FilterContainer,
    FilterSearch,
    FilterInput,
    ButtonDone,
    FilterAdvanced,
    FilterAdvancedLink,
    FilterClearFilters,
    ModalInvoice,
    Modal,
    ModalWrapper,
    ModalFilterLabel,
    ModalFiltersWrapper,
    ModalPageContainer,
    ModalSelect,
    ModalContainer,
    ModalPageLabel,
    'modal-header': Header,
    'done-icon': DoneIcon
  },
  props: {
    searchInput: {
      type: String,
      default: 'release'
    }
  },
  data() {
    return {
      filterText: '',
      showModal: false,
      filters: {},
      perPage: 15
    };
  },
  methods: {
    doFilter() {
      const filters = this.filters;

      if ((this.filterText && this.filterText.length > 3) || filters.sent) {
        this.$events.fire('filter-set', { filterText: this.filterText, sent: filters.sent });
      } else if (this.filterText && this.filterText.length === 0) {
        this.resetFilter();
      } else {
        this.filterText = '';
        this.$events.fire('filter-reset');
      }
    },
    resetFilter() {
      this.filterText = '';
      this.filters = {};
      this.$events.fire('filter-reset');
      document.getElementById(`${this.searchInput}`).value = '';
    },
    getColor(colorHex) {
      return color(colorHex);
    },
    filterSave() {
      this.showModal = false;
      this.doFilter();
    }
  },
  mounted() {
    const $el = document.getElementById(`${this.searchInput}`);
    $el.addEventListener('keydown', _.debounce(this.doFilter, 300));
  }
};
</script>
