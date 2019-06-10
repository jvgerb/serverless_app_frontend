export class WaterStorageSummary {
  data: any;

  waterStorageId?: string;
  componentType?: string;
  manufacturer?: string;
  designation?: string;
  listPriceNet?: string;
  netPurchasePrice?: string;
  serialNumber?: string;
  purchaseFrom?: string;
  purchaseDate?: string;
  warrantyUntil?: string;
  installationDate?: string;
  storageType?: string;
  useCase?: string;
  statutoryTemperatureSpecification?: string;
  leadingStorage?: string;
  circuitType?: string;
  storageVolume?: string;
  nlNumber?: string;
  material?: string;
  continuousOutput?: string;
  peakOutput?: string;
  switchOnSensorPosition?: string;
  switchOnSensorHysteresis?: string;
  switchOffSensorPosition?: string;
  // switchOnSensorHysteresis?: string; duplicated?
  referenceSensorPosition?: string;
  comment?: string;

  map(o: any) {
    this.data = o;

    // this.waterStorageId = o. ;
    // this.componentType = o. ;
    // this.manufacturer = o. ;
    // this.designation = o. ;
    // this.listPriceNet = o. ;
    // this.netPurchasePrice = o. ;
    // this.serialNumber = o. ;
    // this.purchaseFrom = o. ;
    // this.purchaseDate = o. ;
    // this.warrantyUntil = o. ;
    // this.installationDate = o. ;
    // this.storageType = o. ;
    // this.useCase = o. ;
    // this.statutoryTemperatureSpecification = o. ;
    // this.leadingStorage = o. ;
    // this.circuitType = o. ;
    // this.storageVolume = o. ;
    // this.nlNumber = o. ;
    // this.material = o. ;
    // this.continuousOutput = o. ;
    // this.peakOutput = o. ;
    // this.switchOnSensorPosition = o. ;
    // this.switchOnSensorHysteresis = o. ;
    // this.switchOffSensorPosition = o. ;
    // this.switchOnSensorHysteresis = o. ;
    // this.referenceSensorPosition = o. ;
    // this.comment = o. ;

    return this;
  }
}
