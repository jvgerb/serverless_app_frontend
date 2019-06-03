import moment from 'moment';

const getPage1Table2 = (state) => {
  const { invoiceData } = state;

  const columns = ['position', 'explanation', 'netamount', 'value_added_tax', 'tax_rate', 'grossamount'];
  const rows = ['usercosts', 'basiccosts', 'discount', 'invoice_total', 'advanced_payment', 'fees', 'credits', 'paid_amount'];

  const table2 = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const col of columns) {
    table2[col] = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const row of rows) {
      const key = `${col}_${row}`;
      if (key === 'position_usercosts') {
        table2[col].push({ key, value: invoiceData.position_consumptioncosts || '' });
      } else if (key === 'position_basiccosts') {
        table2[col].push({ key, value: invoiceData.position_capacitycosts || '' });
      } else {
        table2[col].push({ key, value: invoiceData[`${col}_${row}`] || '' });
      }
    }
  }

  for (const row of rows) {
    const key = `value_added_tax_${row}`;

    const existingKey = table2['value_added_tax'].map(item => item.key);

    if (!existingKey.includes(key)) {
      table2.push({ key, value: invoiceData[`value_added_${row}`] || '' });
    } else {
      let index = 0;
      for (const element of table2['value_added_tax']) {
        if (element.key === key) {
          table2['value_added_tax'][index].value +=  invoiceData[`value_added_${row}`] || '';
        }

        index ++
      }
    }
  }

  return table2;
};

const clearEmptyLines = (dataByColumn) => {
  const indexesToDelete = [];
  const keys = Object.keys(dataByColumn);

  if (keys.length === 0) return;

  let counter = 0;
  let maxLength = 0;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    maxLength = Math.max(maxLength, dataByColumn[key].length);
  }

  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < keys.length; j++) {
      const key = keys[j];
      const currentItem = dataByColumn[key][i];
      if (!currentItem || currentItem.value === null || currentItem.value === '') {
        counter += 1;
      } else {
        break;
      }
    }
    if (counter === keys.length) indexesToDelete.push(i);
    counter = 0;
  }

  // Guarantee that we remove the latest positions first so the other indexes won't get affected
  indexesToDelete.reverse();

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    for (let j = 0; j < indexesToDelete.length; j++) {
      const index = indexesToDelete[j];
      if (dataByColumn[key][index] !== undefined) dataByColumn[key].splice(index, 1);
    }
  }
};

const isTableEmpty = (columnsData) => {
  let emptyRows = 0;

  Object.keys(columnsData).forEach((key) => {
    if (columnsData[key].length === 0) emptyRows += 1;
  });

  return emptyRows === Object.keys(columnsData).length;
};

const getPage1Table1 = (state) => {
  // Table1
  const {
    contractsnumber,
    propertynumber,
    // eslint-disable-next-line
    invoicenumber,
    // eslint-disable-next-line
    invoice_from,
    // eslint-disable-next-line
    invoice_to
  } = state.invoiceData;

  const page1Table2 = getPage1Table2(state);

  const betragBruttoColumn =
    page1Table2.grossamount && page1Table2.grossamount.filter(item => item.key === 'grossamount_paid_amount');

  // eslint-disable-next-line
  const rechnungVonDate = moment(invoice_from).format('DD.MM.YYYY');
  // eslint-disable-next-line
  const rechnungBis = moment(invoice_to).format('DD.MM.YYYY');
  const Abrechungszeitraum = `${rechnungVonDate} - ${rechnungBis}`;

  return {
    contractsnumber,
    propertynumber,
    invoicenumber,
    Abrechungszeitraum,
    grossamount_paid_amount: betragBruttoColumn && betragBruttoColumn[0] ? betragBruttoColumn[0].value : null
  };
};

