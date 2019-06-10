export class PODSummary {
  data: any;

  podId?: string;
  streetAddress?: string;
  additionalAttribute?: string;
  streetNumber?: string;
  zipCode?: string;
  place?: string;
  comment?: string;

  map(o: any) {
    this.data = o;

    // this.podId = o. ;
    // this.streetAddress = o. ;
    // this.additionalAttribute = o. ;
    // this.streetNumber = o. ;
    // this.zipCode = o. ;
    // this.place = o. ;
    // this.comment = o. ;

    return this;
  }
}
