import { v4 as uuid } from 'uuid';
// import { ContactPerson } from './contact-person';
export class Customer {
  customerId?: string;
  customertype?: string;
  customerOrganizationName?: string;
  customersNameFirstLast?: string;
  customerOrganizationHomepage?: string;
  customerQualityofRelationship?: string;
  billingAddressStreet?: string;
  billingAddressStreetNumber?: string;
  billingAddressZipCode?: string;
  billingAddressPlace?: string;
  deliveryAddressStreet?: string;
  deliveryAddressStreetNumber?: string;
  deliveryAddressZipCode?: string;
  deliveryAddressPlace?: string;

  // contactPerson?: ContactPerson;

  constructor() {
    this.customerId = uuid();
  }

  mapOut() {
    const data: any = {
      customer_name: this.customersNameFirstLast,
      customer_individual_name: this.customersNameFirstLast,
      customer_quality_of_relationship: this.customerQualityofRelationship,
      customer_organization_homepage: this.customerOrganizationHomepage,
      customer_comment: '',
      customer_representative_appointed: '',
      customer_type: this.customertype,
      customer_delivery_address: {
        customer_delivery_address_place: this.deliveryAddressPlace,
        customer_delivery_address_street: this.deliveryAddressStreet,
        customer_delivery_address_street_number: this
          .deliveryAddressStreetNumber,
        customer_delivery_address_zip_code: this.deliveryAddressZipCode,
      },
      customer_billing_address: {
        customer_billing_address_place: this.billingAddressPlace,
        customer_billing_address_street: this.billingAddressStreet,
        customer_billing_address_street_number: this.billingAddressStreetNumber,
        customer_billing_address_zip_code: this.billingAddressZipCode,
      },
    };
    // if (this.contactPerson) {
    //   data.customer_contact_person = this.contactPerson.mapOut();
    // }
    return data;
  }
}
