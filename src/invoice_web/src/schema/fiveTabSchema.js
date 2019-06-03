export default {
  groups: [
    {
      fields: [
        {
          type: 'input',
          inputType: 'number',
          label: 'Consumption',
          model: 'consumption',
          placeholder: 'Your consumption',
          featured: true,
          validator: 'double'
        },
        {
          type: 'input',
          inputType: 'number',
          label: 'Energieentgelte',
          model: 'energieentgelte',
          placeholder: 'Your energieentgelte',
          featured: true,
          validator: 'double'
        },
        {
          type: 'input',
          inputType: 'number',
          label: 'Gasprice_mittel_jahr',
          model: 'gasprice_mittel_jahr',
          placeholder: 'Your gasprice_mittel_jahr',
          featured: true,
          validator: 'double'
        },
        {
          type: 'input',
          inputType: 'number',
          label: 'Consumption_je_m',
          model: 'consumption_je_m',
          placeholder: 'Your consumption_je_m',
          featured: true,
          validator: 'double'
        },
        {
          type: 'input',
          inputType: 'number',
          label: 'Anteil_warmwasser',
          model: 'anteil_warmwasser',
          placeholder: 'Your anteil_warmwasser',
          featured: true,
          validator: 'double'
        },
        {
          type: 'input',
          inputType: 'number',
          label: 'Consumption_ref',
          model: 'consumption_ref',
          placeholder: 'Your consumption_ref',
          featured: true,
          validator: 'double'
        },
        {
          type: 'input',
          inputType: 'number',
          label: 'Energieentgelte_ref',
          model: 'energieentgelte_ref',
          placeholder: 'Your energieentgelte_ref',
          featured: true,
          validator: 'double'
        },
        {
          type: 'input',
          inputType: 'number',
          label: 'Gasprice_mittel_jahr_ref',
          model: 'gasprice_mittel_jahr_ref',
          placeholder: 'Your gasprice_mittel_jahr_ref',
          featured: true,
          validator: 'double'
        },
        {
          type: 'input',
          inputType: 'number',
          label: 'Consumption_je_m_ref',
          model: 'consumption_je_m_ref',
          placeholder: 'Your consumption_je_m_ref',
          featured: true,
          validator: 'double'
        },
        {
          type: 'input',
          inputType: 'date',
          label: 'Billing_from_ref',
          model: 'billing_from_ref',
          placeholder: 'Your billing_from_ref',
          format: 'YYYY-MM-DD',
          featured: true,
          validator: 'date'
        },
        {
          type: 'input',
          inputType: 'date',
          label: 'Billing_to_ref',
          model: 'billing_to_ref',
          placeholder: 'Your billing_to_ref',
          format: 'YYYY-MM-DD',
          featured: true,
          validator: 'date'
        },
        {
          type: 'input',
          inputType: 'number',
          label: 'Value_added_tax_invoice_total',
          model: 'value_added_tax_invoice_total',
          placeholder: 'Your value_added_tax_invoice_total',
          featured: true,
          validator: 'double'
        },
        {
          type: 'input',
          inputType: 'number',
          label: 'Value_added_tax_advanced_payment',
          model: 'value_added_tax_advanced_payment',
          placeholder: 'Your value_added_tax_advanced_payment',
          featured: true,
          validator: 'double'
        },
        {
          type: 'input',
          inputType: 'number',
          label: 'Value_added_tax_fees',
          model: 'value_added_tax_fees',
          placeholder: 'Your value_added_tax_fees',
          featured: true,
          validator: 'double'
        },
        {
          type: 'input',
          inputType: 'number',
          label: 'Value_added_tax_paid_amount',
          model: 'value_added_tax_paid_amount',
          placeholder: 'Your value_added_tax_paid_amount',
          featured: true,
          validator: 'double'
        },
        {
          type: 'input',
          inputType: 'number',
          label: 'Tax_rate_invoice_total',
          model: 'tax_rate_invoice_total',
          placeholder: 'Your tax_rate_invoice_total',
          featured: true,
          validator: 'double'
        }
      ]
    }
  ]
};
