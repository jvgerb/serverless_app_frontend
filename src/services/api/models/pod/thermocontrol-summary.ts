export class ThermocontrolSummary {
  data: any;

  thermocontrolId?: string;
  componentType?: string;
  manufacturer?: string;
  designation?: string;
  listPriceNet?: string;
  netPurchasePrice?: string;
  serialNumber?: string;
  purchaseFrom?: string;
  warrantyUntil?: string;
  installationDate?: string;
  thermostaticTemperatureControlType?: string;
  responseTemperature?: string;
  dn?: string;
  primaryEntryTempManufactureValue?: string;
  primaryExitTempManufactureValue?: string;
  secondaryVolumeFlowManufactureValue?: string;
  comment?: string;

  map(o: any) {
    this.data = o;

    // this.thermocontrolId = o. ;
    // this.componentType = o. ;
    // this.manufacturer = o. ;
    // this.designation = o. ;
    // this.listPriceNet = o. ;
    // this.netPurchasePrice = o. ;
    // this.serialNumber = o. ;
    // this.purchaseFrom = o. ;
    // this.warrantyUntil = o. ;
    // this.installationDate = o. ;
    // this.thermostaticTemperatureControlType = o. ;
    // this.responseTemperature = o. ;
    // this.dn = o. ;
    // this.primaryEntryTempManufactureValue = o. ;
    // this.primaryExitTempManufactureValue = o. ;
    // this.secondaryVolumeFlowManufactureValue = o. ;
    // this.comment = o. ;

    return this;
  }
}
