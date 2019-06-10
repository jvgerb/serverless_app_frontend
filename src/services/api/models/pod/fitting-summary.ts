export class FittingSummary {
  data: any;

  componentType?: string;
  manufacturer?: string;
  designationType?: string;
  listPriceNet?: string;
  netPurchasePrice?: string;
  serialNumber?: string;
  purchaseDate?: string;
  warrantyUntil?: string;
  purchaseFrom?: string;
  installationDate?: string;
  fittingType?: string;
  type?: string;
  nominalDiameterFitting?: string;
  leakRate?: string;
  kvsValue?: string;
  comment?: string;

  map(o: any) {
    this.data = o;

    // this.componentType = o. ;
    // this.manufacturer = o. ;
    // this.designationType = o. ;
    // this.listPriceNet = o. ;
    // this.netPurchasePrice = o. ;
    // this.serialNumber = o. ;
    // this.purchaseDate = o. ;
    // this.warrantyUntil = o. ;
    // this.purchaseFrom = o. ;
    // this.installationDate = o. ;
    // this.fittingType = o. ;
    // this.type = o. ;
    // this.nominalDiameterFitting = o. ;
    // this.leakRate = o. ;
    // this.kvsValue = o. ;
    // this.comment = o. ;

    return this;
  }
}
