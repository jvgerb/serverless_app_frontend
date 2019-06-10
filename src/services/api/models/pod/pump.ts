export class Pump {
    componentType?: string;
    manufacturer?: string;
    designationType?: string;
    listPriceNet?: string;
    netPricePurchase?: string;
    serialNumber?: string;
    purchaseDate?: string;
    warrantyUntil?: string;
    purchaseFrom?: string;
    installationDate?: string;
    interfaceProtocol?: string;
    circulationPump?: string;
    useCasePump?: string;
    controlType?: string;
    circulatedType?: string;
    operatingHoursPeryear?: string;
    pn?: string;
    maximumHeight?: string;
    maxFlowRate?: string;
    fittingLength?: string;
    Size300mm?: string; // 300mm?
    electricalPowerInput?: string;
    p1min?: string;
    p1max?: string;
    readable?: string;
    comment?: string;
    
      constructor() {
        
      }
    
      mapOut() {
        return {};
      }
    }