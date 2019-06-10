import ApiBase from './api-base';
import { normalizeParams } from './normalize-params.decorator';
import { SupplierListItem } from './models/supplier/supplier-list-item';
import { ContactPersonListItem } from './models/supplier/contact-person-list-item';
import { ContractListItem } from './models/supplier/contract-list-item';
import { Supplier } from './models/supplier/supplier';
import { ContactPerson } from './models/supplier/contact-person';
import { Contract } from './models/supplier/contract';

export default class extends ApiBase {
  @normalizeParams
  async getSupplierById(supplierId: string) {
    return await this.get(`supplier/${supplierId}`);
  }

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
  async getContactPersonList(functionName: string) {
    const result = await this.get(
      `supplier/findContactPerson?function=${functionName}`
    );
    return result.map((x: any) => new ContactPersonListItem().map(x));
  }

  @normalizeParams
  async getContractList(product: string, categoryType: string) {
    const result = await this.get(
      `supplier_contract/find?category_type=${categoryType}&product=${product}`
    );
    return result.map((x: any) => new ContractListItem().map(x));
  }

  async postSupplier(data: Supplier) {
    return await this.post(`supplier`, data.mapOut());
  }

  // not found
  async postContactPerson(data: ContactPerson) {
    throw 'Not Implemented!';
    // if (!data.supplierId) throw 'No Supplier ID';

    // const supplier = await this.getSupplierById(data.supplierId);
    // data.supplierId = supplier.supplier_id;
    // return await this.post(`supplier`, data.mapOut());
  }

  async postContract(data: Contract) {
    if (!data.supplierId) throw 'No Supplier ID';

    const supplier = await this.getSupplierById(data.supplierId);
    data.supplierId = supplier.supplier_id;
    data.supplierName = supplier.supplier_name;
    return await this.post(`supplier_contract`, data.mapOut());
  }
}
