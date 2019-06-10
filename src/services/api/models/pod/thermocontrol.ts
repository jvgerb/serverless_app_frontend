export class ThermoControl {
  thermocontrolId?: string;
  componentType?: string;
  manufacturer?: string;
  designation?: string;
  listpriceNet?: string;
  netPurchasePrice?: string;
  serialNumber?: string;
  purchaseFrom?: string;
  warrantyUntil?: string;
  installationDate?: string;
  thermostaticTemperatureControlType?: string;
  responseTemperature?: string;
  dn?: string;
  primaryEntryTemperatureManufactureValue?: string;
  primaryExitTemperatureManufactureValue?: string;
  secondaryVolumeFlowManufactureValue?: string;
  comment?: string;

  constructor() {}

  mapOut() {
    return {};
  }
}
