<template>
  <div id="app">
    <router-view/>
    <transition name="fade">
      <div class="backgroudLayer" v-if="showModal">
        <div class="invoiceModal">
          <div class="wizard-header">
            <h4 class="wizard-title">Invoice Generator App</h4>
            <p class="category">Write a JSON file inside the left column to save in the database</p>
          </div>
          <div class="jsonArea">
            <textarea class="jsonInput" @change="updateJson"></textarea>
            <vue-json-editor class="jsonView" v-model="json" :showBtns="false"></vue-json-editor>
          </div>
          <div class="buttonsArea">
            <button class="cancelPopupButton" @click="showModal=false">Cancel</button>
            <button class="sendPopupButton" @click="sendJson">Save</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

import * as keyboardShortcut from 'keyboard-shortcut';
import vueJsonEditor from 'vue-json-editor';
import { mapActions } from 'vuex';
import swal from 'sweetalert';

function created() {
  keyboardShortcut('ctrl alt p', () => {
    this.showModal = true;
  });
  keyboardShortcut('escape', () => {
    this.showModal = false;
  });
}

function sendJson() {
  this.saveInvoiceData(this.json);
}

export default {
  name: 'App',
  data() {
    return {
      showModal: false,
      json: {}
    };
  },
  methods: {
    ...mapActions(['saveInvoiceData']),
    sendJson,
    updateJson(event) {
      try {
        const jsonUpdate = JSON.parse(event.target.value);
        this.json = jsonUpdate;
      } catch (error) {
        swal('Oops!', 'Wrong JSON format. Please verify that the keys are surrounded by double quotes and that closing tags are ok!', 'error');
      }
    }
  },
  components: {
    vueJsonEditor
  },
  created
};

</script>

<style lang="scss">

  @import './assets/styles/fonts.css';
  @import './assets/styles/icons-codes.css';
  @import url('https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css');
  @import './assets/styles/main.css';
  @import './assets/styles/pages/app.scss'

</style>
