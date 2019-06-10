export class BurnerSummary {
  data: any;

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

  map(o: any) {
    this.data = o;

    // this.componentType = o. ;
    // this.manufacturer = o. ;
    // this.designationType = o. ;
    // this.listPriceNet = o. ;
    // this.burnerPurchaseNetPrice = o. ;
    // this.burnerSerialNumber = o. ;
    // this.burnerPurchaseDate = o. ;
    // this.burnerWarrantyUntil = o. ;
    // this.boilerPurchaseFrom = o. ;
    // this.boilerInstallationDate = o. ;
    // this.operationModeBurner = o. ;
    // this.oilJetSize = o. ;
    // this.oilJetPressure = o. ;
    // this.combustionType = o. ;
    // this.combustionAirSupply = o. ;
    // this.burnerCapacity = o. ;
    // this.adjustedCapacity = o. ;
    // this.lowerModulationLimit = o. ;
    // this.comment = o. ;

    return this;
  }
}
