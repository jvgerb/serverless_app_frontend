<template>
  <div id='pagesContainer'>
    <page-1></page-1>
    <page-2></page-2>
    <page-3></page-3>
    <page-4></page-4>
  </div>
</template>

<script scoped>

import 'vue-form-wizard/dist/vue-form-wizard.min.css';
import { FormWizard, TabContent } from 'vue-form-wizard';

import { mapActions } from 'vuex';

import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';

function generateInvoicePDF() {
  const head = `<head>${document.getElementsByTagName('head')[0].innerHTML}</head>`;
  const content = `<html>${head}<body>${document.getElementById('pagesContainer').innerHTML}</body></html>`;

  const payload = {
    invoiceId: this.$route.params.id,
    content
  };

  this.generatePDF(payload);
}

function updateInnerHTML(prevIndex) {
  const tabs = document.querySelectorAll('div.wizard-tab-container');
  let currentTab = null;

  tabs.forEach((tab) => {
    const display = window.getComputedStyle(tab).display;
    if (display === 'block') currentTab = tab;
  });

  if (currentTab) {
    this.updateHTMLPage({
      index: prevIndex + 1,
      innerHTML: currentTab.innerHTML
    });
  }
}

export default {
  name: 'NewInvoice',
  data() {
    return {
      tabs: [
        { title: 'Seite 1', icon: 'ti-user', component: 'page1' },
        { title: 'Seite 2', icon: 'ti-settings', component: 'page2' },
        { title: 'Seite 3', icon: 'ti-location-pin', component: 'page3' },
        { title: 'Seite 4', icon: 'ti-check', component: 'page4' }
      ]
    };
  },
  methods: {
    ...mapActions(['generatePDF', 'updateHTMLPage']),
    onComplete: generateInvoicePDF,
    onChange: updateInnerHTML
  },
  components: {
    Page1,
    Page2,
    Page3,
    Page4,
    FormWizard,
    TabContent
  }
};

</script>

<style scoped lang="scss">
  @import '../assets/styles/pages/invoice.scss';
</style>
