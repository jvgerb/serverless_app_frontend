export class DistrictHeatingStationDHS {
  componentType?: string;
  manufacturer?: string;
  designationType?: string;
  listPriceNet?: string;
  purchaseNetPrice?: string;
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

  constructor() {}

  mapOut() {
    return {};
  }
}
