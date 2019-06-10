export class ControlUnitListItem {
  data: any;

  manufacturer?: string;
  designation?: string;
  interfaceProtocol?: string;
  serialNumber?: string;
  purchaseDate?: string;
  warrantyUntil?: string;
  operationMode?: string;
  netPurchasePrice?: string;

  map(o: any) {
    this.data = o;

    this.manufacturer = o.component_manufacturer;
    this.serialNumber = o.component_serial_number;
    if (o.component_base_info) {
      this.designation = o.component_base_info.type_designation;
      this.purchaseDate = o.component_base_info.purchase_date;
      this.warrantyUntil = o.component_base_info.warranty_until;
      this.netPurchasePrice = o.component_base_info.purchase_price_net;
    }
    if (o.control_unit_info) {
      this.interfaceProtocol = o.control_unit_info.interface_protocol;
      this.operationMode = o.control_unit_info.operation_mode;
    }

    return this;
  }
}
