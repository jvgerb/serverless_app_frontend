import { v4 as uuid } from 'uuid';

export class Entrance {
  buildingId?: string;

  entranceId?: string;
  description?: string;
  street?: string;
  streetNumber?: string;
  zipCode?: string;
  place?: string;

  buildingInfo: any;

  constructor() {
    this.entranceId = uuid();
  }

  mapOut() {
    return {
      gsi_3_pk: 'building_entrance',
      gsi_1_sk: this.entranceId,
      gsi_2_sk: 'building_entrance',
      gsi_2_pk: this.buildingId,
      entrance_place: this.place,
      item_id: uuid(),
      building_info: this.buildingInfo,
      gsi_3_sk: this.street,
      pk_id: this.entranceId,
      item_type_debug: 'building_entrance',
      entrance_id: this.entranceId,
      entrance_street_number: this.streetNumber,
      entrance_zip_code: this.zipCode,
      entrance_street: this.street,
      entrance_description: this.description,
      //   item_timestamp: 'May/16/2019:03:40:00 +0000',
      sk: this.buildingId,
    };
  }
}
