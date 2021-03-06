export class BoilerListItem {
  data: any;

  boilerId?: string;
  manufacturer?: string;
  designation?: string;
  serialNumber?: string;
  purchaseDate?: string;
  warrantyUntil?: string;
  interfaceProtocol?: string;
  netPurchasePrice?: string;

  map(o: any) {
    this.data = o;

    this.boilerId = o.boiler_id;
    this.manufacturer = o.component_manufacturer;
    this.serialNumber = o.component_serial_number;
    if (o.boiler_info) {
      this.designation = o.component_base_info.type_designation;
      this.purchaseDate = o.component_base_info.purchase_date;
      this.warrantyUntil = o.component_base_info.warranty_until;
      this.interfaceProtocol = o.component_base_info.interface_protocol;
      this.netPurchasePrice = o.component_base_info.purchase_price_net;
    }

    return this;
  }
}
