export class FuelTank {
  fuelTankId?: string;
  componentType?: string;
  manufacturer?: string;
  designation?: string;
  listpriceNet?: string;
  netPurchasePrice?: string;
  serialNumber?: string;
  purchaseFrom?: string;
  warrantyUntil?: string;
  installationDate?: string;
  fuelTankType?: string;
  numberofSegments?: string;
  totalVolume?: string;
  installationType?: string;
  connected?: string;
  fuelCategory?: string;
  comment?: string;

  constructor() {}

  mapOut() {
    return {};
  }
}
