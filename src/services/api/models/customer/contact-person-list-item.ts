export class ContactPersonListItem {
  data: any;

  firstName?: string;
  middleName?: string;
  surname?: string;
  email?: string;
  phone?: string;

  map(o: any) {
    this.data = o;
    if (o.customer_contact_person) {
      this.firstName =
        o.customer_contact_person.customer_contact_person_first_name;
      this.middleName =
        o.customer_contact_person.customer_contact_person_middle_name;
      this.surname =
        o.customer_contact_person.customer_contact_person_last_name;
      this.email = o.customer_contact_person.customer_contact_person_email;
      this.phone = o.customer_contact_person.customer_contact_person_telefon;
    }

    return this;
  }
}
