export class Actuator {
  componentType?: string;
  manufacturer?: string;
  designationType?: string;
  listPriceNet?: string;
  purchaseNetPrice?: string;
  serialNumber?: string;
  purchaseDate?: string;
  warrantyUntil?: string;
  installationDate?: string;
  powerSupplyVoltage?: string;
  operationPrinciple?: string;

  constructor() {}

  mapOut() {
    return {};
  }
}
