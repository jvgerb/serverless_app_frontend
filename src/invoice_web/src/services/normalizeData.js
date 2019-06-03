/**
 * @param ids {Array}
 * @param type    {String}
 * @returns {Array of object}
 */

// eslint-disable-next-line
export const normalizeQueueInvoices = (invoices, type) => {
  const invoiceList = [];

  invoices.map(invoice => invoiceList.push({ id: invoice, type: type }));

  return invoiceList;
};
