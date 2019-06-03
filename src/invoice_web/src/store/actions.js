import swal from 'sweetalert';

import {
  getInvoiceDataService,
  getInvoicesCountByStatusService,
  getInvoicesPaginationService,
  saveInvoiceDataService,
  generatePDFService,
  updateInvoices,
  generateLocalPDF
} from '../services/energicosAPI';

import { normalizeQueueInvoices } from '../services/normalizeData';

const getInvoiceData = ({ commit }, invoiceId) => new Promise(async (resolve) => {
  getInvoiceDataService(invoiceId)
    .then((data) => {
      commit('getInvoiceData', data);
      resolve();
    })
    // eslint-disable-next-line no-console
    .catch(reason => console.log(reason.message));
});

const getInvoicesPagination = ({ commit }, type) => new Promise((resolve) => {
  getInvoicesPaginationService(type)
    .then((data) => {
      commit('getInvoiceData', {
        value: data
      });
      resolve(data);
    })
    // eslint-disable-next-line no-console
    .catch(reason => console.log(reason.message));
});

const getInvoicesCountByStatus = ({ commit }, { status, field, type }) => new Promise((resolve) => {
  getInvoicesCountByStatusService(status, type)
    .then((data) => {
      commit('getInvoicesCount', {
        value: data,
        field
      });
      resolve(data);
    })
    // eslint-disable-next-line no-console
    .catch(reason => console.log(reason.message));
});

const saveInvoiceData = ({ commit }, invoice) => new Promise((resolve, reject) => {
  saveInvoiceDataService(invoice)
    .then((res) => {
      if (res.message && res.message.sqlMessage) {
        swal('Oops!', res.message.sqlMessage, 'error');
        return reject();
      }

      commit('saveInvoiceData', {
        data: invoice
      });
      swal('Success!', 'The invoice data was saved successfully!', 'success');
      return resolve();
    })
    .catch((reason) => {
      // eslint-disable-next-line no-console
      console.log(reason.message);
      swal('Oops!', 'Something happened while saving the invoice!', 'error');
      reject();
    });
});

const generatePDF = ({ commit }, innerHTML) => new Promise((resolve) => {
  generatePDFService(innerHTML)
    .then(() => {
      commit('noUpdateStateAction');
      swal('Success!', 'The invoice data is now being processed!', 'success');
      resolve();
    })
    .catch((reason) => {
      swal('Oops!', 'Something happened while trying to process the invoice!', 'error');
      // eslint-disable-next-line no-console
      console.log(reason.message);
    });
});

const updateHTMLPage = ({ commit }, payload) => {
  commit('updateHTMLPage', payload);
};

const updateInputValue = ({ commit }, payload) => commit('updateInputValue', payload);

const saveInvoiceQueueRelease = ({ commit }, invoices) => new Promise((resolve, reject) => {
  const newInvoices = normalizeQueueInvoices(invoices, 'release');

  updateInvoices(newInvoices)
    .then((res) => {
      if (res.message && res.message.sqlMessage) {
        swal('Oops!', res.message.sqlMessage, 'error');
        return reject();
      }

      commit('saveInvoiceQueueRelease', {
        data: invoices
      });
      swal('Success!', 'The invoice data was saved successfully!', 'success');
      return resolve();
    })
    .catch((reason) => {
      // eslint-disable-next-line no-console
      console.log(reason.message);
      swal('Oops!', 'Something happened while saving the invoice!', 'error');
      reject();
    });
});

const saveInvoiceQueueSend = ({ commit }, invoices) => new Promise((resolve, reject) => {
  const newInvoices = normalizeQueueInvoices(invoices, 'dryRun');

  updateInvoices(newInvoices)
    .then((res) => {
      if (res.message && res.message.sqlMessage) {
        swal('Oops!', res.message.sqlMessage, 'error');
        return reject();
      }

      commit('saveInvoiceQueueSend', {
        data: invoices
      });
      swal('Success!', 'The invoice data was saved successfully!', 'success');
      return resolve();
    })
    .catch((reason) => {
      // eslint-disable-next-line no-console
      console.log(reason.message);
      swal('Oops!', 'Something happened while saving the invoice!', 'error');
      reject();
    });
});

const downloadPDF = ({ commit }, params) => new Promise((resolve, reject) => {
  generateLocalPDF(params.ids)
    .then((data) => {
      commit('noUpdateStateAction');
      resolve(data);
    })
    .catch((reason) => {
      // eslint-disable-next-line no-console
      console.log(reason.message);
      reject();
    });
});

export default {
  getInvoiceData,
  getInvoicesPagination,
  getInvoicesCountByStatus,
  updateInputValue,
  saveInvoiceData,
  generatePDF,
  updateHTMLPage,
  saveInvoiceQueueRelease,
  saveInvoiceQueueSend,
  downloadPDF
};
