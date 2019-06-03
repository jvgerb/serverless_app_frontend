import { v4 as uuid } from 'uuid';

export class Supplier {
  supplierId?: string;
  type?: string;
  industrySector?: string;
  name?: string;
  streetAddress?: string;
  streetNumber?: string;
  zipCode?: string;
  place?: string;
  qualityofRelationship?: string;
  homepage?: string;
  comment?: string;

  mapOut() {
    return {
      gsi_1_sk: 'supplier',
      gsi_3_pk: this.supplierId,
      gsi_2_sk: this.industrySector,
      gsi_2_pk: 'supplier',
      item_id: uuid(),
      supplier_id: this.supplierId,
      // supplier_contact_person: {
      //   supplier_contact_person_function: 'Sales manager',
      //   supplier_contact_person_mobile: '+49172888111222',
      //   supplier_contact_person_hobby: 'bicycles',
      //   supplier_contact_person_last_name: 'Innuendo',
      //   supplier_contact_person_middle_name: 'Clark',
      //   supplier_contact_person_email: 'iren.innuendo@abc-5202.com',
      //   supplier_contact_person_fax: '+49172888111223',
      //   supplier_contact_person_birthday: '03-21-1968',
      //   supplier_contact_person_gender: 'female',
      //   supplier_contact_person_salutation: 'Mrs.',
      //   supplier_contact_person_religion: 'judaite',
      //   supplier_contact_person_telefon: '+4930555111222',
      //   supplier_contact_person_first_name: 'Iren',
      //   supplier_contact_person_title_add_on: 'Md',
      //   supplier_contact_person_title: 'Mrs.',
      //   supplier_contact_person_political_orientation: 'left wing',
      //   supplier_contact_person_marital_status: 'single',
      // },
      supplier_industry_sector: this.industrySector,
      gsi_3_sk: this.supplierId,
      supplier_address: {
        supplier_address_zip_code: this.zipCode,
        supplier_place: this.place,
        supplier_address_street: this.streetAddress,
        supplier_address_street_number: this.streetNumber,
      },
      supplier_type: this.type,
      pk_id: this.name,
      item_type_debug: 'supplier',
      supplier_comment: this.comment,
      // item_timestamp: 'May/16/2019:03:40:00 +0000',
      sk: this.supplierId,
      supplier_homepage: this.homepage,
      supplier_quality_of_relationship: this.qualityofRelationship,
      supplier_name: this.name,
      supplier_address_search: `${this.streetAddress}, ${this.zipCode}`,
    };
  }
}
