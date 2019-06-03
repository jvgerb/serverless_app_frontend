import { getAPIEndpoint } from '@/services/energicosEndpoint';

import { Auth, Cache } from 'aws-amplify';

export const getToken = async () => {
  const federatedInfo = Cache.getItem('federatedInfo');

  if (federatedInfo) {
    const { token } = federatedInfo;
    return token;
  } else {
    const { idToken: { jwtToken } } = await Auth.currentSession();
    return jwtToken;
  }
};

const getOptions = async (mimeType = 'application/json') => {
  const token = await getToken();
  const options = {
    method: 'GET',
    mode: 'cors',
    headers: {
      Accept: mimeType,
      'Content-Type': mimeType,
      Authorization: `Bearer ${token}`
    },
    cache: 'default'
  };

  return options;
};

const API_URL = getAPIEndpoint();

export const getInvoiceDataService = async (invoiceId) => {
  const options = await getOptions();

  const response = await fetch(`${API_URL}/v1/invoices/data/${invoiceId}`, options);
  const { data = [] } = await response.json();
  return data[0];
};

export const getInvoicesPaginationService = async (type) => {
  const options = await getOptions();
  const response = await fetch(`https://api.acqeos.net/v1/invoices/data/filters/${type}?sort=&page=1&per_page=999999`, options);
  const data = await response.json();
  return data;
};

export const getInvoicesCountByStatusService = async (status, type) => {
  const options = await getOptions();
  const response = await fetch(`${API_URL}/v1/invoices/data/type-status/${type}/${status}`, options);
  const { count = 0 } = await response.json();
  return count;
};

export const saveInvoiceDataService = async (invoice) => {
  const typeList = ['release', 'dryRun'];
  const options = await getOptions();

  /* eslint no-param-reassign: ["error", { "props": false }] */
  const result = typeList.map(async (type) => {
    invoice.type = type;
    invoice.status = 'done';
    invoice.sent = false;

    const response = await fetch(`${API_URL}/v1/invoices/data`, Object.assign({}, options, {
      method: 'POST',
      body: JSON.stringify(invoice)
    }));

    const invoiceData = await response.json();
    return invoiceData;
  });

  return result;
};

export const generatePDFService = async (invoice) => {
  const options = await getOptions();
  const response = await fetch(`${API_URL}/v1/invoices/queue`, Object.assign({}, options, {
    method: 'POST',
    body: JSON.stringify(invoice)
  }));
  const invoiceData = await response.json();
  return invoiceData;
};

export const updateInvoices = async (invoices) => {
  const options = await getOptions();
  const response = await fetch(`${API_URL}/v1/invoices/data/batch-process`, Object.assign({}, options, {
    method: 'POST',
    body: JSON.stringify(invoices)
  }));
  const invoiceData = await response.json();
  return invoiceData;
};

export const generateLocalPDF = async (invoices) => {
  const options = await getOptions(invoices.length > 1 ? 'application/zip' : 'application/pdf');
  const response = await fetch(`${API_URL}/v1/invoices/data/batch-process?ids=${invoices}`, options);
  const data = await response.blob();

  return data;
};
