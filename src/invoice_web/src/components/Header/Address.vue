<template>
  <div class="address-top">
    <span class="energicos-important"><i class="icon symbol icon-time"></i>Datum:</span>  {{commons.address.invoice_date | dateFilter}}<br/>
    <span class="energicos-important"><i class="icon symbol icon-users"></i>Ansprechpartner:</span> Birgit Meißner<br/>
    <span class="energicos-important"><i class="icon symbol icon-phone"></i>Telefon:</span> 030/ 520098-122
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'Address',
  computed: mapGetters([
    'commons'
  ])
};

</script>
