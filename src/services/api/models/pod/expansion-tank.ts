export class ExpansionTank {
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
  volumeExpansionTank?: string;
  systemPressure?: string;
  expansionTankType?: string;
  comment?: string;

  constructor() {}

  mapOut() {
    return {};
  }
}
