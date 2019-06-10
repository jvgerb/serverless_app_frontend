export class PressureControl {
  pressureControlId?: string;
  componentType?: string;
  manufacturer?: string;
  designation?: string;
  listpriceNet?: string;
  netPurchasePrice?: string;
  serialNumber?: string;
  purchaseFrom?: string;
  warrantyUntil?: string;
  installationDate?: string;
  physicalPressureControlType?: string;
  responsePressure?: string;
  dn?: string;
  comment?: string;

  constructor() {}

  mapOut() {
    return {};
  }
}
