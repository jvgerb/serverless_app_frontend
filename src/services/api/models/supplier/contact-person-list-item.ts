export class ContactPersonListItem {
  data: any;

  firstName?: string;
  middleName?: string;
  surname?: string;
  email?: string;
  phone?: string;

  map(o: any) {
    this.data = o;
    if (o.supplier_contact_person) {
      this.firstName =
        o.supplier_contact_person.supplier_contact_person_first_name;
      this.middleName =
        o.supplier_contact_person.supplier_contact_person_middle_name;
      this.surname =
        o.supplier_contact_person.supplier_contact_person_last_name;
      this.email = o.supplier_contact_person.supplier_contact_person_email;
      this.phone = o.supplier_contact_person.supplier_contact_person_telefon;
    }

    return this;
  }
}