const getMixedColumnsData = (invoiceData, columns, pageFilter, tablePrefix) => {
  const invoiceDataKeys = Object.keys(invoiceData);
  if (invoiceDataKeys.length === 0) return {};

  const dataByColumn = {};

  /**
   * Data comes from the server completely unstructured.
   * The code below structure the data by column name and put it inside the objects that will populate
   * the tables.
   *
   * An easy example for the column Zeitraum:
   *
   * The current visualization is something like this
   *
   *            Zeitraum
   *     von                 bis
   *  01.01.2018            31.03.2018
   *  01.04.2018            30.06.2018
   *  01.07.2018            30.09.2018
   *  01.10.2018            31.12.2018
   *
   * So, every item comes separated from the database and we need to put them in their respective structure
   * to be filled as a row.
   *
   * Every table has a prefix, so with that prefix, we infer the number of rows.
   *
   * For example: Zeitraum_bis_PE2_ap1, Zeitraum_bis_PE2_ap2, Zeitraum_bis_PE2_ap3, Zeitraum_bis_PE2_ap4
   * The base name of the column is Zeitraum, we know there's a von and bis, so there will be two subcolumns
   * and since there are four items, there will be 4 rows.
   *
   */
  invoiceDataKeys.forEach((key) => {
    for (let i = 0; i < columns.length; i++) {
      const columnName = columns[i];
      const regex = new RegExp(`^${columnName}_`);
      const splittedName = key.split('_');

      if (key.match(regex) &&
          splittedName[splittedName.length - 1].startsWith(tablePrefix) &&
          key.indexOf(pageFilter) !== -1) {
        let type = null;

        if (key.includes('from')) type = 'from';
        if (key.includes('to')) type = 'to';

        if (type) {
          dataByColumn[`${columnName}_${type}`] = dataByColumn[`${columnName}_${type}`] || [];
          dataByColumn[`${columnName}_${type}`].push({ key, value: invoiceData[key] });
        } else {
          dataByColumn[columnName] = dataByColumn[columnName] || [];
          dataByColumn[columnName].push({ key, value: invoiceData[key] });
        }
      }
    }
  });

  /**
   * Since we use pattern matching to infer the names of the columns and the positions that they will be by
   * the key or name, we must guarantee that those fields are in order by name.
   * For example:
   * Zeitraum_bis_PE2_ap3 must come before Zeitraum_bis_PE2_ap4
   */
  Object.keys(dataByColumn).forEach((key) => {
    dataByColumn[key] = dataByColumn[key].sort((a, b) => {
      if (a.key > b.key) return 1;
      if (a.key < b.key) return -1;
      return 0;
    });
  });

  return dataByColumn;
};

const fillEmptyCols = (columnsData, emptyColumns) => {
  emptyColumns.forEach((col) => {
    if (columnsData[col]) {
      columnsData[col].push({
        key: 'Total',
        value: ''
      });
    }
  });
};

const getPage2Table1 = (state) => {
  const { invoiceData } = state;
  const columns = [
    'billing',
    'consumption_in_consumptionunit',
    'meternumber',
    'meterreading',
    'factor',
    'consumption_in_mwh'
  ];

  const columnsData = getMixedColumnsData(invoiceData, columns, 'pe1', 'p');
  clearEmptyLines(columnsData);

  if (!isTableEmpty(columnsData)) {
    const emptyColumns = [
      'billing_from',
      'billing_to',
      'factor',
      'meterreading_from',
      'meterreading_to'
    ];

    if (columnsData.meterreading_from.length < columnsData.meternumber.length) {
      columnsData.meterreading_from.push({
        key: 'Total',
        value: ''
      });
    }

    columnsData.factor_to.push({
      key: 'Total',
      value: ''
    });

    columnsData.meternumber.push({
      key: 'Total',
      value: 'Total'
    });

    columnsData.consumption_in_consumptionunit.push({
      key: 'Total',
      value: invoiceData.total_consumption_in_consumptionunit_pe1 ? invoiceData.total_consumption_in_consumptionunit_pe1 : 0
    });

    columnsData.consumption_in_mwh.push({
      key: 'Total',
      value: invoiceData.total_consumption_in_mwh_pe1 ? invoiceData.total_consumption_in_mwh_pe1 : 0
    });

    fillEmptyCols(columnsData, emptyColumns);
  }

  return columnsData;
};

const getPage2Table2 = (state) => {
  const { invoiceData } = state;
  const columns = [
    'billing',
    'consumption_in_mwh',
    'pricechangefactor',
    'consumptionprice',
    'consumptioncosts',
    'capacity_in_mwh'
  ];

  const columnsData = getMixedColumnsData(invoiceData, columns, 'pe1', 'ap');
  clearEmptyLines(columnsData);

  if (!isTableEmpty(columnsData)) {
    const emptyColumns = [
      'billing_to',
      'pricechangefactor',
      'capacity_in_mwh'
    ];

    columnsData.pricechangefactor_to.push({
      key: 'Total',
      value: 'Total'
    });

    columnsData.billing_from.push({
      key: 'Total',
      value: 'Total'
    });

    columnsData.consumptionprice.push({
      key: 'Total',
      value: invoiceData.total_consumptionprice_pe1 ? invoiceData.total_consumptionprice_pe1 : 0
    });

    columnsData.consumptioncosts.push({
      key: 'Total',
      value: invoiceData.total_consumptioncosts_pe1 ? invoiceData.total_consumptioncosts_pe1 : 0
    });

    columnsData.consumption_in_mwh.push({
      key: 'Total',
      value: invoiceData.total_consumption_in_mwh_pe1 ? invoiceData.total_consumption_in_mwh_pe1 : 0
    });

    fillEmptyCols(columnsData, emptyColumns);
  }

  return columnsData;
};

