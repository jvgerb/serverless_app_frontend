export class StatusReportsItem {
  data: any;

  podId?: string;
  reportCreatedOn?: string;
  createdBy?: string;
  reference?: string;
  reportApprovedBy?: string;
  approvedOn?: string;
  actionRequired?: string;
  actionDue?: string;

  map(o: any) {
    this.data = o;

    // this.podId = o. ;
    // this.reportCreatedOn = o. ;
    // this.createdBy = o. ;
    // this.reference = o. ;
    // this.reportApprovedBy = o. ;
    // this.approvedOn = o. ;
    // this.actionRequired = o. ;
    // this.actionDue = o. ;

    return this;
  }
}
