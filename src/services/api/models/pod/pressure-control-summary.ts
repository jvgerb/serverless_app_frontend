export class PressureControlSummary {
  data: any;

  pressureControlId?: string;
  componentType?: string;
  manufacturer?: string;
  designation?: string;
  listPriceNet?: string;
  netPurchasePrice?: string;
  serialNumber?: string;
  purchaseFrom?: string;
  warrantyUntil?: string;
  installationDate?: string;
  physicalPressureControlType?: string;
  responsePressure?: string;
  dn?: string;
  comment?: string;

  map(o: any) {
    this.data = o;

    // this.pressureControlId = o. ;
    // this.componentType = o. ;
    // this.manufacturer = o. ;
    // this.designation = o. ;
    // this.listPriceNet = o. ;
    // this.netPurchasePrice = o. ;
    // this.serialNumber = o. ;
    // this.purchaseFrom = o. ;
    // this.warrantyUntil = o. ;
    // this.installationDate = o. ;
    // this.physicalPressureControlType = o. ;
    // this.responsePressure = o. ;
    // this.dn = o. ;
    // this.comment = o. ;

    return this;
  }
}
