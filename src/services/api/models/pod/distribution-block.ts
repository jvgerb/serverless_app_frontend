export class DistributionBlock {
  componentType?: string;
  manufacturer?: string;
  designation?: string;
  listPriceNet?: string;
  purchasePriceNet?: string;
  serialNumber?: string;
  purchaseDate?: string;
  warrantyUntil?: string;
  purchaseFrom?: string;
  magra?: string;
  blockType?: string;
  comment?: string;

  constructor() {}

  mapOut() {
    return {};
  }
}
