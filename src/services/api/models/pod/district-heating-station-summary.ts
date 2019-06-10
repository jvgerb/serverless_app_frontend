export class DistrictHeatingStationSummary {
  data: any;

  componentType?: string;
  manufacturer?: string;
  designationType?: string;
  listPriceNet?: string;
  burnerPurchaseNetPrice?: string;
  serialNumber?: string;
  purchaseDate?: string;
  warrantyUntil?: string;
  purchaseFrom?: string;
  installationDate?: string;
  principle?: string;
  flowTemperature?: string;
  returnTemperature?: string;
  temperatureDifference?: string;
  capacity?: string;
  maximumCapacity?: string;
  flowRate?: string;
  staticPressure?: string;
  comment?: string;

  map(o: any) {
    this.data = o;

    // this.componentType = o. ;
    // this.manufacturer = o. ;
    // this.designationType = o. ;
    // this.listPriceNet = o. ;
    // this.burnerPurchaseNetPrice = o. ;
    // this.serialNumber = o. ;
    // this.purchaseDate = o. ;
    // this.warrantyUntil = o. ;
    // this.purchaseFrom = o. ;
    // this.installationDate = o. ;
    // this.principle = o. ;
    // this.flowTemperature = o. ;
    // this.returnTemperature = o. ;
    // this.temperatureDifference = o. ;
    // this.capacity = o. ;
    // this.maximumCapacity = o. ;
    // this.flowRate = o. ;
    // this.staticPressure = o. ;
    // this.comment = o. ;

    return this;
  }
}
