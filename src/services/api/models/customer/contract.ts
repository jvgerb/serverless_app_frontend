export class Customer {
  customerContractId?:string;
  contractProduct?:string;
  productCategoryType?:string;
  signedOn?:string;
  signedBy?:string;
  contractPeriodMonth?:string;
  contractStartDate?:string;
  noticePeriodMonth?:string;
  automaticContractRenewalinMonth?:string;
  contractValidtoCalculated?:string;
  possibleTerminationDate?:string;
  contractTerminated?:string;
  noticeGivenOn?:string;
  noticeGivenTo?:string;
  contractTermComment?:string;
  consumptionPriceStartValue?:string;
  consumptionPriceAdjustment?:string;
  consumptionUnit?:string;
  capacityPriceStartValue?:string;
  capacityPriceUnit?:string;
  capacityStartValue?:string;
  // capacityPriceStartValue duplicated??:string;
  capacityPriceAdjustment?:string;
  customerContractComment?:string;
  
    mapOut() {
  
      return {};
    }
  }
  