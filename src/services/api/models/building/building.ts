import { v4 as uuid } from 'uuid';

export class Building {
  buildingId?: string;
  buildingName?: string;
  street?: string;
  numberofEntrances?: string;
  category?: string;
  streetNumber?: string;
  numberofFloors?: string;
  heatingAreaTotal?: string;
  zipCode?: string;
  numberofApartments?: string;
  year?: string;
  place?: string;
  comment?: string;

  constructor() {
    this.buildingId = uuid();
  }

  mapOut() {
    return {
      building_name: this.buildingName,
      gsi_1_sk: this.place,
      gsi_3_pk: this.place,
      gsi_2_sk: this.category,
      gsi_2_pk: 'building',
      item_id: uuid(),
      building_number_of_floors: 3,
      building_place: this.place,
      gsi_3_sk: this.place,
      building_street_number: this.streetNumber,
      building_zip_code: this.zipCode,
      pk_id: this.buildingId,
      building_comment: this.comment,
      building_number_of_apartments: this.numberofApartments,
      item_type_debug: 'building',
      building_heating_area_total: this.heatingAreaTotal,
      building_street: this.street,
      building_number_of_entrances: this.numberofEntrances,
      //   item_timestamp: 'May/17/2019:11:52:03 +0000',
      sk: this.place,
      building_id: this.buildingId,
      building_year: this.year,
      building_category: this.category,
    };
  }
}
