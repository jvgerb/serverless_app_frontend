export class HeatExchanger {
  heatExchangerId?: string;
  componentType?: string;
  manufacturer?: string;
  designation?: string;
  listpriceNet?: string;
  netPurchasePrice?: string;
  serialNumber?: string;
  purchaseFrom?: string;
  warrantyUntil?: string;
  installationDate?: string;
  model?: string;
  standardCapacity?: string;
  primaryVolumeFlowManufactureValue?: string;
  primaryEntryTemperatureManufactureValue?: string;
  primaryExitTemperatureManufactureValue?: string;
  secondaryVolumeFlowManufactureValue?: string;
  secondaryEntryTemperatureManufactureValue?: string;
  secondaryExitTemperatureManufactureValue?: string;
  principle?: string;
  comment?: string;

  constructor() {}

  mapOut() {
    return {};
  }
}
