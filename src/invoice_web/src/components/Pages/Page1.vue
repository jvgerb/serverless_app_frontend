<template>
  <div class="utility-bill-container">
    <div class="utility-bill-content-one">
      <!--Start the header -->
      <header-logo></header-logo>
      <div class="key-location">
        energicos GmbH | Franklinstraße 9-11 | 10587 Berlin
      </div>
      <div v-if="commons.address.c_o" class="key-area">
        <p>
          <span class="energicos-important"></span> {{ commons.address.customer_name }} <br/>
          <span class="energicos-important"></span> {{ commons.address.c_o }} <br/>
          <span class="energicos-important"></span> {{ commons.address.ir_name }}<br/>
          <span class="energicos-important"></span> {{ commons.address.ir_address }}<br/>
          <span class="energicos-important"></span> {{ commons.address.ir_city_postal }}<br/>
				</p>
      </div>
      <div v-else class="key-area">
        <p>
          <span class="energicos-important"></span> {{ commons.address.customer_name }} <br/>
          <span class="energicos-important"></span> {{ commons.address.customer_address }}<br/>
          <span class="energicos-important"></span> {{ commons.address.customer_city_postal }}<br/>
				</p>
      </div>

      <div class="address-page1">
        <div class="address-page1-title">
          <span class="energicos-important">{{ commons.address.invoice_title }}</span>
        </div>
        <div>
          <span class="energicos-important"><i class="icon symbol icon-time"></i>Datum:</span>  {{ commons.address.invoice_date | dateFilter }}<br/>
          <span class="energicos-important"><i class="icon symbol icon-users"></i>Ansprechpartner:</span> Birgit Meißner<br/>
          <span class="energicos-important"><i class="icon symbol icon-phone"></i>Telefon:</span> 030/ 520098-122
        </div>
      </div>

      <!--End the header -->
      <!--Start key components -->
			<div class="energicos_key_components">
				<div class="component">
					<div class="component-header">
						<i class="icon icon-header icon-folder"></i><br/>
						Vertragsnummer
					</div>
					<ul class="items">
            <editable-input-row v-model="page1.table1.contractsnumber"
              :updateInputValue="updateRowValue"
              editing="false"
              field="Vertragsnummer" />
					</ul>
				</div>

				<div class="component">
					<div class="component-header">
						<i class="icon icon-header icon-city"></i><br/>
						Objektnummer
					</div>
					<ul class="items">
            <editable-input-row v-model="page1.table1.propertynumber"
              :updateInputValue="updateRowValue"
              editing="false"
              field="Objektnummer" />
					</ul>

				</div>

				<div class="component">
					<div class="component-header">
						<i class="icon icon-header icon-cabinet"></i><br/>
						Rechnungsnummer
					</div>

					<ul class="items">
            <editable-input-row v-model="page1.table1.invoicenumber"
              :updateInputValue="updateRowValue"
              editing="false"
              field="Rechnungsnummer" />
					</ul>
				</div>

				<div class="component">
					<div class="component-header">
						<i class="icon icon-header icon-calendar"></i><br/>
						Abrechnungszeitraum
					</div>
					<ul class="items">
						<editable-input-row v-model="page1.table1.Abrechungszeitraum"
              :updateInputValue="updateRowValue"
              editing="false"
              field="Abrechungszeitraum"
              format="text" />
					</ul>
				</div>

				<div class="component">
					<div class="component-header">
						<i class="icon icon-header icon-coins"></i><br/>
						{{ commons.address.position_paid_amount }} brutto
					</div>
					<ul class="items">
            <!-- <pre>{{ page1.table1.grossamount_paid_amount }}</pre> -->
            <editable-input-row v-model="page1.table1.grossamount_paid_amount"
              :updateInputValue="updateRowValue"
              editing="false"
              field="Zahlbetrag"
              format="currency"
              suffix="EUR" />
					</ul>
				</div>
			</div>
			<!--End Key components -->

			<!--Begin upper part of the letter -->
			<div class="energicos-letter">
				<p class="salutation">{{ commons.address.contactperson }},</p>
				<p>{{ commons.address.salutation_text }}</p>
			</div>
			<!--End upper part of the letter -->

			<!--Start components cluster -->
			<div class="energicos_components_cluster">
				<div class="cluster">
					<div class="cluster-header">Position</div>
					<ul class="items">
            <li v-for="item in page1.table2.position"
              :key="item.id"
              class="item last" style="text-align:left;">
              {{item.value}}
            </li>
					</ul>
				</div>

				<div class="cluster">
					<div class="cluster-header">Erläuterung</div>
					<ul class="items">
            <editable-input-row v-for="item in page1.table2.explanation"
              :key="item.id"
              v-bind:value="item.value"
              :updateInputValue="updateRowValue"
              v-bind:field="item.key"
              editing="false"
              format="text" style="text-align:left;"/>
					</ul>
				</div>

				<div class="cluster">
					<div class="cluster-header">Betrag Netto</div>
					<ul class="items">
            <editable-input-row v-for="item in page1.table2.netamount"
              :key="item.id"
              v-bind:value="item.value"
              :updateInputValue="updateRowValue"
              v-bind:field="item.key"
              editing="false"
              format="currency" style="text-align:right;"/>
					</ul>
				</div>

				<div class="cluster">
					<div class="cluster-header">Umsatzsteuer</div>
					<ul class="items">
            <editable-input-row v-for="item in page1.table2.value_added_tax"
              :key="item.id"
              v-bind:value="item.value"
              :updateInputValue="updateRowValue"
              v-bind:field="item.key"
              editing="false"
              format="currency"  style="text-align:right;"/>
					</ul>
				</div>

				<div class="cluster">
					<div class="cluster-header">Steuersatz</div>
					<ul class="items">
            <editable-input-row v-for="item in page1.table2.tax_rate"
              :key="item.id"
              v-bind:value="item.value"
              :updateInputValue="updateRowValue"
              v-bind:field="item.key"
              editing="false"
              format="percentage" />
					</ul>
				</div>

				<div class="cluster">
					<div class="cluster-header">Betrag brutto</div>
					<ul class="items">
            <editable-input-row v-for="item in page1.table2.grossamount"
              :key="item.id"
              v-bind:value="item.value"
              :updateInputValue="updateRowValue"
              v-bind:field="item.key"
              editing="false"
              format="currency" style="text-align:right;"/>
					</ul>
				</div>

			</div>
			<!--End components cluster -->

			<!--Begin lower part of the letter -->
			<div class="energicos-letter">
				<p>{{commons.address.SEPA_Lastschriftmandat || ''}}</p>
        <p>{{commons.address.IBAN || ''}}</p>
        <p v-if="commons.address.debabsch_front_date">
          Ihr monatlicher Abschlag seit {{ commons.address.debabsch_front_date | dateFilter}} beträgt {{commons.address.debabsch_front_amount| numberFilter}} EUR brutto.
          In dem Abschlag sind {{commons.address.debabsch_front_taxamount| numberFilter}} EUR Umsatzsteuer enthalten ({{commons.address.debabsch_front_tax| percentageFilter}}).
        </p>
			</div>
			<!--End lower part of the letter -->

      <app-footer></app-footer>

    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

import Logo from '@/components/Header/Logo';
import Address from '@/components/Header/Address';
import Footer from '@/components/Footer/Footer';
import InputEditable from '@/components/Commons/InputEditable';
import DateInputEditable from '@/components/Commons/DateEditable';

function onCreate() {
  this.getInvoiceData(this.$route.params.id);
}

export default {
  name: 'Page1',
  components: {
    'header-logo': Logo,
    'header-address': Address,
    'app-footer': Footer,
    'editable-input-row': InputEditable,
    'editable-date-row': DateInputEditable
  },
  computed: mapGetters([
    'page1',
    'page3',
    'commons'
  ]),
  methods: {
    ...mapActions(['getInvoiceData', 'updateInputValue']),
    updateRowValue(field, value) {
      this.updateInputValue({ field, value });
    }
  },
  created: onCreate
};
</script>

<style scoped lang="scss">
  li:nth-child(4n+4) {
    font-family: 'Energicos-bold';
  }
</style>