const getPage2Table3 = (state) => {
  const { invoiceData } = state;
  const columns = [
    'billing',
    'capacity_in_mwh',
    'capacityprice',
    'pricechangefactor',
    'capacitycosts'
  ];

  const columnsData = getMixedColumnsData(invoiceData, columns, 'pe1', 'gp') || {};
  clearEmptyLines(columnsData);

  Object.keys(columnsData).forEach((item) => {
    columnsData[item] = columnsData[item].slice(0, 2);
  });

  if (!isTableEmpty(columnsData)) {
    const emptyColumns = [
      'billing_to',
      'capacity_in_mwh',
      'pricechangefactor'
    ];

    columnsData.pricechangefactor_to.push({
      key: 'Total',
      value: 'Total'
    });

    columnsData.billing_from.push({
      key: 'Total',
      value: 'Total'
    });

    columnsData.capacityprice.push({
      key: 'Total',
      value: invoiceData.total_capacityprice_pe1 ? invoiceData.total_capacityprice_pe1 : 0
    });

    columnsData.capacitycosts.push({
      key: 'Total',
      value: invoiceData.total_capacitycosts_pe1 ? invoiceData.total_capacitycosts_pe1 : 0
    });

    fillEmptyCols(columnsData, emptyColumns);
  }

  return columnsData;
};

const getPage3Table1 = (state) => {
  const { invoiceData } = state;
  const columns = [
    'meternumber',
    'billing',
    'meterreading',
    'consumption_in_consumptionunit',
    'factor',
    'consumption_in_mwh'
  ];
  // MB2 -> PE2
  const columnsData = getMixedColumnsData(invoiceData, columns, 'pe2', 'p');
  clearEmptyLines(columnsData);

  if (!isTableEmpty(columnsData)) {
    const emptyColumns = [
      'billing_from',
      'billing_to',
      'meterreading_from',
      'meterreading_to',
      'factor'
    ];

    if (columnsData.meterreading_from.length < columnsData.meternumber.length) {
      columnsData.meterreading_from.push({
        key: 'Total',
        value: ''
      });
    }

    columnsData.factor_to.push({
      key: 'Total',
      value: 'Total'
    });

    columnsData.meternumber.push({
      key: 'Total',
      value: 'Total'
    });

    columnsData.consumption_in_consumptionunit.push({
      key: 'Total',
      value: invoiceData.total_consumption_in_consumptionunit_pe2 ? invoiceData.total_consumption_in_consumptionunit_pe2 : 0
    });

    columnsData.consumption_in_mwh.push({
      key: 'Total',
      value: invoiceData.total_consumption_in_mwh_pe2 ? invoiceData.total_consumption_in_mwh_pe2 : 0
    });

    fillEmptyCols(columnsData, emptyColumns);
  }

  return columnsData;
};

const getPage3Table2 = (state) => {
  const { invoiceData } = state;
  const columns = [
    'billing',
    'consumption_in_mwh',
    'pricechangefactor',
    'consumptionprice',
    'consumptioncosts'
  ];
  const columnsData = getMixedColumnsData(invoiceData, columns, 'pe2', 'ap');
  clearEmptyLines(columnsData);

  if (!isTableEmpty(columnsData)) {
    const emptyColumns = [
      'billing_to',
      'pricechangefactor'
    ];

    columnsData.pricechangefactor_to.push({
      key: 'Total',
      value: 'Total'
    });

    columnsData.billing_from.push({
      key: 'Total',
      value: 'Total'
    });

    columnsData.consumption_in_mwh.push({
      key: 'Total',
      value: invoiceData.total_consumption_in_mwh_pe2 ? invoiceData.total_consumption_in_mwh_pe2 : 0
    });

    columnsData.consumptionprice.push({
      key: 'Total',
      value: invoiceData.total_consumptionprice_pe2 ? invoiceData.total_consumptionprice_pe2 : 0
    });

    columnsData.consumptioncosts.push({
      key: 'Total',
      value: invoiceData.total_consumptioncosts_pe2 ? invoiceData.total_consumptioncosts_pe2 : 0
    });

    fillEmptyCols(columnsData, emptyColumns);
  }

  return columnsData;
};

