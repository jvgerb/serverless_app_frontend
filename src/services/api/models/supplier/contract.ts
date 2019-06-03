import { v4 as uuid } from 'uuid';

export class Customer {


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

  mapOut() {
    return { };
  }
}
