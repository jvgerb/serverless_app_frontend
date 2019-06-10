export class PumpListItem {
  data: any;

  manufacturer?: string;
  designation?: string;
  useCasePump?: string;
  serialNumber?: string;
  purchaseDate?: string;
  warrantyUntil?: string;
  operatingHrsYear?: string;
  netPurchasePrice?: string;

  map(o: any) {
    this.data = o;

    this.manufacturer = o.component_manufacturer;
    this.serialNumber = o.component_serial_number;
    if (o.component_base_info) {
      this.designation = o.component_base_info.type_designation;
      this.purchaseDate = o.component_base_info.purchase_date;
      this.warrantyUntil = o.component_base_info.warranty_until;
      // this.interfaceProtocol = o.component_base_info.interface_protocol;
      this.netPurchasePrice = o.component_base_info.purchase_price_net;
    }
    this.operatingHrsYear = o.circulation_pump_info.operating_hours_per_year;
    this.useCasePump = o.circulation_pump_info.use_case_pump;

    return this;
  }
}
