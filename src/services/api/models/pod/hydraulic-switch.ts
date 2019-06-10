export class HydraulicSwitch {
  hydraulicSwitchId?: string;
  componentType?: string;
  manufacturer?: string;
  designation?: string;
  listpriceNet?: string;
  netPurchasePrice?: string;
  serialNumber?: string;
  purchaseFrom?: string;
  warrantyUntil?: string;
  installationDate?: string;
  pipeCrossSection?: string;
  comment?: string;

  constructor() {}

  mapOut() {
    return {};
  }
}
