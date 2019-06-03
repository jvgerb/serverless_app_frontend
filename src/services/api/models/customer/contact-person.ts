export class ContactPerson {
  customerId?: string;
  functionName?: string;
  salutation?: string;
  title?: string;
  addOn?: string;
  firstName?: string;
  middleName?: string;
  surname?: string;
  email?: string;
  telefon?: string;
  mobile?: string;
  fax?: string;
  birthday?: string;
  religion?: string;
  gender?: string;
  politicalOrientation?: string;
  maritalStatus?: string;
  hobby?: string;
  comment?: string;

  mapOut() {
    return {
      customer_contact_person_birthday: this.birthday,
      customer_contact_person_email: this.email,
      customer_contact_person_fax: this.fax,
      customer_contact_person_first_name: this.firstName,
      customer_contact_person_function: this.functionName,
      customer_contact_person_gender: this.gender,
      customer_contact_person_hobby: this.hobby,
      customer_contact_person_last_name: this.surname,
      customer_contact_person_marital_status: this.maritalStatus,
      customer_contact_person_middle_name: this.middleName,
      customer_contact_person_mobile: this.mobile,
      customer_contact_person_political_orientation: this.politicalOrientation,
      customer_contact_person_religion: this.religion,
      customer_contact_person_salutation: this.salutation,
      customer_contact_person_telefon: this.telefon,
      customer_contact_person_title: this.title,
      customer_contact_person_title_add_on: this.addOn,
    };
  }
}
