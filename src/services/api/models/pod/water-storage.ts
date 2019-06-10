export class WaterStorage {
  waterStorageId?: string;
  componentType?: string;
  manufacturer?: string;
  designation?: string;
  listpriceNet?: string;
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
  // switchOnSensorHysteresis?: string; // duplicated
  referenceSensorPosition?: string;
  comment?: string;

  constructor() {}

  mapOut() {
    return {};
  }
}
