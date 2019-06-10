export class ThermocontrolListItem {
  data: any;

  manufacturer?: string;
  designation?: string;
  tempControlType?: string;
  purchaseFrom?: string;
  serialNumber?: string;
  purchaseDate?: string;
  warrantyUntil?: string;
  responseTemperature?: string;
  netPurchasePrice?: string;

  map(o: any) {
    this.data = o;

    this.manufacturer = o.component_manufacturer;
    this.tempControlType =
      o.thermo_control_info.thermostatic_temperature_control_type;
    this.serialNumber = o.component_serial_number;
    this.responseTemperature = o.thermo_control_info.response_temperature;
    if (o.component_base_info) {
      this.designation = o.component_base_info.type_designation;
      this.purchaseFrom = o.component_base_info.purchase_from;
      this.purchaseDate = o.component_base_info.purchase_date;
      this.warrantyUntil = o.component_base_info.warranty_until;
      this.netPurchasePrice = o.component_base_info.purchase_price_net;
    }

    return this;
  }
}
