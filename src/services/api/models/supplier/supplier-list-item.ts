export class SupplierListItem {
  data: any;

  supplierId?: string;
  suppliersName?: string;
  homepage?: string;
  qualityOfRelationship?: string;
  place?: string;
  zipCode?: string;

  map(o: any) {
    this.data = o;

    this.supplierId = o.supplier_id;
    this.suppliersName = o.supplier_name;
    this.homepage = o.supplier_homepage;
    this.qualityOfRelationship = o.supplier_quality_of_relationship;
    this.place = o.supplier_address.supplier_place;
    this.zipCode = o.supplier_address.supplier_address_zip_code;

    return this;
  }
}
