import moment from 'moment';
import Vue from 'vue';

import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import App from './App';
import router from './router';
import store from './store/store';

import currency from './components/Filters/Utils';
import awsAuth from './services/awsExport';

Amplify.configure({ Auth: awsAuth });

Vue.use(AmplifyPlugin, AmplifyModules);
Vue.use(Vuetify)

Vue.config.productionTip = false;

const isEmpty = value => value === undefined || value === null || value === '';

const currencyFormatter = value => (
  // eslint-disable-next-line
  !isEmpty(value) && _.isNumber(value) && (value !== 0)
    ? currency(value, 'EUR', 2, { thousandsSeparator: '.', decimalSeparator: ',', spaceBetweenAmountAndSymbol: true, symbolOnLeft: false })
    : ''
);

const percentageFormatter = (value) => {
  if (!isEmpty(value)) {
    if (value >= 1) {
      return `${value}%`;
    }

    if (value < 1 && value !== 0) {
      const retval = (value * 100).toFixed(0);
      return `${retval}%`;
    }
  }

  return value === 0 ? '' : value;
};

const dateFormatter = (value) => {
  if (value === 'Total') {
    return value;
  }

  return !isEmpty(value) ? moment(value, 'YYYY/MM/DD').format('DD.MM.YYYY') : '';
};

const textFormatter = value => (!isEmpty(value) ? `${value}` : '');

const numberFormatter = (value, decimalplaces) => (
  // eslint-disable-next-line
  !isEmpty(value) && _.isNumber(value) && (value !== 0)
    ? currency(value, '', decimalplaces, { thousandsSeparator: '.', decimalSeparator: ',' })
    : ''
);

const meterFormatter = (value) => {
  // eslint-disable-next-line
  if (value === '' || value === 0) {
    return '';
  }

  if (value === null) {
    return '0';
  }

  return value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

const formatDynamicValue = (value, format) => {
  switch (format) {
  case 'text':
    return textFormatter(value);
  case 'number':
    return numberFormatter(Number(value, 2));
  case 'percentage':
    return percentageFormatter(Number(value));
  case 'currency':
    return currencyFormatter(Number(value));
  case 'date':
    return dateFormatter(value);
  case 'factor':
    return numberFormatter(Number(value), 4);
  case 'meter':
    return meterFormatter(Number(value));
  case 'mwh':
    return numberFormatter(Number(value), 3);
  case 'nodecimalplaces':
    return numberFormatter(Number(value), 0);
  case 'gasfactor':
    return numberFormatter(Number(value), 9);
  default:
    return value;
  }
};

Vue.filter('editableInputFormat', (value, format) => {
  if (format) {
    return formatDynamicValue(value, format);
  }

  return `${value}`;
});

Vue.filter('dateFilter', value => dateFormatter(value));
Vue.filter('numberFilter', value => numberFormatter(Number(value), 2));
Vue.filter('MWhFilter', value => numberFormatter(Number(value), 3));
Vue.filter('percentageFilter', value => percentageFormatter(Number(value)));


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
