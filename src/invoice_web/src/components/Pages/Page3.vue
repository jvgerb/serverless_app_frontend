<template>
  <div class="utility-bill-container" v-if="commons.address.productelement_pe2 && commons.address.productelement_pe2 !== ''">
		<div class="utility-bill-content">
      <!--Start the header -->
      <header-logo></header-logo>

      <div class="key-area">
				<p><span class="energicos-important">Kundenname:</span> {{commons.address.customer_name}} <br/>
				<span class="energicos-important">Kundenanschrift:</span> {{ commons.address.customer_address }}, {{ commons.address.customer_city_postal }}<br/>
				<span class="energicos-important">Vertragsnummer:</span> {{page1.table1.contractsnumber}} <br/>
				<span class="energicos-important">Debitorennummer:</span> {{commons.address.debitorennummer}} </p><br/>

				<p><span class="energicos-important">Objektnummer:</span> {{page1.table1.propertynumber}}<br/>
					<span class="energicos-important">Lieferadresse:</span> {{commons.address.property_address}}, {{commons.address.property_city_postal}}<br/>
					<span class="energicos-important">Rechnungsnummer:</span> {{page1.table1.invoicenumber}}
				</p>

				<p class="current-page">Seite 3 von 4</p>

			</div>

      <header-address></header-address>

      <!--START SECTION 1 COMPONENTS -->
			<div class="energicos-content">
				<h5 class="main-title">Verbrauchsermittlung und Rechnungspositionen {{commons.address.productelement_pe2 || 'Warmwasser'}}</h5>
				<h6 class="sub-title">Verbräuche im Abrechnungszeitraum</h6>
			</div>

			<div class="energicos_key_components_6cols">
				<!--Start Zähler Nummer Column -->
				<div class="component">
					<div class="component-header2">
						Zähler<br/>
						Nummer
					</div>
					<ul class="items">
						<editable-input-row v-for="item in page3.table1.meternumber"
              :key="item.id"
              v-bind:value="item.value"
              :updateInputValue="updateRowValue"
              v-bind:field="item.key"
              editing="false"
              format="text" />
					</ul>
				</div>
				<!--End Zähler Nummer Column -->


				<!--Start ZEITRAUM Column-->
				<div class="component">
					<div class="component-header2">
						Zeitraum
						<!--Start 2 simple columns -->
						<div class="sub-columns">
							<div class="side-1">von</div>
							<div class="side-2">bis</div>
						</div>
						<!--End 2 simple columns -->
					</div>
					<div class="sub-columns">
						<div class="side-1">
							<ul class="items">
								<editable-date-row v-for="item in page3.table1.billing_from"
                  :key="item.id"
                  v-bind:value="item.value"
                  :updateInputValue="updateRowValue"
                  v-bind:field="item.key"
                  editing="false"
                  format="date" />
							</ul>
						</div>
						<div class="side-2">
							<ul class="items">
								<editable-date-row v-for="item in page3.table1.billing_to"
                  :key="item.id"
                  v-bind:value="item.value"
                  :updateInputValue="updateRowValue"
                  v-bind:field="item.key"
                  editing="false"
                  format="date" />
							</ul>
						</div>
					</div>
				</div>
				<!--End ZEITRAUM Column-->

				<!--Start Zählerstand Column-->
				<div class="component">
					<div class="component-header2">
						Zählerstand
						<!--Start 2 simple columns -->
						<div class="sub-columns">
							<div class="side-1">von</div>
							<div class="side-2">bis</div>
						</div>
						<!--End 2 simple columns -->
					</div>
					<div class="sub-columns">
						<div class="side-1">
							<ul class="items">
								<editable-input-row v-for="item in page3.table1.meterreading_from"
                  :key="item.id"
                  v-bind:value="item.value"
                  :updateInputValue="updateRowValue"
                  v-bind:field="item.key"
                  editing="false"
                  format="meter" />
							</ul>
						</div>
						<div class="side-2">
							<ul class="items">
								<editable-input-row v-for="item in page3.table1.meterreading_to"
                  :key="item.id"
                  v-bind:value="item.value"
                  :updateInputValue="updateRowValue"
                  v-bind:field="item.key"
                  editing="false"
                  format="meter" />
							</ul>
						</div>
					</div>
				</div>
				<!--End Zählerstand Column-->

				<!--Start "Verbrauch in kWh" Column -->

				<div class="component">
					<div class="component-header2">
						Verbrauch<br/>
						in {{ commons.address.consumptionunit_pe2 }}
					</div>
					<ul class="items" v-if="commons.address.consumptionunit_pe2 === 'MWh'">
						<editable-input-row v-for="item in page3.table1.consumption_in_consumptionunit"
              :key="item.id"
              v-bind:value="item.value"
              :updateInputValue="updateRowValue"
              v-bind:field="item.key"
              editing="false"
              format="mwh" />
					</ul>
					<ul class="items" v-else>
						<editable-input-row v-for="item in page3.table1.consumption_in_consumptionunit"
              :key="item.id"
              v-bind:value="item.value"
              :updateInputValue="updateRowValue"
              v-bind:field="item.key"
              editing="false"
              format="nodecimalplaces" />
					</ul>
				</div>
				<!--End "Verbrauch in kWh" Column -->

				<!--Start "Umrechung Faktor" Column -->
				<div class="component">
					<div class="component-header2">
						Umrechnungs-<br/>
						faktor
					</div>
					<ul class="items">
						<editable-input-row v-for="item in page3.table1.factor_to"
              :key="item.id"
              v-bind:value="item.value"
              :updateInputValue="updateRowValue"
              v-bind:field="item.key"
              editing="false"
              format="factor" />
					</ul>
				</div>
				<!--End "Umrechung Faktor" Column -->

				<!--Start "Verbrauch in MWh" Column -->
				<div class="component">
					<div class="component-header2">
						Verbrauch<br/>
						in MWh
					</div>
					<ul class="items">
						<editable-input-row v-for="item in page3.table1.consumption_in_mwh"
              :key="item.id"
              v-bind:value="item.value"
              :updateInputValue="updateRowValue"
              v-bind:field="item.key"
              editing="false"
              format="mwh" />
					</ul>
				</div>
				<!--End "Verbrauch in MWh" Column -->
			</div>
			<!--END SECTION 1 COMPONENTS -->

			<!--START SECTION 2 COMPONENTS -->
			<div class="energicos-content">
				<h6 class="sub-title">Verbrauchskosten im Abrechnungszeitraum</h6>
			</div>

			<div class="energicos_key_components_5cols">

				<!--Start ZEITRAUM Column-->
				<div class="component">
					<div class="component-header2">
						Zeitraum
						<!--Start 2 simple columns -->
						<div class="sub-columns">
							<div class="side-1">von</div>
							<div class="side-2">bis</div>
						</div>
						<!--End 2 simple columns -->
					</div>
					<div class="sub-columns">
						<div class="side-1">
							<ul class="items">
								<editable-date-row v-for="item in page3.table2.billing_from"
                  :key="item.id"
                  v-bind:value="item.value"
                  :updateInputValue="updateRowValue"
                  v-bind:field="item.key"
                  editing="false"
                  format="date" />
							</ul>
						</div>
						<div class="side-2">
							<ul class="items">
								<editable-date-row v-for="item in page3.table2.billing_to"
                  :key="item.id"
                  v-bind:value="item.value"
                  :updateInputValue="updateRowValue"
                  v-bind:field="item.key"
                  editing="false"
                  format="date" />
							</ul>
						</div>
					</div>
				</div>
				<!--End ZEITRAUM Column-->

				<!--Start "Verbrauchsmenge in MWh" Column -->
				<div class="component">
					<div class="component-header2">
						Verbrauchsmenge<br/>
						in MWh
					</div>
					<ul class="items">
						<editable-input-row v-for="item in page3.table2.consumption_in_mwh"
              :key="item.id"
              v-bind:value="item.value"
              :updateInputValue="updateRowValue"
              v-bind:field="item.key"
              editing="false"
              format="mwh" />
					</ul>
				</div>
				<!--End "Verbrauchsmenge in MWh" Column -->

				<!--Start "Abrechnungspreis in EUR / MWh" Column-->
				<div class="component">
					<div class="component-header2">
						Abrechnungspreis<br/>
						in EUR / MWh
					</div>
					<ul class="items">
						<editable-input-row v-for="item in page3.table2.consumptionprice"
              :key="item.id"
              v-bind:value="item.value"
              :updateInputValue="updateRowValue"
              v-bind:field="item.key"
              editing="false"
              format="number" />
					</ul>
				</div>
				<!--End "Abrechnungspreis in EUR / MWh" Column-->

				<!--Start "Preisänderungs Faktor" Column -->
				<div class="component">
					<div class="component-header2">
						Preisänderungs-<br/>
						faktor
					</div>
					<ul class="items">
						<editable-input-row v-for="item in page3.table2.pricechangefactor_to"
              :key="item.id"
              v-bind:value="item.value"
              :updateInputValue="updateRowValue"
              v-bind:field="item.key"
              editing="false"
              format="factor" />
					</ul>
				</div>
				<!--End "Preisänderungs Faktor" Column -->

				<!--Start "Verbrauchskosten netto" Column -->
				<div class="component">
					<div class="component-header2">
						Verbrauchskosten<br/>
						netto in EUR
					</div>
					<ul class="items">
						<editable-input-row v-for="item in page3.table2.consumptioncosts"
              :key="item.id"
              v-bind:value="item.value"
              :updateInputValue="updateRowValue"
              v-bind:field="item.key"
              editing="false"
              format="number" />
					</ul>
				</div>
				<!--End "Verbrauchskosten netto" Column -->
			</div>
			<!--END SECTION 2 COMPONENTS -->

      <!--Begin lower part of the capacitypriceunit -->
			<div class="energicos-letter capacitypriceunit">
        <p v-if="commons.address.capacitypriceunit_pe2">
          {{ commons.address.capacitypriceunit_pe2 || '' }}
        </p>
			</div>
      <!--End lower part of the capacitypriceunit -->

      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>

import Logo from '@/components/Header/Logo';
import Address from '@/components/Header/Address';
import Footer from '@/components/Footer/Footer';

import { mapGetters, mapActions } from 'vuex';
import InputEditable from '@/components/Commons/InputEditable';
import DateInputEditable from '@/components/Commons/DateEditable';

export default {
  name: 'Page3',
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
  }
};
</script>

<style scoped lang="scss">

  .capacitypriceunit {
    font-family: 'Energicos-bold';
  }

  li.item:last-child {
      font-family: 'Energicos-bold' !important;
  }
  li.table-item:last-child {
    font-family: 'Energicos-bold' !important;
  }

</style>
