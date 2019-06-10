export class ContactPerson {
  supplierId?: string;

  salutation?: string;
  title?: string;
  titleAddOn?: string;
  firstName?: string;
  middleName?: string;
  surname?: string;
  functionName?: string;
  email?: string;
  telefon?: string;
  mobile?: string;
  fax?: string;
  birthday?: string;
  gender?: string;
  maritalStatus?: string;
  politicalOrientation?: string;
  religion?: string;
  hobby?: string;

  mapOut() {
    return {
      supplier_contact_person_function: this.functionName,
      supplier_contact_person_mobile: this.mobile,
      supplier_contact_person_hobby: this.hobby,
      supplier_contact_person_last_name: this.surname,
      supplier_contact_person_middle_name: this.middleName,
      supplier_contact_person_email: this.email,
      supplier_contact_person_fax: this.fax,
      supplier_contact_person_birthday: this.birthday,
      supplier_contact_person_gender: this.gender,
      supplier_contact_person_salutation: this.salutation,
      supplier_contact_person_religion: this.religion,
      supplier_contact_person_telefon: this.telefon,
      supplier_contact_person_first_name: this.firstName,
      supplier_contact_person_title_add_on: this.titleAddOn,
      supplier_contact_person_title: this.title,
      supplier_contact_person_political_orientation: this.politicalOrientation,
      supplier_contact_person_marital_status: this.maritalStatus,
    };
  }
}
