export class Representative {
  customerId?: string;

  appointed?: string;
  organizationName?: string;
  type?: string;
  street?: string;
  streetNumber?: string;
  zipCode?: string;
  place?: string;
  qualityofRelationship?: string;
  contactPersonTitle?: string;
  contactPersonTitleAddon?: string;
  contactPersonFirstName?: string;
  contactPersonMiddleName?: string;
  contactPersonSurname?: string;
  contactPersonFunction?: string;
  contactPersonEmail?: string;
  contactPersonTelefon?: string;
  contactPersonMobile?: string;
  contactPersonFax?: string;
  contactPersonBirthday?: string;
  contactPersonGender?: string;
  contactPersonMaritalStatus?: string;
  contactPersonPoliticalOrientation?: string;
  contactPersonReligion?: string;
  contactPersonHobby?: string;
  comment?: string;

  mapOut() {
    return {
      customer_representative_comment: this.comment,
      customer_representative_contact_person_birthday: this
        .contactPersonBirthday,
      customer_representative_contact_person_email: this.contactPersonEmail,
      customer_representative_contact_person_fax: this.contactPersonFax,
      customer_representative_contact_person_first_name: this
        .contactPersonFirstName,
      customer_representative_contact_person_function: this
        .contactPersonFunction,
      customer_representative_contact_person_gender: this.contactPersonGender,
      customer_representative_contact_person_hobby: this.contactPersonHobby,
      customer_representative_contact_person_marital_status: this
        .contactPersonMaritalStatus,
      customer_representative_contact_person_middle_name: this
        .contactPersonMiddleName,
      customer_representative_contact_person_mobile: this.contactPersonMobile,
      customer_representative_contact_person_political_orientation: this
        .contactPersonPoliticalOrientation,
      customer_representative_contact_person_religion: this
        .contactPersonReligion,
      customer_representative_contact_person_surname: this.contactPersonSurname,
      customer_representative_contact_person_telefon: this.contactPersonTelefon,
      customer_representative_contact_person_title: this.contactPersonTitle,
      customer_representative_contact_person_title_add_on: this
        .contactPersonTitleAddon,
      customer_representative_organization_name: this.organizationName,
      customer_representative_place: this.place,
      customer_representative_quality_of_relationship: this
        .qualityofRelationship,
      customer_representative_street: this.street,
      customer_representative_street_number: this.streetNumber,
      customer_representative_type: this.type,
      customer_representative_zip_code: this.zipCode,
    };
  }
}
