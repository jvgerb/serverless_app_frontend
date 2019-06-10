export class ActuatorListItem {
  data: any;

  manufacturer?: string;
  designation?: string;
  powerSupplyVoltage?: string;
  serialNumber?: string;
  purchaseDate?: string;
  warrantyUntil?: string;
  operatingPrinciple?: string;
  netPurchasePrice?: string;

  map(o: any) {
    this.data = o;

    this.manufacturer = o.component_manufacturer;
    this.serialNumber = o.component_serial_number;
    this.powerSupplyVoltage = o.actuator_info.power_supply_voltage;
    this.operatingPrinciple = o.actuator_info.operating_principle;
    if (o.component_base_info) {
      this.designation = o.component_base_info.type_designation;
      this.purchaseDate = o.component_base_info.purchase_date;
      this.warrantyUntil = o.component_base_info.warranty_until;
      this.netPurchasePrice = o.component_base_info.purchase_price_net;
    }

    return this;
  }
}
