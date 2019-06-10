export class HydraulicSwitchSummary {
  data: any;

  hydraulicSwitchId?: string;
  componentType?: string;
  manufacturer?: string;
  designation?: string;
  listPriceNet?: string;
  netPurchasePrice?: string;
  serialNumber?: string;
  purchaseFrom?: string;
  warrantyUntil?: string;
  installationDate?: string;
  pipeCrossSection?: string;
  comment?: string;

  map(o: any) {
    this.data = o;

    // this.hydraulicSwitchId = o. ;
    // this.componentType = o. ;
    // this.manufacturer = o. ;
    // this.designation = o. ;
    // this.listPriceNet = o. ;
    // this.netPurchasePrice = o. ;
    // this.serialNumber = o. ;
    // this.purchaseFrom = o. ;
    // this.warrantyUntil = o. ;
    // this.installationDate = o. ;
    // this.pipeCrossSection = o. ;
    // this.comment = o. ;

    return this;
  }
}