const getAddress = (state) => {
  const {
    contactperson,
    // eslint-disable-next-line camelcase
    invoice_date,
    // eslint-disable-next-line camelcase
    customer_name,
    // eslint-disable-next-line camelcase
    property_address,
    // eslint-disable-next-line camelcase
    customer_city_postal,
    // eslint-disable-next-line camelcase
    customer_address,
    // eslint-disable-next-line camelcase
    kd_e_mail,
    // eslint-disable-next-line camelcase
    productelement_pe1,
    // eslint-disable-next-line camelcase
    sepa_lastschriftmandat,
    // eslint-disable-next-line camelcase
    consumptionunit_pe1,
    // eslint-disable-next-line camelcase
    consumption_in_consumptionunit_pe1_p1,
    // eslint-disable-next-line camelcase
    consumptionunit_pe2,
    // eslint-disable-next-line camelcase
    position_paid_amount,
    // eslint-disable-next-line camelcase
    property_city_postal,
    // eslint-disable-next-line camelcase
    iban,
    // eslint-disable-next-line camelcase
    c_o,
    // eslint-disable-next-line camelcase
    ir_name,
    // eslint-disable-next-line camelcase
    ir_address,
    // eslint-disable-next-line camelcase
    ir_city_postal,
    // eslint-disable-next-line camelcase
    total_capacityprice_pe2,
    // eslint-disable-next-line camelcase
    capacitypriceunit_pe1,
    // eslint-disable-next-line camelcase
    capacityunit_pe1,
    // eslint-disable-next-line camelcase
    productelement_pe2,
    // eslint-disable-next-line camelcase
    billing_from_ref,
    // eslint-disable-next-line camelcase
    billing_to_ref,
    // eslint-disable-next-line camelcase
    invoice_title,
    // eslint-disable-next-line camelcase
    salutation_text,
    // eslint-disable-next-line camelcase
    debabsch_front_date,
    // eslint-disable-next-line camelcase
    debabsch_front_amount,
    // eslint-disable-next-line camelcase
    debabsch_front_tax,
    // eslint-disable-next-line camelcase
    debabsch_front_taxamount,
    // eslint-disable-next-line camelcase
    debitorennummer,
    // eslint-disable-next-line camelcase
    capacitypriceunit_pe2
  } = state.invoiceData;

  return {
    contactperson,
    invoice_date,
    customer_name,
    customer_address,
    customer_city_postal,
    kd_e_mail,
    property_address,
    productelement_pe1,
    sepa_lastschriftmandat,
    consumptionunit_pe1,
    consumption_in_consumptionunit_pe1_p1,
    consumptionunit_pe2,
    position_paid_amount,
    property_city_postal,
    iban,
    c_o,
    ir_name,
    ir_city_postal,
    ir_address,
    total_capacityprice_pe2,
    capacitypriceunit_pe1,
    capacityunit_pe1,
    productelement_pe2,
    billing_from_ref,
    billing_to_ref,
    invoice_title,
    salutation_text,
    debabsch_front_date,
    debabsch_front_amount,
    debabsch_front_tax,
    debabsch_front_taxamount,
    debitorennummer,
    capacitypriceunit_pe2
  };
};

const getters = {
  page1: (state) => {
    const table1 = getPage1Table1(state);
    const table2 = getPage1Table2(state);

    return {
      table1,
      table2
    };
  },
  page2: (state) => {
    const table1 = getPage2Table1(state);
    const table2 = getPage2Table2(state);
    const table3 = getPage2Table3(state);

    return {
      table1,
      table2,
      table3
    };
  },
  page3: (state) => {
    const table1 = getPage3Table1(state);
    const table2 = getPage3Table2(state);

    return {
      table1,
      table2
    };
  },
  page4: (state) => {
    const {
      consumption,
      // eslint-disable-next-line camelcase
      consumption_ref,
      energieentgelte,
      // eslint-disable-next-line camelcase
      energieentgelte_ref,
      // eslint-disable-next-line camelcase
      gasprice_mittel_jahr,
      // eslint-disable-next-line camelcase
      gasprice_mittel_jahr_ref,
      // eslint-disable-next-line camelcase
      anteil_warmwasser,
      // eslint-disable-next-line camelcase
      consumption_je_m_ref,
      // eslint-disable-next-line camelcase
      consumption_je_m
    } = state.invoiceData;

    return {
      consumption,
      consumption_ref,
      energieentgelte,
      energieentgelte_ref,
      gasprice_mittel_jahr,
      gasprice_mittel_jahr_ref,
      consumption_je_m,
      consumption_je_m_ref,
      anteil_warmwasser
    };
  },
  commons: (state) => {
    const address = getAddress(state);
    return {
      address
    };
  },
  invoices_processing: state => state.invoices_processing,
  invoices_processed: state => state.invoices_processed,
  invoices_to_be_processed: state => state.invoices_to_be_processed
};

export default getters;
