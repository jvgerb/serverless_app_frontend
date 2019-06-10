export class HydraulicSwitchListItem {
  data: any;

  manufacturer?: string;
  designation?: string;
  purchaseFrom?: string;
  serialNumber?: string;
  purchaseDate?: string;
  warrantyUntil?: string;
  pipeCrossSection?: string;
  netPurchasePrice?: string;

  map(o: any) {
    this.data = o;

    this.manufacturer = o.component_manufacturer;
    this.serialNumber = o.component_serial_number;
    this.pipeCrossSection = o.hydraulic_switch_info.pipe_cross_section;
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
