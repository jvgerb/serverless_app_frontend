import ApiBase from './api-base';
import { normalizeParams } from './normalize-params.decorator';
import { RepresentativeListItem } from './models/customer/representative-list-item';
import { CustomerListItem } from './models/customer/customer-list-item';
import { ContractListItem } from './models/customer/contract-list-item';
import { ContactPersonListItem } from './models/customer/contact-person-list-item';
import { Customer } from './models/customer/customer';
import { ContactPerson } from './models/customer/contact-person';
import { Representative} from './models/customer/representative';
import { Contract } from './models/customer/contract';

export default class extends ApiBase {

  @normalizeParams
  async getCustomerById(customerId: string) {
    const result = await this.get(      `customer/${customerId}`    );
    return result.map((x: any) => new RepresentativeListItem().map(x));
  }

  @normalizeParams
  async getRepresentativeList(placeZip: string, type: string) {
    const result = await this.get(
      `customer/findRepresentative?place_zip=${placeZip}&type=${type}`
    );
    return result.map((x: any) => new RepresentativeListItem().map(x));
  }

  @normalizeParams
  async getCustomerList(placeZip: string, type: string) {
    const result = await this.get(
      `customer/find?place_zip=${placeZip}&type=${type}`
    );
    return result.map((x: any) => new CustomerListItem().map(x));
  }

  @normalizeParams
  async getContractList(product: string, partnerType: string, validTo: string) {
    const result = await this.get(
      `customer_contract/find?partner_type=${partnerType}&product=${product}&valid_to=${validTo}`
    );
    return result.map((x: any) => new ContractListItem().map(x));
  }

  @normalizeParams
  async getContactPersonList(phone: string, functionName: string) {
    const result = await this.get(
      `customer/findContactPerson?function=${functionName}&phone=${phone}`
    );
    return result.map((x: any) => new ContactPersonListItem().map(x));
  }

  async postCustomer(data: Customer) {
    return await this.post(`customer`, data.mapOut());
  }

  async postContactPerson(data: ContactPerson) {
    if(!data.customerId) throw 'No Customer ID';

    const customer = await this.getCustomerById(data.customerId);
    customer.customer_contact_person = data.mapOut();
    return await this.postCustomer(customer);
  }

  async postRepresentative(data: Representative) {
    if(!data.customerId) throw 'No Customer ID';

    const customer = await this.getCustomerById(data.customerId);
    customer.customer_representative = data.mapOut();
    customer.customer_representative_appointed = data.appointed;
    return await this.postCustomer(customer);
  }

  async postContract(data: Contract) {
    if(!data.customerId) throw 'No Customer ID';

    const customer = await this.getCustomerById(data.customerId);
    data.customerId = customer.customerId;
    data.customerName = customer.customerName;
    return await this.post(`customer_contract`, data.mapOut());
  }
}
