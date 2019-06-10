export class DistrictHeatingStationListItem {
  data: any;

  serialNumber?: string;
  manufacturer?: string;
  designation?: string;
  adjustedCapacity?: string;
  maxCapacity?: string;
  purchaseDate?: string;
  warrantyUntil?: string;
  netPurchasePrice?: string;

  map(o: any) {
    this.data = o;

    this.manufacturer = o.component_manufacturer;
    this.serialNumber = o.component_serial_number;
    this.adjustedCapacity = o.district_heating_station_info.adjusted_capacity;
    this.maxCapacity = o.district_heating_station_info.max_capacity;
    if (o.component_base_info) {
      this.designation = o.component_base_info.type_designation;
      this.purchaseDate = o.component_base_info.purchase_date;
      this.warrantyUntil = o.component_base_info.warranty_until;
      this.netPurchasePrice = o.component_base_info.purchase_price_net;
    }

    return this;
  }
}
