export class Fitting {
  componentType?: string;
  manufacturer?: string;
  designationType?: string;
  listPriceNet?: string;
  netPurchasePrice?: string;
  serialNumber?: string;
  purchaseDate?: string;
  warrantyUntil?: string;
  purchaseFrom?: string;
  installationDate?: string;
  fittingType?: string;
  type?: string;
  nominalDiameterFitting?: string;
  leakRate?: string;
  kvsValue?: string;
  comment?: string;

  constructor() {}

  mapOut() {
    return {};
  }
}
