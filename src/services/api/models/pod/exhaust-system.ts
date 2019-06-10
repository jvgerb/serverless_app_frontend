export class ExhaustSystem {
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

  constructor() {}

  mapOut() {
    return {};
  }
}
