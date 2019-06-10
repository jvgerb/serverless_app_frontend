export class ExpansionTankSummary {
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
  volumeExpansionTank?: string;
  systemPressure?: string;
  expansionTank?: string;
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
    // this.volumeExpansionTank = o. ;
    // this.systemPressure = o. ;
    // this.expansionTank = o. ;
    // this.comment = o. ;

    return this;
  }
}
