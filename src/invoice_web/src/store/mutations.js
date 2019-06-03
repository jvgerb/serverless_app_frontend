const mutations = {
  getInvoiceData(state, payload) {
    state.invoiceData = Object.assign({}, payload);
  },
  updateInputValue(state, { field, value }) {
    state.invoiceData[field] = value;
  },
  getInvoicesCount(state, { field, value }) {
    state[field] = value;
  },
  saveInvoiceData(state, payload) {
    state.invoiceData = Object.assign({}, payload);
  },
  saveInvoiceQueueRelease(state, payload) {
    state.invoiceData = Object.assign({}, payload);
  },
  saveInvoiceQueueSend(state, payload) {
    state.invoiceData = Object.assign({}, payload);
  },
  updateHTMLPage(state, { index, innerHTML }) {
    state.innerHTML[`page${index}`] = innerHTML;
  },
  noUpdateStateAction() { /* No Update State Mutation */ }
};

export default mutations;
