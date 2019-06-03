export class EntranceListItem {
  data: any;

  entranceId?:string;
  entranceDescription?:string;
  entranceStreet?:string;
  entranceStreetNumber?:string;
  entranceZipCode?:string;
  entrancePlace?:string;

  map(o: any) {
    this.data = o;

    this.entranceId = o.entrance_id;
    this.entranceDescription = o.entrance_description;
    this.entranceStreet = o.entrance_street;
    this.entranceStreetNumber = o.entrance_street_number;
    this.entranceZipCode = o.entrance_zip_code;
    this.entrancePlace = o.entrance_place;

    return this;
  }
}
