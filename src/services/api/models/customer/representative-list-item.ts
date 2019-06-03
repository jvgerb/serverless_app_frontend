export class RepresentativeListItem {
  data: any;

  organizationName?: string;
  appointed?: string;
  type?: string;
  street?: string;
  streetNumber?: string;
  zipCode?: string;
  place?: string;

  map(o: any) {
    this.data = o;
    this.organizationName = o.customer_name;
    this.appointed = o.customer_representative_appointed;
    this.type = o.customer_type;
    this.street = o.customer_type;
    if (o.customer_delivery_address) {
      this.street =
        o.customer_delivery_address.customer_delivery_address_street;
      this.streetNumber =
        o.customer_delivery_address.customer_delivery_address_street_number;
      this.zipCode =
        o.customer_delivery_address.customer_delivery_address_zip_code;
      this.place = o.customer_delivery_address.customer_delivery_address_place;
    }

    return this;
  }
}
