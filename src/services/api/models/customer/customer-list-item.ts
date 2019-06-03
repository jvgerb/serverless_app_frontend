export class CustomerListItem {
  data: any;

  customerId?: string;
  customerType?: string;
  customerOrganizationName?: string;
  customersName?: string;
  relationshipQuality?: string;

  map(o: any) {
    this.data = o;
    this.customerId = o.customer_id;
    this.customerType = o.customer_type;
    this.customerOrganizationName = o.customer_name;
    this.customersName = o.customer_name;
    this.relationshipQuality = o.customer_quality_of_relationship;

    return this;
  }
}
