import { v4 as uuid } from 'uuid';

export class Contract {
  customerId?: string;
  customerName?: string;

  customerContractId?: string;
  contractProduct?: string;
  productCategoryType?: string;
  signedOn?: string;
  signedBy?: string;
  contractPeriodMonth?: string;
  contractStartDate?: string;
  noticePeriodMonth?: string;
  automaticContractRenewalInMonth?: string;
  contractValidToCalculated?: string;
  possibleTerminationDate?: string;
  contractTerminated?: string;
  noticeGivenOn?: string;
  noticeGivenTo?: string;
  contractTermComment?: string;
  consumptionPriceStartValue?: string;
  consumptionPriceAdjustment?: string;
  consumptionUnit?: string;
  capacityPriceStartValue?: string;
  capacityPriceUnit?: string;
  capacityStartValue?: string;
  // capacityPriceStartValue duplicated??:string;
  capacityPriceAdjustment?: string;
  customerContractComment?: string;

  constructor() {
    this.customerContractId = uuid();
  }

  mapOut() {
    return {
      gsi_3_pk: 'customer_contract',
      gsi_1_sk: this.customerName,
      contract_notice: {
        notice_period: this.noticePeriodMonth,
        notice_given_on: this.noticeGivenOn,
        notice_given_to: this.noticeGivenTo,
      },
      gsi_2_sk: this.customerName,
      gsi_2_pk: 'customer_contract',
      contract_capacity: {
        capacity_price_adjustment: this.capacityPriceAdjustment,
        capacity_price: this.capacityStartValue,
        capacity_price_unit: this.capacityPriceUnit,
        capacity_start_value: this.capacityPriceStartValue,
      },
      item_id: uuid(),
      contract_product_category_type: this.productCategoryType,
      customer_contract_id: this.customerContractId,
      contract_product: this.contractProduct,
      gsi_3_sk: this.contractValidToCalculated,
      contract_terminated: this.contractTerminated,
      contract_partner_type: 'Partner',
      contract_start_date: this.contractStartDate,
      pk_id: this.customerContractId,
      contract_comment: this.customerContractComment,
      item_type_debug: 'customer_contract',
      contract_valid_to: this.contractValidToCalculated,
      contract_info: {
        contract_period: this.contractPeriodMonth,
        possible_termination_date: this.possibleTerminationDate,
        signed_on: this.signedOn,
        signed_by: this.signedBy,
        automatic_contract_renewal: this.automaticContractRenewalInMonth,
        contract_term_comment: this.contractTermComment,
      },
      // item_timestamp: 'May/16/2019:03:40:00 +0000',
      sk: this.customerId,
      contract_consumption: {
        consumption_price: this.consumptionPriceStartValue,
        consumption_price_adjustment: this.consumptionPriceAdjustment,
        consumption_unit: this.consumptionUnit,
      },
    };
  }
}
