export class ContractListItem {
  data: any;

  contractID?: string;
  product?: string;
  signedOn?: string;
  signedBy?: string;
  contractPeriodMonth?: string;
  validTo?: string;
  possibleTerminationDate?: string;

  map(o: any) {
    this.data = o;

    this.contractID = o.pk_id;
    this.product = o.contract_product;
    this.signedOn = o.contract_info.signed_on;
    this.signedBy = o.contract_info.signed_by;
    this.contractPeriodMonth = o.contract_info.contract_period;
    this.validTo = o.contract_valid_to;
    this.possibleTerminationDate = o.contract_info.possible_termination_date;

    return this;
  }
}
