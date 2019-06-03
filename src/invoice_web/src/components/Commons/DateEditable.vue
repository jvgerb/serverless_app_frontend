<template>
  <li class="table-item last">
    <span @click="editing=true" v-if="editing">
      {{value | dateFilter}}
    </span>
    <datepicker v-else
              @selected="closeModal"
              placeholder="Select Date"
              language="de"
  ></datepicker>
  </li>
</template>

<script>

import Datepicker from 'vuejs-datepicker';
import moment from 'moment';

// Needs to be a function because of the `this` reference
function closeModal(newDate) {
  this.editing = false;
  this.date = moment(newDate).format('DD.MM.YYYY');
}

export default {
  name: 'InputEditable',
  props: ['value', 'field', 'editing'],
  components: {
    Datepicker
  },
  data() {
    return {
      date: '--'
    };
  },
  methods: {
    closeModal
  }
};

</script>
