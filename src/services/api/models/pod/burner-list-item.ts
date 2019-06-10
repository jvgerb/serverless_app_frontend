export class BurnerListItem {
  data: any;

  burnerId?: string;
  manufacturer?: string;
  designation?: string;
  serialNumber?: string;
  purchaseDate?: string;
  warrantyUntil?: string;
  capacity?: string;
  netPurchasePrice?: string;

  map(o: any) {
    this.data = o;

    this.burnerId = o.burner_id;
    this.manufacturer = o.component_manufacturer;
    this.serialNumber = o.component_serial_number;
    this.capacity = o.burner_info.burner_capacity;
    if (o.component_base_info) {
      this.designation = o.component_base_info.type_designation;
      this.purchaseDate = o.component_base_info.purchase_date;
      this.warrantyUntil = o.component_base_info.warranty_until;
      this.netPurchasePrice = o.component_base_info.purchase_price_net;
    }

    return this;
  }
}
