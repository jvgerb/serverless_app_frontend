export class PODListItem {
  data: any;

  podId?: string;
  place?: string;
  entranceZipCode?: string;
  streetAddress?: string;
  additionalAddressAttribute?: string;
  entranceStreetNumber?: string;

  map(o: any) {
    this.data = o;

    // this.podId = o. ;
    // this.place = o. ;
    // this.entranceZipCode = o. ;
    // this.streetAddress = o. ;
    // this.additionalAddressAttribute = o. ;
    // this.entranceStreetNumber = o. ;

    return this;
  }
}
