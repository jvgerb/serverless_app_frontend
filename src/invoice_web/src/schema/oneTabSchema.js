export default {
  groups: [
    {
      fields: [
        {
          type: 'input',
          inputType: 'text',
          label: 'invoice_id',
          model: 'invoice_id',
          placeholder: 'Your invoice id',
          featured: true,
          required: true,
          validator: 'string'
        },
        {
          type: 'input',
          inputType: 'datetime',
          label: 'payment_date_latest',
          model: 'payment_date_latest',
          placeholder: 'Your Payment date latestl',
          format: 'YYYY-MM-DD hh:mm:ss',
          featured: true,
          required: true,
          validator: 'date'
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'invoicenumber',
          model: 'invoicenumber',
          placeholder: 'Your invoicenumber',
          featured: true,
          required: true,
          validator: 'string'
        },
        {
          type: 'input',
          inputType: 'date',
          label: 'revision',
          model: 'revision',
          placeholder: 'Your Revision',
          format: 'YYYY-MM-DD',
          featured: true,
          required: true,
          validator: 'date'
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'propertynumber',
          model: 'propertynumber',
          placeholder: 'Your propertynumber',
          featured: true,
          validator: 'string'
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'property_address',
          model: 'property_address',
          placeholder: 'Your property address',
          featured: true,
          validator: 'string'
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'property_city_postal',
          model: 'property_city_postal',
          placeholder: 'Your property city postal',
          featured: true,
          validator: 'string'
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'contractsnumber',
          model: 'contractsnumber',
          placeholder: 'Your contractsnumber',
          featured: true,
          validator: 'string'
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'invoice_title',
          model: 'invoice_title',
          placeholder: 'Your invoice_title',
          featured: true,
          validator: 'string'
        },
        {
          type: 'input',
          inputType: 'date',
          label: 'invoice_from',
          model: 'invoice_from',
          placeholder: 'Your invoice_from',
          format: 'YYYY-MM-DD',
          featured: true,
          validator: 'date'
        },
        {
          type: 'input',
          inputType: 'date',
          label: 'invoice_to',
          model: 'invoice_to',
          placeholder: 'Your invoice_to',
          format: 'YYYY-MM-DD',
          featured: true,
          validator: 'date'
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'histmonth_from',
          model: 'histmonth_from',
          placeholder: 'Your histmonth_from',
          featured: true,
          validator: 'string'
        },
        {
          type: 'input',
          inputType: 'date',
          label: 'invoice_date',
          model: 'invoice_date',
          placeholder: 'Your invoice_date',
          format: 'YYYY-MM-DD',
          featured: true,
          validator: 'date'
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'debitorennummer',
          model: 'debitorennummer',
          placeholder: 'Your Debitorennummer',
          featured: true,
          validator: 'string'
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'customer_name',
          model: 'customer_name',
          placeholder: 'Your customer_name',
          featured: true,
          validator: 'string'
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'customer_address',
          model: 'customer_address',
          placeholder: 'Your customer_address',
          featured: true,
          validator: 'string'
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'customer_city_postal',
          model: 'customer_city_postal',
          placeholder: 'Your customer_city_postal',
          featured: true,
          validator: 'string'
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'KD_E_Mail',
          model: 'kd_e_mail',
          placeholder: 'Your KD_E_Mail',
          featured: true,
          validator: 'string'
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'contactperson',
          model: 'contactperson',
          placeholder: 'Your contactperson',
          featured: true,
          validator: 'string'
        },
        {
          type: 'input',
          inputType: 'number',
          label: 'debabsch_front_amount',
          model: 'debabsch_front_amount',
          placeholder: 'Your debabsch_front_amount',
          featured: true,
          validator: 'double'
        },
        {
          type: 'input',
          inputType: 'date',
          label: 'debabsch_front_date',
          model: 'debabsch_front_date',
          placeholder: 'Your debabsch_front_date',
          format: 'YYYY-MM-DD',
          featured: true,
          validator: 'date'
        },
        {
          type: 'input',
          inputType: 'number',
          label: 'debabsch_front_taxamount',
          model: 'debabsch_front_taxamount',
          placeholder: 'Your debabsch_front_taxamount',
          featured: true,
          validator: 'double'
        },
        {
          type: 'input',
          inputType: 'number',
          label: 'debabsch_front_tax',
          model: 'debabsch_front_tax',
          placeholder: 'Your debabsch_front_tax',
          featured: true,
          validator: 'double'
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'c_o',
          model: 'c_o',
          placeholder: 'Your c_o',
          featured: true,
          validator: 'string'
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'ir_name',
          model: 'ir_name',
          placeholder: 'Your ir_name',
          featured: true,
          validator: 'string'
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'ir_address',
          model: 'ir_address',
          placeholder: 'Your ir_address',
          featured: true,
          validator: 'string'
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'ir_city_postal',
          model: 'ir_city_postal',
          placeholder: 'Your ir_city_postal',
          featured: true,
          validator: 'string'
        },
        {
          type: 'textArea',
          inputType: 'text',
          label: 'salutation_text',
          model: 'salutation_text',
          placeholder: 'Your salutation_text',
          featured: true,
          validator: 'string'
        },
        {
          type: 'textArea',
          inputType: 'text',
          label: 'sepa_lastschriftmandat',
          model: 'sepa_lastschriftmandat',
          placeholder: 'Your sepa_lastschriftmandat',
          featured: true,
          validator: 'string'
        },
        {
          type: 'textArea',
          inputType: 'text',
          label: 'iban',
          model: 'iban',
          placeholder: 'Your iban',
          featured: true,
          validator: 'string'
        }
      ]
    }
  ]
};
