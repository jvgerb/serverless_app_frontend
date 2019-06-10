export class DistributionNetwork {
  distributionNetworkId?: string;
  distributionNetworkType?: string;
  distributionNetworkName?: string;
  hydraulicCircuiteType?: string;
  distributionClassification?: string;
  distributionAssignment?: string;
  length?: string;
  material?: string;
  flowRateType?: string;
  comment?: string;

  constructor() {}

  mapOut() {
    return {};
  }
}
