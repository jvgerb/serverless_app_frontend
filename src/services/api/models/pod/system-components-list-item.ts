export class SystemComponentsListItem {
  data: any;

  component?: string;
  designation?: string;
  serialNumber?: string;
  purchaseDate?: string;
  warrantyUntil?: string;

  map(o: any) {
    this.data = o;

    // this.component = o. ;
    // this.designation = o. ;
    // this.serialNumber = o. ;
    // this.purchaseDate = o. ;
    // this.warrantyUntil = o. ;

    return this;
  }
}
