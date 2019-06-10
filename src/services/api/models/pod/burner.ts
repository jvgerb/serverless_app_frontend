export class Burner {
  componentType?: string;
  manufacturer?: string;
  designationType?: string;
  listPriceNet?: string;
  burnerPurchaseNetPrice?: string;
  burnerSerialNumber?: string;
  burnerPurchaseDate?: string;
  burnerWarrantyUntil?: string;
  boilerPurchaseFrom?: string;
  boilerInstallationDate?: string;
  operationModeBurner?: string;
  oilJetSize?: string;
  oilJetPressure?: string;
  combustionType?: string;
  combustionAirSupply?: string;
  burnerCapacity?: string;
  adjustedCapacity?: string;
  lowerModulationLimit?: string;
  comment?: string;

  constructor() {}

  mapOut() {
    return {};
  }
}
