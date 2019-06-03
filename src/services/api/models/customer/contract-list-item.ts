export class ContractListItem {
  data: any;

  contractId?: string;
  contractPeriod?: string;
  signedOn?: string;
  signedBy?: string;
  consumptionUnit?: string;
  noticeGivenOn?: string;
  noticeGivenTo?: string;
  capacityStartValue?: string;

  map(o: any) {
    this.data = o;
    this.contractId = o.customer_contract_id;
    if (o.contract_info) {
      this.contractPeriod = o.contract_info.contract_period;
      this.signedOn = o.contract_info.signed_on;
      this.signedBy = o.contract_info.signed_by;
    }

    this.consumptionUnit = o.contract_consumption.consumption_unit;
    this.noticeGivenOn = o.contract_notice && o.contract_notice.notice_given_on;
    this.noticeGivenTo = o.contract_notice && o.contract_notice.notice_given_to;
    this.capacityStartValue =
      o.contract_capacity && o.contract_capacity.capacity_start_value;

    return this;
  }
}
