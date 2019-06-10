export class ExhaustSystemSummary {
  data: any;

  componentType?: string;
  manufacturer?: string;
  designationType?: string;
  houseConnectionStationListPriceNet?: string;
  houseConnectionStationPurchasePrice?: string;
  serialNumber?: string;
  purchaseDate?: string;
  warrantyUntil?: string;
  installationDate?: string;
  dimension?: string;
  materialExhaustSystem?: string;
  airExhaustSystem?: string;
  comment?: string;

  map(o: any) {
    this.data = o;

    // this.componentType = o. ;
    // this.manufacturer = o. ;
    // this.designationType = o. ;
    // this.houseConnectionStationListPriceNet = o. ;
    // this.houseConnectionStationPurchasePrice = o. ;
    // this.serialNumber = o. ;
    // this.purchaseDate = o. ;
    // this.warrantyUntil = o. ;
    // this.installationDate = o. ;
    // this.dimension = o. ;
    // this.materialExhaustSystem = o. ;
    // this.airExhaustSystem = o. ;
    // this.comment = o. ;

    return this;
  }
}
