import ApiBase from './api-base';
import { normalizeParams } from './normalize-params.decorator';
import { SupplierListItem } from './models/supplier/supplier-list-item';
import { ContactPersonListItem } from './models/supplier/contact-person-list-item';
import { ContractListItem } from './models/supplier/contract-list-item';

export default class extends ApiBase {
  @normalizeParams
  async getSupplierList(
    placeZip: string,
    industrySector: string,
    supplierType: string
  ) {
    const result = await this.get(
      `supplier/find?type=${supplierType}&place_zip=${placeZip}&industry=${industrySector}`
    );
    return result.map((x: any) => new SupplierListItem().map(x));
  }
  
  @normalizeParams
  async getContactPersonList(phone: string, functionName: string) {
    const result = await this.get(
      `supplier/findContactPerson?function=${functionName}&phone=${phone}`
    );
    return result.map((x: any) => new ContactPersonListItem().map(x));
  }

  @normalizeParams
  async getContractList(
    product: string,
    categoryType: string,
  ) {
    const result = await this.get(
      `supplier_contract/find?category_type=${categoryType}&product=${product}`
    );
    return result.map((x: any) => new ContractListItem().map(x));
  }
}
