import { v4 as uuid } from 'uuid';

export class Contract {
  supplierId?: string;
  supplierName?: string;

  contractId?: string;
  contractProduct?: string;
  categoryType?: string;
  signedOn?: string;
  signedBy?: string;
  contractPeriodMonth?: string;
  startDate?: string;
  noticePeriodMonth?: string;
  automaticContractRenewalinMonth?: string;
  contractValidToCalculated?: string;
  possibleTerminationDate?: string;
  contractTerminated?: string;
  noticeGivenOn?: string;
  noticeGivenTo?: string;
  contractTermComment?: string;

  constructor() {
    this.contractId = uuid();
  }

  mapOut() {
    return {
      gsi_3_pk: 'supplier_contract',
      gsi_1_sk: 'supplier_contract',
      contract_notice: {
        notice_period: this.noticePeriodMonth,
        notice_given_on: this.noticeGivenOn,
        notice_given_to: this.noticeGivenTo,
      },
      gsi_2_sk: this.supplierName,
      gsi_2_pk: 'supplier_contract',
      // contract_capacity: {
      //   capacity_price_adjustment: 'monthly',
      //   capacity_price: '70',
      //   capacity_price_unit: 'EUR/kW',
      //   capacity_start_value: '145',
      // },
      item_id: uuid(),
      supply_contract_id: this.contractId,
      contract_product_category_type: this.categoryType,
      contract_product: this.contractProduct,
      gsi_3_sk: this.contractProduct,
      contract_terminated: this.contractTerminated,
      contract_partner_type: 'Customer',
      contract_start_date: this.startDate,
      pk_id: this.contractId,
      // contract_comment: 'Comment for this super wonderful contract #105',
      item_type_debug: 'supplier_contract',
      contract_valid_to: this.contractValidToCalculated,
      contract_info: {
        contract_period: this.contractPeriodMonth,
        possible_termination_date: this.possibleTerminationDate,
        signed_on: this.signedOn,
        signed_by: this.signedBy,
        automatic_contract_renewal: this.automaticContractRenewalinMonth,
        contract_term_comment: this.contractTermComment,
      },
      // item_timestamp: 'May/16/2019:03:40:00 +0000',
      sk: this.supplierId,
      // contract_consumption: {
      //   consumption_price: '60',
      //   consumption_price_adjustment: 'monthly',
      //   consumption_unit: 'EUR/MWh',
      // },
    };
  }
}
