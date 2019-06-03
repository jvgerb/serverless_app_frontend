<template>
  <div class="create-container container">
    <div class="create-wrapper">
      <div>
        <button-back
          :color="getColor('white')"
          :backgroundColor="getColor('strongRed')"
          :fontWeight="600"
          title='Back'
          :onClick="handleClick"
        ></button-back>
      </div>
      <div>
        <header-logo></header-logo>
      </div>
    </div>
    <div class="create-painel">
      <div class="create-painel-heading">Create invoice</div>
      <div class="create-body">
        <div class="create-form-wizard">
          <form-wizard
            title=""
            subtitle=""
            @on-complete="onComplete"
            error-color="getColor('strongRed')"
            :color="getColor('strongRed')"
            shape="tab"
            :start-index="startIndex"
          >
            <tab-content
              v-for="(tab, index) in tabs"
              :key="index"
              :title="tab.title"
              :before-change="() => validateFirstTab(index)"
            >
              <div class="create-form-generator">
                <vue-form-generator
                  :schema="tab.schemas"
                  :model="model"
                  :options="formOptions"
                  @model-updated="onModelUpdated"
                  :ref="tab.ref"
                ></vue-form-generator>
              </div>
            </tab-content>
          </form-wizard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { color } from '../styleguide/colors';

import oneTabSchema from '../schema/oneTabSchema';
import twoTabSchema from '../schema/twoTabSchema';
import threeTabSchema from '../schema/threeTabSchema';
import fourTabSchema from '../schema/fourTabSchema';
import fiveTabSchema from '../schema/fiveTabSchema';

/* eslint-disable import/first */
import Logo from '@/components/Header/Logo';
import Button from '@/styleguide/Button/Button';

/* eslint-disable import/first */
import { FormWizard, TabContent } from 'vue-form-wizard';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';

import { mapActions } from 'vuex';

import Vue from 'vue';

import VueFormGenerator from 'vue-form-generator';
import 'vue-form-generator/dist/vfg-core.css';

Vue.use(VueFormGenerator);

export default {
  name: 'InvoiceCreate',
  components: {
    'header-logo': Logo,
    'button-back': Button,
    FormWizard,
    TabContent
  },
  mounted() {
    if (localStorage.InvoiceCreate) this.model = JSON.parse(localStorage.InvoiceCreate);
  },
  data() {
    return {
      startIndex: 0,
      tabsNumber: 5,
      model: {},
      tabs: [
        { title: '', schemas: oneTabSchema, ref: 'tabForm' },
        { title: '', schemas: twoTabSchema, ref: 'tabForm' },
        { title: '', schemas: threeTabSchema, ref: 'tabForm' },
        { title: '', schemas: fourTabSchema, ref: 'tabForm' },
        { title: '', schemas: fiveTabSchema, ref: 'tabForm' }
      ],
      formOptions: {
        validationErrorClass: 'has-error',
        validationSuccessClass: 'has-success',
        validateAfterChanged: true
      }
    };
  },
  methods: {
    ...mapActions(['saveInvoiceData']),
    handleClick() {
      this.$router.push({ path: '/InvoiceList' });
    },
    onComplete() {
      localStorage.removeItem('InvoiceCreate');
      this.saveInvoiceData(this.model).then(() => {
        this.$children[2].changeTab(this.tabsNumber - 1, this.startIndex);
        this.clearModel();
        // this.$children[2].reset(); // This can be used too, but it does not consider the start index. It also clears the forms
      });
    },
    onModelUpdated() {
      localStorage.setItem('InvoiceCreate', JSON.stringify(this.model));
    },
    validateFirstTab(index) {
      return this.$refs.tabForm[index].validate();
    },
    getColor(colorHex) {
      return color(colorHex);
    },
    clearModel() {
      this.model = {};
    }
  }
};

</script>

<style lang="scss">

@import '../assets/styles/pages/invoiceCreate.scss';

</style>

