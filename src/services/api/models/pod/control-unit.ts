export class ControlUnit {
    controlUnitId?: string;
    componentType?: string;
    manufacturer?: string;
    listPriceNet?: string;
    unitPurchasePriceNet?: string;
    designation?: string;
    serialNumber?: string;
    purchaseDate?: string;
    warrantyUntil?: string;
    boilerInstallationDate?: string;
    interfaceProtocol?: string;
    controlUnitAnalogDigital?: string;
    operationMode?: string;
    remoteControl?: string;
    comment?: string;
    
      constructor() {
        
      }
    
      mapOut() {
        return {};
      }
    }