export class FuelTankSummary {
  data: any;

  fuelTankId?: string;
  componentType?: string;
  manufacturer?: string;
  designation?: string;
  listPriceNet?: string;
  netPurchasePrice?: string;
  serialNumber?: string;
  purchaseFrom?: string;
  warrantyUntil?: string;
  installationDate?: string;
  fuelTankType?: string;
  numberOfSegments?: string;
  totalVolume?: string;
  installationType?: string;
  connected?: string;
  fuelCategory?: string;
  comment?: string;

  map(o: any) {
    this.data = o;

    // this.fuelTankId = o. ;
    // this.componentType = o. ;
    // this.manufacturer = o. ;
    // this.designation = o. ;
    // this.listPriceNet = o. ;
    // this.netPurchasePrice = o. ;
    // this.serialNumber = o. ;
    // this.purchaseFrom = o. ;
    // this.warrantyUntil = o. ;
    // this.installationDate = o. ;
    // this.fuelTankType = o. ;
    // this.numberOfSegments = o. ;
    // this.totalVolume = o. ;
    // this.installationType = o. ;
    // this.connected = o. ;
    // this.fuelCategory = o. ;
    // this.comment = o. ;

    return this;
  }
}
