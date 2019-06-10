export class DistributionBlockSummary {
  data: any;

  controlUnitId?: string;
  componentType?: string;
  manufacturer?: string;
  listPriceNet?: string;
  unitPurchaseNetPrice?: string;
  designation?: string;
  serialNumber?: string;
  purchaseDate?: string;
  warrantyUntil?: string;
  purchaseFrom?: string;
  interfaceProtocol?: string;
  controlUnitAnalogdigital?: string;
  operationMode?: string;
  remoteControl?: string;
  comment?: string;

  map(o: any) {
    this.data = o;

    // this.controlUnitId = o. ;
    // this.componentType = o. ;
    // this.manufacturer = o. ;
    // this.listPriceNet = o. ;
    // this.unitPurchaseNetPrice = o. ;
    // this.designation = o. ;
    // this.serialNumber = o. ;
    // this.purchaseDate = o. ;
    // this.warrantyUntil = o. ;
    // this.purchaseFrom = o. ;
    // this.interfaceProtocol = o. ;
    // this.controlUnitAnalogdigital = o. ;
    // this.operationMode = o. ;
    // this.remoteControl = o. ;
    // this.comment = o. ;

    return this;
  }
}
