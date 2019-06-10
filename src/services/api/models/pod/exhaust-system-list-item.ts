export class ExhaustSystemListItem {
  data: any;

  manufacturer?: string;
  designation?: string;
  materialExhaustSystem?: string;
  serialNumber?: string;
  purchaseDate?: string;
  warrantyUntil?: string;
  dimension?: string;
  netPurchasePrice?: string;

  map(o: any) {
    this.data = o;

    this.manufacturer = o.component_manufacturer;
    this.serialNumber = o.component_serial_number;
    this.materialExhaustSystem = o.exhaust_system_info.material;
    this.dimension = o.exhaust_system_info.dimension;
    if (o.component_base_info) {
      this.designation = o.component_base_info.type_designation;
      this.purchaseDate = o.component_base_info.purchase_date;
      this.warrantyUntil = o.component_base_info.warranty_until;
      this.netPurchasePrice = o.component_base_info.purchase_price_net;
    }

    return this;
  }
}
