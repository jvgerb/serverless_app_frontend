export class ActuatorSummary {
  data: any;

  componentType?: string;
  manufacturer?: string;
  designationType?: string;
  listPriceNet?: string;
  netPurchasePrice?: string;
  serialNumber?: string;
  purchaseDate?: string;
  warrantyUntil?: string;
  installationDate?: string;
  powerSupplyVoltage?: string;
  operationPrinciple?: string;

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
    // this.installationDate = o. ;
    // this.powerSupplyVoltage = o. ;
    // this.operationPrinciple = o. ;

    return this;
  }
}
