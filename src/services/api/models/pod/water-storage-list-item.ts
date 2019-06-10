export class WaterStorageListItem {
  data: any;

  manufacturer?: string;
  designation?: string;
  purchaseFrom?: string;
  serialNumber?: string;
  purchaseDate?: string;
  warrantyUntil?: string;
  storageType?: string;
  netPurchasePrice?: string;

  map(o: any) {
    this.data = o;

    this.manufacturer = o.component_manufacturer;
    this.serialNumber = o.component_serial_number;
    this.storageType = o.water_storage_info.storage_type;
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
