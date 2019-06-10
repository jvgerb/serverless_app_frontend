export class DistributionBlockListItem {
  data: any;

  componentType?: string;
  manufacturer?: string;
  designation?: string;
  serialNumber?: string;
  purchaseDate?: string;
  warrantyUntil?: string;
  blockType?: string;
  netPurchasePrice?: string;

  map(o: any) {
    this.data = o;

    this.manufacturer = o.component_manufacturer;
    this.serialNumber = o.component_serial_number;
    this.componentType = o.component_type;
    this.blockType = o.distribution_block_info.distribution_block_type;
    if (o.component_base_info) {
      this.designation = o.component_base_info.type_designation;
      this.purchaseDate = o.component_base_info.purchase_date;
      this.warrantyUntil = o.component_base_info.warranty_until;
      this.netPurchasePrice = o.component_base_info.purchase_price_net;
    }

    return this;
  }
}
