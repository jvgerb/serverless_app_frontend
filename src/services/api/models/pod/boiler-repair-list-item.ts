export class BoilerRepairListItem {
  data: any;

  repairDate?: string;
  supplierId?: string;
  maintenanceInvId?: string;
  repairReportFiled?: string;
  reportApprovedBy?: string;
  approvedOn?: string;
  repairReason?: string;
  repairCost?: string;

  map(o: any) {
    this.data = o;

    // this.repairDate = o. ;
    // this.supplierId = o. ;
    // this.maintenanceInvId = o. ;
    // this.repairReportFiled = o. ;
    // this.reportApprovedBy = o. ;
    // this.approvedOn = o. ;
    // this.repairReason = o. ;
    // this.repairCost = o. ;

    return this;
  }
}
