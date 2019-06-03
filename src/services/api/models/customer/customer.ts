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
      customer_billing_address: {
        customer_billing_address_place: this.billingAddressPlace,
        customer_billing_address_street: this.billingAddressStreet,
        customer_billing_address_street_number: this.billingAddressStreetNumber,
        customer_billing_address_zip_code: this.billingAddressZipCode,
      },
      customer_billing_address_search: `${this.billingAddressPlace}, ${
        this.billingAddressZipCode
      }`,
      customer_delivery_address: {
        customer_delivery_address_place: this.deliveryAddressPlace,
        customer_delivery_address_street: this.deliveryAddressStreet,
        customer_delivery_address_street_number: this
          .deliveryAddressStreetNumber,
        customer_delivery_address_zip_code: this.deliveryAddressZipCode,
      },
      customer_delivery_address_search: `${this.deliveryAddressPlace}, ${
        this.deliveryAddressZipCode
      }`,
      customer_id: this.customerId,
      customer_individual_name: this.customersNameFirstLast,
      customer_name: this.customersNameFirstLast,
      customer_organization_homepage: this.customerOrganizationHomepage,
      customer_quality_of_relationship: this.customerQualityofRelationship,
      customer_type: this.customertype,
      gsi_1_sk: 'customer',
      gsi_2_pk: 'customer',
      gsi_2_sk: 'yes',
      gsi_3_pk: 'customer',
      gsi_3_sk: `${this.billingAddressPlace}, ${this.billingAddressZipCode}`,
      pk_id: this.customerOrganizationName || this.customersNameFirstLast,
      sk: this.customerId,
    };
    // if (this.contactPerson) {
    //   data.customer_contact_person = this.contactPerson.mapOut();
    // }
    return data;
  }
}
