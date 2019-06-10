export class DistributionNetworkSummary {
  data: any;

  distributionNetworkId?: string;
  distributionNetworkType?: string;
  distributionNetworkName?: string;
  hydraulicCircuiteTpe?: string;
  distributionClassification?: string;
  distributionAssignment?: string;
  length?: string;
  material?: string;
  flowRateType?: string;
  comment?: string;

  map(o: any) {
    this.data = o;

    // this.distributionNetworkId = o. ;
    // this.distributionNetworkType = o. ;
    // this.distributionNetworkName = o. ;
    // this.hydraulicCircuiteTpe = o. ;
    // this.distributionClassification = o. ;
    // this.distributionAssignment = o. ;
    // this.length = o. ;
    // this.material = o. ;
    // this.flowRateType = o. ;
    // this.comment = o. ;

    return this;
  }
}
